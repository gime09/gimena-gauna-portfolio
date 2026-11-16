import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Eyebrow, GlassCard, trackSpotlight } from "@/components/portfolio/ui";
import { areas, profile, projectsByArea, type AreaId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gimena Gauna · QA Engineer, Gestión de proyectos y Analista Funcional" },
      {
        name: "description",
        content:
          "Portafolio de Gimena Gauna, Técnica en Programación (UTN): proyectos de QA & Testing, Gestión de proyectos y Análisis Funcional.",
      },
      { property: "og:title", content: "Gimena Gauna · Portafolio" },
      {
        property: "og:description",
        content: "Calidad, análisis y gestión para software que funciona.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const highlights = [{ value: "3", label: "áreas de especialidades" }];

function Index() {
  const [area, setArea] = useState<AreaId>("qa");
  const current = areas.find((a) => a.id === area)!;
  const preview = projectsByArea(area).slice(0, 4);

  return (
    <div className="space-y-10">
      <ProfileCard className="lg:hidden" />

      <section className="animate-rise">
        <Eyebrow>Hola, soy Gimena · Bienvenidos a mi portafolio</Eyebrow>
        <h1 className="mt-4 text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
          Calidad, análisis y gestión para software que{" "}
          <span className="font-serif font-normal italic text-primary underline decoration-2 underline-offset-8">
            funciona
          </span>
        </h1>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.bio}
        </p>
      </section>

      <section>
        {highlights.map((h) => (
          <GlassCard key={h.label} interactive className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3">
            <p className="shrink-0 text-3xl font-bold text-primary sm:text-4xl">{h.value}</p>
            <p className="text-xl font-medium leading-snug text-muted-foreground sm:text-2xl">{h.label}</p>
          </GlassCard>
        ))}
      </section>

      <section aria-labelledby="areas-title">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="areas-title" className="text-3xl font-bold tracking-tight">
              Mis áreas
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Elegí un perfil para ver su evidencia.</p>
          </div>
          <div role="tablist" aria-label="Perfiles" className="inline-flex gap-1 overflow-x-auto rounded-full glass p-1">
            {areas.map((a) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={a.id === area}
                onClick={() => setArea(a.id)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  a.id === area ? "btn-iridescent text-brand-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <div key={area} role="tabpanel" className="animate-rise space-y-4">
          <GlassCard className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{current.tagline}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
            </div>
            <Link
              to={current.to}
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:self-auto"
            >
              Ver todo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </GlassCard>
          <div className="grid gap-4 md:grid-cols-2">
            {preview.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <Link
        to="/contacto"
        onMouseMove={trackSpotlight}
        className="spotlight group flex items-center justify-between gap-4 rounded-2xl glass px-6 py-8 sm:px-10 sm:py-12"
      >
        <span className="text-3xl font-bold tracking-tight sm:text-5xl">
          Trabajemos <span className="font-serif font-normal italic text-primary">juntos</span>
        </span>
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-foreground/10 transition-all group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground sm:h-20 sm:w-20">
          <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </span>
      </Link>
    </div>
  );
}
