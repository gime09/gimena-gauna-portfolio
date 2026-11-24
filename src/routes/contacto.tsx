import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Eye, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useRef, useState } from "react";

import { DocumentPreviewDialog } from "@/components/portfolio/DocumentPreview";
import { WhatsAppIcon } from "@/components/portfolio/WhatsAppIcon";
import { PageHeader, trackSpotlight } from "@/components/portfolio/ui";
import { cvs, type CvFile } from "@/data/cvs";
import { profile } from "@/data/portfolio";
import { canonical, pageMeta } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: pageMeta({
      title: "Contacto · Gimena Gauna",
      description: "Contactá a Gimena Gauna por correo, WhatsApp, LinkedIn o GitHub.",
      path: "/contacto",
    }),
    links: canonical("/contacto"),
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Correo", value: profile.email, href: profile.emailUrl },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp Argentina",
    value: profile.whatsappArgentinaDisplay,
    href: profile.whatsappArgentinaUrl,
    flag: "🇦🇷",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp Chile",
    value: profile.whatsappChileDisplay,
    href: profile.whatsappChileUrl,
    flag: "🇨🇱",
  },
  { icon: Linkedin, label: "LinkedIn", value: "gimena-gauna", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "gime09", href: profile.github },
];

function ContactPage() {
  const [activeCv, setActiveCv] = useState<CvFile | null>(null);
  const cvTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Contacto"
        title="Trabajemos"
        accent="juntos"
        description="¿Buscás a alguien para QA, análisis funcional o gestión de proyectos? Escribime por el canal que te quede más cómodo o descargá mi CV."
      />

      <div>
        <h2 className="text-lg font-bold">Descargá mi CV</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tengo una versión para cada rol.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {cvs.map((cv) => (
            <div
              key={cv.id}
              onMouseMove={trackSpotlight}
              className="spotlight group flex items-center gap-4 rounded-2xl glass p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <FileText className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">CV · {cv.label}</span>
                <span className="block text-xs leading-relaxed text-muted-foreground">
                  {cv.description}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`Vista previa del CV ${cv.label}`}
                  onClick={(event) => {
                    cvTriggerRef.current = event.currentTarget;
                    setActiveCv(cv);
                  }}
                  className="grid h-9 w-9 place-items-center rounded-full border border-glass-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href={cv.url}
                  download={cv.filename}
                  aria-label={`Descargar CV ${cv.label}`}
                  title="Descargar"
                  className="grid h-9 w-9 place-items-center rounded-full border border-glass-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                </a>
              </span>
            </div>
          ))}
        </div>
      </div>

      <DocumentPreviewDialog
        document={
          activeCv
            ? {
                title: `CV · ${activeCv.label}`,
                meta: activeCv.description,
                formatLabel: "PDF",
                preview: { kind: "pdf", href: activeCv.url },
                downloadHref: activeCv.url,
                downloadName: activeCv.filename,
              }
            : null
        }
        onClose={() => setActiveCv(null)}
        returnFocusRef={cvTriggerRef}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            onMouseMove={trackSpotlight}
            className="spotlight group flex items-center gap-4 rounded-2xl glass p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center gap-1 rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <c.icon className="h-5 w-5" />
              {c.flag && (
                <span className="ml-0.5 text-sm" aria-hidden="true">
                  {c.flag}
                </span>
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {c.label}
              </span>
              <span className="block truncate font-semibold">{c.value}</span>
            </span>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </div>
  );
}
