import { createFileRoute } from "@tanstack/react-router";
import { Bot, Code2, FileCheck2, Server } from "lucide-react";

import { AreaPage } from "@/components/portfolio/AreaPage";
import { GlassCard } from "@/components/portfolio/ui";

export const Route = createFileRoute("/qa")({
  head: () => ({
    meta: [
      { title: "QA & Testing · Gimena Gauna" },
      {
        name: "description",
        content:
          "Proyectos de QA de Gimena Gauna: pruebas manuales, APIs con SoapUI y Postman, Selenium y testing con agentes de IA.",
      },
      { property: "og:title", content: "QA & Testing · Gimena Gauna" },
      {
        property: "og:description",
        content: "QA manual, APIs, rendimiento, automatización con Selenium y agentes de IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QaPage,
});

const pillars = [
  { icon: FileCheck2, title: "Manual", text: "Casos de prueba y caja negra" },
  { icon: Server, title: "APIs", text: "SOAP, REST, rendimiento y Newman" },
  { icon: Code2, title: "Automatizado", text: "Selenium + Java + POM" },
  { icon: Bot, title: "Con IA", text: "Agentes + human-in-the-loop" },
];

function QaPage() {
  return (
    <AreaPage
      area="qa"
      eyebrow="QA & Testing"
      title="Encontrar el error antes que el"
      accent="usuario"
      description="De los casos de prueba manuales a la automatización y los agentes de IA: cada proyecto muestra qué probé, cómo y qué encontré."
      intro={
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {pillars.map((p) => (
            <GlassCard key={p.title} interactive className="p-4">
              <p.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 font-bold">{p.title}</p>
              <p className="text-xs text-muted-foreground">{p.text}</p>
            </GlassCard>
          ))}
        </div>
      }
    />
  );
}
