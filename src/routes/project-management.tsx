import { createFileRoute } from "@tanstack/react-router";

import { AreaPage, type AreaPageCase } from "@/components/portfolio/AreaPage";
import { EffortBars } from "@/components/portfolio/ProjectCard";
import { GlassCard } from "@/components/portfolio/ui";
import { canonical, pageMeta } from "@/data/site";

export const Route = createFileRoute("/project-management")({
  head: () => ({
    meta: pageMeta({
      title: "Gestión de proyectos · Gimena Gauna",
      description:
        "Dos casos integrales de gestión: el Portal de Autogestión de Turnos Médicos y la Modernización del MCD de Clínica Las Violetas, del acta de constitución al cierre.",
      path: "/project-management",
    }),
    links: canonical("/project-management"),
  }),
  component: PmPage,
});

const turnosKpis = [
  { value: "13", label: "semanas" },
  { value: "19", label: "tareas en 3 fases" },
  { value: "8", label: "riesgos gestionados" },
  { value: "20 días", label: "desvío analizado" },
];

const mcdKpis = [
  { value: "38", label: "días hábiles" },
  { value: "6", label: "fases" },
  { value: "49", label: "paquetes" },
  { value: "614", label: "horas hombre" },
];

const mcdScope = [
  "3 mantenedores: Tipología, Direcciones e Información.",
  "4 perfiles y 45 usuarios habilitados en 12 puntos de acceso.",
  "Migración de datos históricos, integración por API y auditoría de cambios.",
  "Sin instalación local: el sistema se abre desde el navegador.",
];

const cases: AreaPageCase[] = [
  {
    caseId: "turnos",
    eyebrow: "Caso 01 · Sector salud",
    title: "Portal de Autogestión de Turnos",
    accent: "Médicos",
    description:
      "Los 9 documentos del ciclo de vida, en orden: inicio, planificación, seguimiento y cierre. Abre cada uno para ver el detalle.",
    intro: (
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
            {turnosKpis.map((k) => (
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
    ),
  },
  {
    caseId: "mcd",
    eyebrow: "Caso 02 · Holding empresarial",
    title: "Modernización del MCD de",
    accent: "Clínica Las Violetas",
    description:
      "Nueve entregables para reemplazar Oracle Forms por una aplicación web, con migración de datos históricos y sin instalación local. Caso académico ficticio.",
    intro: (
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <GlassCard>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Presupuesto
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
            <div>
              <p className="text-xs text-muted-foreground">Aprobado</p>
              <p className="text-2xl font-bold">$28.000.000</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Contrato</p>
              <p className="text-2xl font-bold text-primary">$27.720.986</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            El precio del contrato queda $279.014 por debajo del presupuesto aprobado; ese saldo
            permanece como holgura del cliente y solo se moviliza con un cambio aprobado.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {mcdKpis.map((k) => (
              <div key={k.label} className="rounded-xl bg-foreground/[0.05] p-3">
                <p className="text-lg font-bold">{k.value}</p>
                <p className="text-[11px] leading-tight text-muted-foreground">{k.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Alcance del cambio
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {mcdScope.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-glass-border pt-3 text-[11px] leading-relaxed text-muted-foreground">
            Holding Familia Segura — Clínica Las Violetas · Andes TI Consultores SpA · Jefa de
            proyecto: Gimena Gauna. Caso académico ficticio.
          </p>
        </GlassCard>
      </div>
    ),
  },
];

function PmPage() {
  return (
    <AreaPage
      area="pm"
      grouped={false}
      cases={cases}
      eyebrow="Gestión de proyectos"
      title="Dos casos, el mismo ciclo de"
      accent="punta a punta"
      description="Del acta de constitución al acta de cierre, dos proyectos documentados con el mismo método: el Portal de Autogestión de Turnos Médicos y la Modernización del Mantenedor Corporativo de Datos."
    />
  );
}
