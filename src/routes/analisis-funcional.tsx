import { createFileRoute } from "@tanstack/react-router";

import { AreaPage } from "@/components/portfolio/AreaPage";
import { GlassCard } from "@/components/portfolio/ui";
import { canonical, pageMeta } from "@/data/site";

export const Route = createFileRoute("/analisis-funcional")({
  head: () => ({
    meta: pageMeta({
      title: "Análisis Funcional · Gimena Gauna",
      description:
        "Levantamiento del Portal de Turnos Médicos e ingeniería de requerimientos completa para MoneyMate App.",
      path: "/analisis-funcional",
    }),
    links: canonical("/analisis-funcional"),
  }),
  component: FaPage,
});

const hierarchy = ["Épicas", "Historias de Usuario", "Características", "Tareas por rol"];

function FaPage() {
  return (
    <AreaPage
      area="fa"
      eyebrow="Análisis Funcional"
      title="Traducir el negocio en requisitos"
      accent="claros"
      description="Dos casos: levantamiento del Portal de Turnos Médicos e ingeniería de requerimientos para MoneyMate App."
      cases={[
        {
          caseId: "portal-turnos",
          eyebrow: "Caso 01 · Portal de Turnos Médicos",
          title: "Levantamiento y análisis del",
          accent: "sistema",
          description:
            "Levantamiento de cómo funciona el sistema actual, qué falencias presenta y qué mejoras necesita el nuevo portal.",
          intro: (
            <GlassCard>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Alcance del levantamiento
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {["Mapa de aplicaciones", "Reglas de validación", "Falencias y mejoras"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-glass-border bg-foreground/[0.05] px-3 py-3 text-sm font-semibold"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </GlassCard>
          ),
        },
        {
          caseId: "moneymate",
          eyebrow: "Caso 02 · MoneyMate App",
          title: "Ingeniería de requerimientos",
          accent: "de punta a punta",
          description:
            "Desglose jerárquico, elicitación, especificación, priorización y roadmap para convertir la idea de producto en trabajo construible.",
          intro: (
            <GlassCard>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                MoneyMate · desglose jerárquico
              </p>
              <ol className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                {hierarchy.map((h, i) => (
                  <li key={h} className="flex items-center gap-2 sm:flex-1">
                    <span className="flex-1 rounded-xl border border-glass-border bg-foreground/[0.05] px-3 py-2.5 text-center text-sm font-semibold">
                      {h}
                    </span>
                    {i < hierarchy.length - 1 && (
                      <span className="hidden text-primary sm:inline" aria-hidden>
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-xs text-muted-foreground">
                Roles: UX · Frontend · Backend · QA · Seguridad
              </p>
            </GlassCard>
          ),
        },
      ]}
    />
  );
}
