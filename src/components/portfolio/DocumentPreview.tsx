import { useEffect, useState, type RefObject } from "react";
import { Download, ExternalLink, Loader2, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export type PreviewDocument = {
  title: string;
  meta?: string;
  formatLabel: string;
  preview: { kind: "pdf" | "text"; href: string };
  downloadHref: string;
  downloadName?: string;
};

type DocumentPreviewDialogProps = {
  document: PreviewDocument | null;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLElement | null>;
};

const actionClass =
  "grid h-9 w-9 place-items-center rounded-full border border-glass-border bg-foreground/[0.06] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground";

export function DocumentPreviewDialog({
  document: doc,
  onClose,
  returnFocusRef,
}: DocumentPreviewDialogProps) {
  const [text, setText] = useState<{ href: string; content: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const textHref = doc?.preview.kind === "text" ? doc.preview.href : null;

  useEffect(() => {
    if (!textHref) {
      setText(null);
      setError(null);
      return;
    }

    let cancelled = false;
    setText(null);
    setError(null);

    fetch(textHref)
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.text();
      })
      .then((content) => {
        if (!cancelled) setText({ href: textHref, content });
      })
      .catch(() => {
        if (!cancelled) setError("No se pudo cargar el contenido. Usá el botón de descarga.");
      });

    return () => {
      cancelled = true;
    };
  }, [textHref]);

  return (
    <Dialog
      open={doc !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        showClose={false}
        className="flex h-[86svh] w-[calc(100%-1.25rem)] max-w-5xl flex-col gap-0 overflow-hidden rounded-3xl border-glass-border bg-popover/95 p-0 backdrop-blur-xl sm:h-[88vh] sm:rounded-3xl"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          returnFocusRef?.current?.focus();
        }}
      >
        {doc && (
          <>
            <header className="flex items-start gap-3 border-b border-glass-border px-4 py-3.5 sm:px-5">
              <div className="min-w-0 flex-1">
                <DialogTitle className="truncate text-base font-bold leading-snug sm:text-lg">
                  {doc.title}
                </DialogTitle>
                <DialogDescription className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                  {doc.meta && <span>{doc.meta}</span>}
                  <span className="rounded-full border border-glass-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    Vista previa {doc.formatLabel}
                  </span>
                </DialogDescription>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <a
                  href={doc.preview.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${doc.title} en una pestaña nueva`}
                  title="Abrir en una pestaña nueva"
                  className={actionClass}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={doc.downloadHref}
                  download={doc.downloadName}
                  aria-label={`Descargar ${doc.title}`}
                  title="Descargar"
                  className={actionClass}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                </a>
                <DialogClose aria-label="Cerrar vista previa" className={actionClass}>
                  <X className="h-4 w-4" aria-hidden="true" />
                </DialogClose>
              </div>
            </header>

            <div className="min-h-0 flex-1 bg-foreground/[0.04]">
              {doc.preview.kind === "pdf" ? (
                <iframe
                  src={`${doc.preview.href}#view=FitH`}
                  title={`Vista previa de ${doc.title}`}
                  className="h-full w-full border-0 bg-white"
                />
              ) : error ? (
                <div className="grid h-full place-items-center px-6 text-center">
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{error}</p>
                </div>
              ) : text && text.href === doc.preview.href ? (
                <pre className="h-full overflow-auto p-4 text-xs leading-relaxed text-foreground/90 sm:p-5">
                  <code>{text.content}</code>
                </pre>
              ) : (
                <div className="grid h-full place-items-center">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" aria-hidden="true" />
                  <span className="sr-only">Cargando vista previa</span>
                </div>
              )}
            </div>

            <footer className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-glass-border px-4 py-3 text-xs text-muted-foreground sm:px-5">
              <span>
                {doc.preview.kind === "pdf"
                  ? "Vista previa en PDF."
                  : "Vista previa del contenido."}
              </span>
              <span>La descarga entrega el archivo original en formato {doc.formatLabel}.</span>
            </footer>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
