import { createFileRoute } from "@tanstack/react-router";

import { AreaPage } from "@/components/portfolio/AreaPage";
import { EffortBars } from "@/components/portfolio/ProjectCard";
import { GlassCard } from "@/components/portfolio/ui";
import { canonical, pageMeta } from "@/data/site";

export const Route = createFileRoute("/project-management")({
  head: () => ({
    meta: pageMeta({
      title: "Gestión de proyectos · Gimena Gauna",
      description:
        "Caso integral de gestión: Portal de Autogestión de Turnos Médicos, del acta de constitución al acta de cierre.",
      path: "/project-management",
    }),
    links: canonical("/project-management"),
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
      description="Los 9 documentos del ciclo de vida, en orden: inicio, planificación, seguimiento y cierre. Abre cada uno para ver el detalle."
      intro={
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <GlassCard>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Presupuesto
            </p>
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
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              De la reserva de contingencia de $1.000.000 se utilizaron $680.000 para cubrir la
              desviación técnica; quedaron $320.000 sin utilizar.
            </p>
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Esfuerzo (HH)
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Las 112 HH adicionales (14%) consumieron $680.000 de la reserva de contingencia. El
              proyecto cerró en $8.180.000, $320.000 por debajo del presupuesto total asignado.
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
