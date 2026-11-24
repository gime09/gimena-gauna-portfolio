import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Eyebrow, GlassCard, SectionTitle, trackSpotlight } from "@/components/portfolio/ui";
import { cvs } from "@/data/cvs";
import { areas, featuredByArea, profile, projectsByArea, type AreaId } from "@/data/portfolio";
import { canonical, jsonLd, OG_IMAGE, pageMeta, SITE_NAME, SITE_URL } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...pageMeta({
        title: "Gimena Gauna · QA, Gestión de proyectos y Análisis Funcional",
        description:
          "Portafolio de Gimena Gauna, Técnica en Programación (UTN): proyectos de QA & Testing, Gestión de proyectos y Análisis Funcional.",
        path: "/",
      }),
      jsonLd({
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_NAME,
        jobTitle: "QA Engineer · Gestión de proyectos · Analista Funcional",
        description: profile.bio,
        url: SITE_URL,
        image: OG_IMAGE.url,
        email: `mailto:${profile.email}`,
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: ["QA & Testing", "Gestión de proyectos", "Análisis Funcional"],
        alumniOf: { "@type": "CollegeOrUniversity", name: "UTN" },
      }),
    ],
    links: canonical("/"),
  }),
  component: Index,
});

function Index() {
  const [area, setArea] = useState<AreaId>("qa");
  const current = areas.find((a) => a.id === area)!;
  const preview = featuredByArea(area);
  const total = projectsByArea(area).length;

  const stats = [
    { value: String(areas.length), label: "áreas de especialidad" },
    { value: String(cvs.length), label: "CV, uno por perfil" },
  ];

  function handleTabKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const next =
      e.key === "Home"
        ? 0
        : e.key === "End"
          ? areas.length - 1
          : (index + (e.key === "ArrowRight" ? 1 : -1) + areas.length) % areas.length;
    const nextArea = areas[next]!;
    setArea(nextArea.id);
    document.getElementById(`tab-${nextArea.id}`)?.focus();
  }

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
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.bio}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#areas"
            className="inline-flex items-center gap-2 rounded-full btn-iridescent px-6 py-3 text-sm font-bold text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver proyectos <ArrowDown className="h-4 w-4" />
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Descargar CV <Download className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section aria-label="Resumen del portafolio" className="grid grid-cols-2 gap-2 sm:gap-3">
        {stats.map((s) => (
          <GlassCard key={s.label} interactive className="px-3 py-3 sm:px-5 sm:py-4">
            <p className="text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-[11px] leading-tight text-muted-foreground sm:text-sm sm:leading-snug">
              {s.label}
            </p>
          </GlassCard>
        ))}
      </section>

      <section id="areas" aria-labelledby="areas-title" className="scroll-mt-24">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="areas-title" className="text-3xl font-bold tracking-tight">
              Mis áreas
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Elegí un perfil para ver su evidencia.
            </p>
          </div>
          <div
            role="tablist"
            aria-label="Perfiles"
            className="inline-flex w-full gap-1 rounded-full glass p-1 sm:w-auto"
          >
            {areas.map((a, i) => (
              <button
                key={a.id}
                id={`tab-${a.id}`}
                role="tab"
                aria-selected={a.id === area}
                aria-controls={`panel-${a.id}`}
                aria-label={a.label}
                tabIndex={a.id === area ? 0 : -1}
                onClick={() => setArea(a.id)}
                onKeyDown={(e) => handleTabKey(e, i)}
                className={cn(
                  "flex-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:flex-none sm:px-4",
                  a.id === area
                    ? "btn-iridescent text-brand-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="sm:hidden">{a.short}</span>
                <span className="hidden sm:inline">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          key={area}
          id={`panel-${area}`}
          role="tabpanel"
          aria-labelledby={`tab-${area}`}
          tabIndex={0}
          className="animate-rise space-y-4 outline-none"
        >
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {current.tagline}
            </p>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </GlassCard>
          {area === "fa" ? (
            <div className="space-y-8">
              {[
                { caseId: "portal-turnos", title: "Portal de Turnos Médicos" },
                { caseId: "moneymate", title: "MoneyMate App" },
              ].map((caseItem) => {
                const caseProjects = preview.filter((p) => p.caseId === caseItem.caseId);
                return (
                  <section key={caseItem.caseId} aria-labelledby={`home-case-${caseItem.caseId}`}>
                    <SectionTitle count={caseProjects.length}>
                      <span id={`home-case-${caseItem.caseId}`}>{caseItem.title}</span>
                    </SectionTitle>
                    <div className="grid gap-4 md:grid-cols-2">
                      {caseProjects.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {preview.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}
          {total > preview.length && (
            <Link
              to={current.to}
              className="group inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {current.id === "pm"
                ? `Ver los ${total} documentos de ${current.label}`
                : `Ver los ${total} proyectos de ${current.label}`}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </section>

      <Link
        to="/contacto"
        onMouseMove={trackSpotlight}
        className="spotlight group flex items-center justify-between gap-4 rounded-2xl glass px-6 py-8 sm:px-10 sm:py-12"
      >
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
            ¿Buscás sumar este perfil?
          </span>
          <span className="mt-2 block text-3xl font-bold tracking-tight sm:text-5xl">
            Trabajemos <span className="font-serif font-normal italic text-primary">juntos</span>
          </span>
        </span>
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-foreground/10 transition-all group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-foreground sm:h-20 sm:w-20">
          <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </span>
      </Link>
    </div>
  );
}
