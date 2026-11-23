import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText, Github, Linkedin, Mail } from "lucide-react";

import { WhatsAppIcon } from "@/components/portfolio/WhatsAppIcon";
import { PageHeader, trackSpotlight } from "@/components/portfolio/ui";
import { cvs } from "@/data/cvs";
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
            <a
              key={cv.id}
              href={cv.url}
              download={cv.filename}
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
              <Download className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-y-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>

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
