import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Megaphone,
  RefreshCw,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { GlassCard, PageHeader, SectionTitle } from "@/components/portfolio/ui";
import { profile } from "@/data/portfolio";
import { canonical, pageMeta } from "@/data/site";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: pageMeta({
      title: "Sobre mí · Gimena Gauna",
      description:
        "Trayectoria de Gimena Gauna: de Profesora de Historia y marketing digital a Técnica en Programación (UTN) en QA, PM y Análisis Funcional.",
      path: "/sobre-mi",
      type: "profile",
    }),
    links: canonical("/sobre-mi"),
  }),
  component: AboutPage,
});

const journey = [
  {
    icon: BookOpen,
    title: "Docencia",
    role: "Profesora de Historia",
    text: "Explicar lo complejo de forma simple, escuchar y adaptar el mensaje a cada grupo.",
  },
  {
    icon: Megaphone,
    title: "Marketing digital",
    role: "Comunicación y datos",
    text: "Pensar en el usuario final, medir resultados y comunicar con claridad.",
  },
  {
    icon: GraduationCap,
    title: "Tecnología",
    role: "Técnica en Programación (UTN)",
    text: "Base técnica para entender el software por dentro y hablar el idioma del equipo.",
  },
  {
    icon: Target,
    title: "Perfil profesional",
    role: "QA · Gestión de proyectos · Análisis Funcional",
    text: "Participación en el ciclo completo: negocio, análisis, planificación y calidad.",
  },
];

const education = [
  { title: "Técnica en Programación", place: "Universidad Tecnológica Nacional (UTN)" },
  { title: "Profesora de Historia", place: "Formación docente" },
];

const approach = [
  {
    icon: Search,
    title: "Entender antes de construir",
    text: "Empiezo por el negocio y los interesados: qué problema resolvemos y para quién.",
  },
  {
    icon: HeartHandshake,
    title: "Comunicación con stakeholders",
    text: "Traduzco entre negocio y equipo técnico, y hago visibles los riesgos a tiempo.",
  },
  {
    icon: Sparkles,
    title: "Atención al detalle",
    text: "Documento lo que se asume y lo que no está escrito: ahí suelen esconderse los errores.",
  },
  {
    icon: RefreshCw,
    title: "Metodología ágil Scrum",
    text: "Organizo el trabajo en ciclos cortos, priorizo el valor, reviso avances con el equipo y adapto el plan según la evidencia. Utilizo agentes de IA como apoyo para analizar, documentar, generar escenarios y mejorar continuamente la calidad, siempre con revisión y criterio humano.",
  },
];

const tools = [
  "SoapUI",
  "Postman",
  "Newman",
  "Selenium WebDriver",
  "Java",
  "TestNG",
  "Maven",
  "MySQL / JDBC",
  "Playwright MCP",
  "Claude Code",
  "Gherkin / BDD",
  "Gantt",
  "Scrum",
  "Planning Poker",
  "GitHub",
];

function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHeader eyebrow="Sobre mí" title="Del análisis a la calidad de" accent="software" />

      <GlassCard>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.bio}</p>
      </GlassCard>

      <section>
        <SectionTitle>Trayectoria</SectionTitle>
        <ol className="relative grid gap-4 md:grid-cols-2">
          {journey.map((j, i) => (
            <li key={j.title}>
              <GlassCard interactive className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <j.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} · {j.title}
                    </p>
                    <p className="font-bold">{j.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
              </GlassCard>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-8 xl:grid-cols-2">
        <section>
          <SectionTitle>Formación académica</SectionTitle>
          <div className="space-y-4">
            {education.map((e) => (
              <GlassCard key={e.title} interactive>
                <GraduationCap className="h-6 w-6 text-primary" />
                <p className="mt-3 text-xl font-bold">{e.title}</p>
                <p className="text-sm text-muted-foreground">{e.place}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Aprendizaje continuo</SectionTitle>
          <GlassCard className="h-[calc(100%-3.5rem)]">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cada proyecto de este portafolio es práctica aplicada: sumo herramientas nuevas —como
              agentes de IA y self-healing locators— sin perder el criterio humano sobre qué y cómo
              probar.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-glass-border px-3 py-1 text-xs font-medium text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </section>
      </div>

      <section>
        <SectionTitle>Enfoque metodológico</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {approach.map((a) => (
            <GlassCard key={a.title} interactive>
              <a.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 font-bold">{a.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
