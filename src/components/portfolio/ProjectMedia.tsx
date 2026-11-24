import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileCode2,
  FileSpreadsheet,
  FileText,
  FileType,
  Presentation,
  X,
} from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { projectFilePreview, type ProjectFile, type ProjectImage } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { DocumentPreviewDialog, type PreviewDocument } from "./DocumentPreview";

const fileIcons = {
  docx: FileText,
  xlsx: FileSpreadsheet,
  pptx: Presentation,
  xml: FileCode2,
  pdf: FileType,
} satisfies Record<ProjectFile["format"], typeof FileText>;

const fileColors: Record<ProjectFile["format"], string> = {
  docx: "text-chart-2",
  xlsx: "text-success",
  pptx: "text-warning",
  xml: "text-chart-5",
  pdf: "text-destructive",
};

export function ProjectGallery({ images, title }: { images: ProjectImage[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const active = index !== null ? images[index] : null;

  function move(delta: number) {
    setIndex((current) => {
      if (current === null) return current;
      return (current + delta + images.length) % images.length;
    });
  }

  return (
    <>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {images.map((image, imageIndex) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setIndex(imageIndex);
              }}
              aria-label={`Ampliar ${image.caption}`}
              aria-haspopup="dialog"
              className="group block w-full rounded-xl text-left"
            >
              <span className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-glass-border bg-foreground/[0.04]">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </span>
              <span className="mt-1.5 block text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={index !== null}
        onOpenChange={(open) => {
          if (!open) setIndex(null);
        }}
      >
        <DialogContent
          showClose={false}
          className="max-h-[92vh] w-[calc(100%-1.5rem)] max-w-5xl gap-0 overflow-hidden rounded-3xl border-glass-border bg-popover/95 p-3 backdrop-blur-xl sm:p-4"
          onKeyDown={(event) => {
            if (images.length < 2) return;
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            triggerRef.current?.focus();
          }}
        >
          {index !== null && active && (
            <>
              <DialogTitle className="sr-only">
                {title} · {active.caption}
              </DialogTitle>
              <DialogDescription className="sr-only">{active.alt}</DialogDescription>

              <div className="relative flex min-h-0 items-center justify-center">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain"
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3">
                <p className="min-w-0 flex-1 text-sm font-medium leading-snug">{active.caption}</p>
                <div className="flex shrink-0 items-center gap-1.5">
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      aria-label="Captura anterior"
                      className="grid h-9 w-9 place-items-center rounded-full border border-glass-border bg-foreground/[0.06] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                  <p className="min-w-11 text-center text-xs tabular-nums text-muted-foreground">
                    {index + 1} / {images.length}
                  </p>
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => move(1)}
                      aria-label="Captura siguiente"
                      className="grid h-9 w-9 place-items-center rounded-full border border-glass-border bg-foreground/[0.06] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                  <DialogClose
                    aria-label="Cerrar imagen"
                    className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-glass-border bg-foreground/[0.06] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </DialogClose>
                </div>
              </div>
              <p className="sr-only" aria-live="polite">
                Captura {index + 1} de {images.length}: {active.caption}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function ProjectFiles({ files }: { files: ProjectFile[] }) {
  const [active, setActive] = useState<ProjectFile | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const previewDocument: PreviewDocument | null = active
    ? {
        title: active.label,
        meta: [active.format.toUpperCase(), active.size, active.note].filter(Boolean).join(" · "),
        formatLabel: active.format.toUpperCase(),
        preview: projectFilePreview(active),
        downloadHref: active.href,
        downloadName: active.href.split("/").pop() ?? active.label,
      }
    : null;

  return (
    <>
      <ul className="space-y-2">
        {files.map((file) => {
          const Icon = fileIcons[file.format];
          const fileName = file.href.split("/").pop();

          return (
            <li
              key={file.href}
              className="flex items-stretch overflow-hidden rounded-xl border border-glass-border bg-foreground/[0.04] transition-colors focus-within:border-primary/60 hover:border-primary/60 hover:bg-foreground/[0.07]"
            >
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActive(file);
                }}
                className="group flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left"
              >
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-foreground/[0.06]",
                    fileColors[file.format],
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug text-foreground">
                    {file.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {file.format.toUpperCase()} · {file.size}
                    {file.note ? ` · ${file.note}` : ""}
                  </span>
                </span>
                <span className="hidden shrink-0 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary sm:flex">
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  Vista previa
                </span>
                <Eye
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:hidden"
                  aria-hidden="true"
                />
                <span className="sr-only">Vista previa de {file.label}</span>
              </button>
              <a
                href={file.href}
                download={fileName}
                aria-label={`Descargar ${file.label}`}
                title={`Descargar ${file.format.toUpperCase()}`}
                className="grid w-11 shrink-0 place-items-center border-l border-glass-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>

      <DocumentPreviewDialog
        document={previewDocument}
        onClose={() => setActive(null)}
        returnFocusRef={triggerRef}
      />
    </>
  );
}
