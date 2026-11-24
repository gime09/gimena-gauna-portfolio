# Genera un PDF de vista previa por cada documento descargable (.docx/.xlsx/.pptx).
# El archivo original no se toca: sigue siendo el que se descarga desde el sitio.
#
# Uso:
#   .\scripts\build-previews.ps1
#   .\scripts\build-previews.ps1 -Force
#   .\scripts\build-previews.ps1 -Soffice "C:\ruta\soffice.com"
#
# Requiere LibreOffice. Los PDFs generados se commitean, así el deploy no depende
# de tener LibreOffice instalado.

[CmdletBinding()]
param(
  [switch]$Force,
  [string]$Soffice,
  [int]$TimeoutSeconds = 180
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$mediaRoot = Join-Path $repoRoot "public\media"

if (-not (Test-Path $mediaRoot)) {
  throw "No se encontró $mediaRoot"
}

if (-not $Soffice) {
  $candidates = @(
    "C:\Program Files\LibreOffice\program\soffice.com",
    "C:\Program Files (x86)\LibreOffice\program\soffice.com",
    (Join-Path $env:LOCALAPPDATA "Programs\LibreOffice\program\soffice.com")
  )
  $Soffice = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
}

if (-not $Soffice -or -not (Test-Path $Soffice)) {
  throw "No se encontró LibreOffice. Pasá la ruta con -Soffice 'C:\...\soffice.com'."
}

$filters = @{
  ".docx" = "pdf:writer_pdf_Export"
  # Una hoja por página: evita que las planillas anchas se corten en varias páginas.
  ".xlsx" = 'pdf:calc_pdf_Export:{"SinglePageSheets":{"type":"boolean","value":true}}'
  ".pptx" = "pdf:impress_pdf_Export"
}

$sources = Get-ChildItem -Path $mediaRoot -Recurse -File |
  Where-Object { $filters.ContainsKey($_.Extension.ToLowerInvariant()) } |
  Sort-Object FullName

if ($sources.Count -eq 0) {
  Write-Host "No hay documentos para convertir."
  exit 0
}

$converted = 0
$skipped = 0
$failed = 0

foreach ($source in $sources) {
  $previewDir = Join-Path $source.Directory.Parent.FullName "preview"
  $target = Join-Path $previewDir ($source.BaseName + ".pdf")

  if (-not $Force) {
    $upToDate = $false
    if (Test-Path $target) {
      $upToDate = (Get-Item $target).LastWriteTimeUtc -ge $source.LastWriteTimeUtc
    }
    if ($upToDate) {
      Write-Host "sin cambios  $($source.Name)"
      $skipped++
      continue
    }
  }

  New-Item -ItemType Directory -Force -Path $previewDir | Out-Null
  if (Test-Path $target) {
    Remove-Item $target -Force
  }

  $filter = $filters[$source.Extension.ToLowerInvariant()]

  $profileDir = Join-Path $env:TEMP "lo-preview-$([guid]::NewGuid())"
  $profileUrl = "file:///" + ($profileDir -replace "\\", "/")
  $arguments = @(
    "-env:UserInstallation=$profileUrl",
    "--headless",
    "--nologo",
    "--nodefault",
    "--norestore",
    "--nolockcheck",
    "--convert-to",
    $filter,
    "--outdir",
    $previewDir,
    $source.FullName
  )

  try {
    $process = Start-Process -FilePath $Soffice -ArgumentList $arguments -NoNewWindow -PassThru
    $completed = $process.WaitForExit($TimeoutSeconds * 1000)

    if (-not $completed) {
      $process.Kill()
      Write-Warning "Tiempo agotado al convertir $($source.Name)"
      $failed++
    } elseif (Test-Path $target) {
      $kb = [math]::Round((Get-Item $target).Length / 1KB)
      Write-Host "generado     $($source.Name) -> preview\$($source.BaseName).pdf ($kb KB)"
      $converted++
    } else {
      Write-Warning "LibreOffice no generó el PDF de $($source.Name)"
      $failed++
    }
  } finally {
    if (Test-Path $profileDir) {
      Remove-Item $profileDir -Recurse -Force -ErrorAction SilentlyContinue
    }
  }
}

Write-Host ""
Write-Host "$converted generado(s), $skipped sin cambios, $failed fallido(s)."
if ($failed -gt 0) {
  exit 1
}
