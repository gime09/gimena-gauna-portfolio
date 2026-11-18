import { createFileRoute } from "@tanstack/react-router";

import { AreaPage } from "@/components/portfolio/AreaPage";
import { GlassCard } from "@/components/portfolio/ui";

export const Route = createFileRoute("/analisis-funcional")({
  head: () => ({
    meta: [
      { title: "Análisis Funcional · Gimena Gauna" },
      {
        name: "description",
        content:
          "Relevamiento del Portal de Turnos Médicos e ingeniería de requerimientos completa para MoneyMate App.",
      },
      { property: "og:title", content: "Análisis Funcional · Gimena Gauna" },
      {
        property: "og:description",
        content: "Relevamiento, historias de usuario, BDD en Gherkin, Planning Poker y roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
      description="Relevo cómo funciona hoy un sistema, detecto qué falta y lo convierto en requisitos priorizados que el equipo puede construir y probar."
      intro={
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
      }
    />
  );
}
