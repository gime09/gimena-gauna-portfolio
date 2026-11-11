import cvQa from "@/assets/cv/cv-qa.pdf.asset.json";
import cvPm from "@/assets/cv/cv-pm.pdf.asset.json";
import cvPmo from "@/assets/cv/cv-pmo.pdf.asset.json";
import cvAnalista from "@/assets/cv/cv-analista-funcional.pdf.asset.json";

export type CvFile = {
  id: string;
  label: string;
  description: string;
  url: string;
  filename: string;
};

export const cvs: CvFile[] = [
  {
    id: "qa",
    label: "QA Engineer",
    description: "Testing manual y automatización, casos de prueba y aseguramiento de calidad.",
    url: cvQa.url,
    filename: "CV_Gimena_Gauna_QA.pdf",
  },
  {
    id: "pm",
    label: "Project Manager",
    description: "Gestión de proyectos, planificación, roadmap y metodologías ágiles.",
    url: cvPm.url,
    filename: "CV_Gimena_Gauna_PM.pdf",
  },
  {
    id: "pmo",
    label: "PMO",
    description: "Oficina de proyectos, seguimiento de portafolio y procesos.",
    url: cvPmo.url,
    filename: "CV_Gimena_Gauna_PMO.pdf",
  },
  {
    id: "fa",
    label: "Analista Funcional",
    description: "Relevamiento de requerimientos, historias de usuario y documentación funcional.",
    url: cvAnalista.url,
    filename: "CV_Gimena_Gauna_Analista_Funcional.pdf",
  },
];
