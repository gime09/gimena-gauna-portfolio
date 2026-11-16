import { createFileRoute } from "@tanstack/react-router";

import { AreaPage } from "@/components/portfolio/AreaPage";
import { EffortBars } from "@/components/portfolio/ProjectCard";
import { GlassCard } from "@/components/portfolio/ui";

export const Route = createFileRoute("/project-management")({
  head: () => ({
    meta: [
      { title: "Gestión de proyectos · Gimena Gauna" },
      {
        name: "description",
        content:
          "Caso integral de gestión: Portal de Autogestión de Turnos Médicos, del acta de constitución al acta de cierre.",
      },
      { property: "og:title", content: "Gestión de proyectos · Gimena Gauna" },
      {
        property: "og:description",
        content: "Portal de Turnos Médicos: 13 semanas, 8 riesgos, 912 HH y cierre bajo presupuesto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PmPage,
});

const kpis = [
  { value: "13", label: "semanas" },
  { value: "19", label: "tareas en 3 fases" },
  { value: "8", label: "riesgos gestionados" },
  { value: "20 días", label: "desvío analizado" },
];

function PmPage() {
  return (
    <AreaPage
      area="pm"
      grouped={false}
      eyebrow="Caso integral · Portal de Autogestión de Turnos Médicos"
      title="Un proyecto de punta a"
      accent="punta"
      description="Los 8 documentos del ciclo de vida, en orden: inicio, planificación, seguimiento y cierre. Abrí cada uno para ver el detalle."
      intro={
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Presupuesto</p>
            <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Inicial</p>
                <p className="text-2xl font-bold">$8.500.000</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Liquidación final</p>
                <p className="text-2xl font-bold text-primary">$8.180.000</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-xl bg-foreground/[0.05] p-3">
                  <p className="text-lg font-bold">{k.value}</p>
                  <p className="text-[11px] leading-tight text-muted-foreground">{k.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Esfuerzo (HH)</p>
            <p className="mt-2 text-sm text-muted-foreground">
              14% de sobrecosto en horas por la contingencia técnica con la librería de autenticación.
            </p>
            <div className="mt-5">
              <EffortBars />
            </div>
          </GlassCard>
        </div>
      }
    />
  );
}
