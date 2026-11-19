import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  FileCode2,
  FileSpreadsheet,
  FileText,
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
import type { ProjectFile, ProjectImage } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const fileIcons = {
  docx: FileText,
  xlsx: FileSpreadsheet,
  pptx: Presentation,
  xml: FileCode2,
} satisfies Record<ProjectFile["format"], typeof FileText>;

const fileColors: Record<ProjectFile["format"], string> = {
  docx: "text-chart-2",
  xlsx: "text-success",
  pptx: "text-warning",
  xml: "text-chart-5",
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
  return (
    <ul className="space-y-2">
      {files.map((file) => {
        const Icon = fileIcons[file.format];

        return (
          <li key={file.href}>
            <a
              href={file.href}
              download
              className="group flex items-center gap-3 rounded-xl border border-glass-border bg-foreground/[0.04] px-3 py-2.5 transition-colors hover:border-primary/60 hover:bg-foreground/[0.07]"
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
              <Download
                className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="sr-only">Descargar {file.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
