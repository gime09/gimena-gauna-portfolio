export type CvFile = {
  id: string;
  label: string;
  description: string;
  url: string;
  filename: string;
};

// Los PDF viven en public/media/. Reemplazalos manteniendo estos nombres.
export const cvs: CvFile[] = [
  {
    id: "qa",
    label: "QA Engineer",
    description: "Testing manual y automatización, casos de prueba y aseguramiento de calidad.",
    url: "/media/cv-gimena-gauna-qa.pdf",
    filename: "CV_Gimena_Gauna_QA.pdf",
  },
  {
    id: "pm",
    label: "Gestión de proyectos",
    description: "Gestión de proyectos, planificación, roadmap y metodologías ágiles.",
    url: "/media/cv-gimena-gauna-pm.pdf",
    filename: "CV_Gimena_Gauna_PM.pdf",
  },
  {
    id: "pmo",
    label: "PMO",
    description: "Oficina de proyectos, seguimiento de portafolio y procesos.",
    url: "/media/cv-gimena-gauna-pmo.pdf",
    filename: "CV_Gimena_Gauna_PMO.pdf",
  },
  {
    id: "fa",
    label: "Analista Funcional",
    description: "Relevamiento de requerimientos, historias de usuario y documentación funcional.",
    url: "/media/cv-gimena-gauna-analista-funcional.pdf",
    filename: "CV_Gimena_Gauna_Analista_Funcional.pdf",
  },
];
