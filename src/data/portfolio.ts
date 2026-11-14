export type AreaId = "qa" | "pm" | "fa";

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  area: AreaId;
  group: string;
  title: string;
  summary: string;
  tags: string[];
  metrics?: Metric[];
  sections: { title: string; items: string[] }[];
  repo?: string;
  step?: number;
};

export const profile = {
  name: "Gimena Gauna",
  title: "Técnica en Programación (UTN) · QA Engineer · Project Manager · Analista Funcional",
  shortBio:
    "Participo en el ciclo completo del software: entiendo el negocio, analizo, planifico y aseguro la calidad.",
  bio: "Técnica en Programación (UTN), con experiencia y formación en QA, Análisis Funcional y Project Management. Participo en el ciclo completo de software: comprensión de negocio, análisis funcional, planificación y aseguramiento de calidad.",
  email: "gimegauna12345678@gmail.com",
  whatsappDisplay: "+54 9 261 5259143",
  whatsappUrl: "https://wa.me/5492615259143",
  github: "https://github.com/gime09?tab=repositories",
  linkedin: "https://www.linkedin.com/in/gimena-gauna-08925a197/",
};

export const areas: {
  id: AreaId;
  to: "/qa" | "/project-management" | "/analisis-funcional";
  label: string;
  tagline: string;
  description: string;
}[] = [
  {
    id: "qa",
    to: "/qa",
    label: "QA & Testing",
    tagline: "Manual, APIs, automatización e IA",
    description:
      "Diseño de casos, pruebas de servicios SOAP/REST, rendimiento, automatización con Selenium y un ciclo STLC completo con agentes de IA.",
  },
  {
    id: "pm",
    to: "/project-management",
    label: "Project Management",
    tagline: "Portal de Autogestión de Turnos Médicos",
    description:
      "Caso integral de punta a punta: acta de constitución, kick off, Gantt, horas hombre, riesgos, desvíos y cierre.",
  },
  {
    id: "fa",
    to: "/analisis-funcional",
    label: "Análisis Funcional",
    tagline: "Relevamiento e ingeniería de requerimientos",
    description:
      "Relevamiento de sistema para el portal de turnos e ingeniería de requerimientos completa para MoneyMate App.",
  },
];

export const projects: Project[] = [
  // ───────────── QA & Testing ─────────────
  {
    id: "qa-demoblaze",
    area: "qa",
    group: "QA Manual",
    title: "Casos de prueba sobre DemoBlaze",
    summary:
      "Análisis y diseño de casos de prueba para un e-commerce: requisitos, precondiciones, pasos y resultados esperados.",
    tags: ["Diseño de casos", "Funcional", "E-commerce"],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Analicé los requisitos del sitio DemoBlaze para identificar flujos críticos.",
          "Diseñé casos de prueba con requisito asociado, precondiciones, pasos y resultado esperado.",
          "Organicé los casos para facilitar su ejecución y trazabilidad.",
        ],
      },
    ],
  },
  {
    id: "qa-decision-tables",
    area: "qa",
    group: "QA Manual",
    title: "Caja negra con tablas de decisión",
    summary:
      "Pruebas de caja negra sobre flujos de pago con tarjeta, bonos y descuentos usando tablas de decisión.",
    tags: ["Caja negra", "Tablas de decisión", "Pagos"],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Modelé las combinaciones de condiciones de pago (tarjeta, bonos, descuentos) en tablas de decisión.",
          "Derivé casos de prueba que cubren cada regla de negocio.",
          "Detecté combinaciones límite que suelen quedar fuera de las pruebas intuitivas.",
        ],
      },
    ],
  },
  {
    id: "qa-soapui",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "SoapUI · Pruebas funcionales SOAP",
    summary:
      "Servicios AddInteger y CountryInfo con casos positivos, negativos, validación de SLA y manejo de errores.",
    tags: ["SoapUI", "SOAP", "XML", "SLA"],
    metrics: [
      { value: "200 / 400", label: "Códigos HTTP validados" },
      { value: "3", label: "Escenarios CountryInfo" },
    ],
    sections: [
      {
        title: "AddInteger",
        items: [
          "Casos positivo y negativo.",
          "Validación de SLA y de códigos HTTP 200 y 400.",
        ],
      },
      {
        title: "CountryInfo · FullCountryInfo",
        items: [
          'Código ISO válido "AR".',
          'Código inexistente "ZY".',
          "XML malformado, con verificación del manejo de errores.",
        ],
      },
    ],
  },
  {
    id: "qa-postman-performance",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Postman · Performance Testing",
    summary:
      "Spike test desde el Runner sobre la API de feriados date.nager.at, con análisis de percentiles.",
    tags: ["Postman", "Rendimiento", "Spike test"],
    metrics: [
      { value: "100", label: "Usuarios virtuales" },
      { value: "1.092", label: "Requests enviados" },
      { value: "15,85", label: "req/s de throughput" },
      { value: "20 ms", label: "Tiempo promedio" },
      { value: "0%", label: "Tasa de error" },
    ],
    sections: [
      {
        title: "Ejecución",
        items: [
          "Spike test desde el Runner de Postman con 100 VU contra date.nager.at.",
          "1.092 requests enviados con un throughput de 15,85 req/s.",
        ],
      },
      {
        title: "Análisis",
        items: [
          "Tiempo de respuesta promedio de 20 ms y 0% de error.",
          "Lectura de percentiles 90th, 95th y 99th para ver el comportamiento en los picos.",
        ],
      },
    ],
  },
  {
    id: "qa-postman-rest",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Postman · Funcional REST",
    summary:
      "Creación de usuarios en reqres.in: alcance funcional vs rendimiento y validaciones 201 vs 400.",
    tags: ["Postman", "REST", "reqres.in"],
    metrics: [
      { value: "201", label: "Created" },
      { value: "400", label: "Bad Request" },
    ],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Definí el alcance: pruebas funcionales separadas de las de rendimiento.",
          "Casos de prueba con body y sin body.",
          "Validé respuestas 201 Created frente a 400 Bad Request.",
        ],
      },
    ],
  },
  {
    id: "qa-postman-ddt",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Postman · Data-Driven Testing",
    summary: "Runner con archivo CSV sobre la API LongWeekend y scripts post-respuesta.",
    tags: ["Postman", "CSV", "Data-driven"],
    metrics: [
      { value: "5", label: "Iteraciones" },
      { value: "15/15", label: "Validaciones aprobadas" },
    ],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Parametricé las solicitudes con un archivo CSV.",
          "Scripts post-respuesta que validan status, body y SLA.",
          "5 iteraciones con 15 validaciones aprobadas.",
        ],
      },
    ],
  },
  {
    id: "qa-newman",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Newman CLI · Reporte htmlextra",
    summary:
      "Reporte HTML interactivo sobre el registro en reqres.in, con diagnóstico real de una falla de tiempo de respuesta.",
    tags: ["Newman", "CLI", "htmlextra"],
    metrics: [
      { value: "564 ms", label: "Respuesta medida" },
      { value: "500 ms", label: "Umbral definido" },
    ],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Ejecuté la colección por línea de comandos con Newman.",
          "Generé un reporte HTML interactivo con htmlextra.",
          "Diagnostiqué una falla real: la respuesta tardó 564 ms frente a un umbral de 500 ms.",
        ],
      },
    ],
  },
  {
    id: "qa-selenium",
    area: "qa",
    group: "QA Automatizado",
    title: "Automatización con Selenium WebDriver",
    summary:
      "Selenium + Java + TestNG + Maven con Page Object Model sobre SauceDemo, OrangeHRM y Automation Practice.",
    tags: ["Selenium", "Java", "TestNG", "Maven", "POM", "MySQL"],
    repo: "https://github.com/gime09/QA-Automation-Selenium",
    metrics: [
      { value: "3", label: "Sitios automatizados" },
      { value: "3", label: "Navegadores" },
      { value: "Java 11/17/23", label: "Versiones" },
    ],
    sections: [
      {
        title: "Framework",
        items: [
          "Selenium WebDriver + Java 11/17/23 + TestNG + Maven.",
          "Patrón Page Object Model (POM) sobre SauceDemo, OrangeHRM y Automation Practice.",
        ],
      },
      {
        title: "Cobertura",
        items: [
          "Cross-browser testing en Chrome, Firefox y Edge.",
          "Consultas JDBC a una base MySQL para obtener datos de prueba.",
        ],
      },
      {
        title: "IA y Self-Healing",
        items: [
          "Self-Healing Locators con la librería AutoHeal locator y Gemini.",
          "Esperas explícitas y sincronización en React SPAs.",
        ],
      },
    ],
  },
  {
    id: "qa-ai-agents",
    area: "qa",
    group: "QA con Agentes de IA",
    title: "STLC completo con agentes de IA",
    summary:
      "Agentes especializados con Claude Code + Playwright MCP sobre el e-commerce ToolShop, con enfoque human-in-the-loop.",
    tags: ["Claude Code", "Playwright MCP", "BDD", "Gherkin"],
    repo: "https://github.com/gime09/ai-qa-testing",
    metrics: [
      { value: "117", label: "Pruebas ejecutadas" },
      { value: "94", label: "Aprobadas" },
      { value: "17", label: "Fallidas" },
      { value: "6", label: "Bloqueadas" },
      { value: "41", label: "Ambigüedades" },
      { value: "10", label: "Bug reports" },
    ],
    sections: [
      {
        title: "Enfoque",
        items: [
          "Ciclo STLC completo con agentes especializados por etapa.",
          "Claude Code + Playwright MCP sobre el e-commerce ToolShop.",
          "Human-in-the-loop: cada salida de los agentes pasa por revisión humana.",
        ],
      },
      {
        title: "Entregables",
        items: [
          "49 casos manuales + 46 escenarios BDD en Gherkin.",
          "41 ambigüedades detectadas en los requisitos.",
          "10 bug reports formalizados.",
          "Dashboard de cierre con decisión Go/No-Go.",
        ],
      },
    ],
  },

  // ───────────── Project Management ─────────────
  {
    id: "pm-charter",
    area: "pm",
    step: 1,
    group: "Inicio",
    title: "Acta de Constitución",
    summary: "Presupuesto inicial, objetivos, alcance, interesados y criterios de éxito.",
    tags: ["Inicio", "Alcance", "Presupuesto"],
    metrics: [{ value: "$8.500.000", label: "Presupuesto inicial" }],
    sections: [
      {
        title: "Contenido",
        items: [
          "Presupuesto inicial de $8.500.000 con reserva de contingencia.",
          "Objetivos y alcance del proyecto.",
          "Interesados identificados y criterios de éxito.",
        ],
      },
    ],
  },
  {
    id: "pm-kickoff",
    area: "pm",
    step: 2,
    group: "Inicio",
    title: "Presentación Kick Off",
    summary: "Agenda, gobierno, metodología ágil y cronograma de alto nivel.",
    tags: ["Kick Off", "Agile", "Gobierno"],
    metrics: [
      { value: "12", label: "Diapositivas" },
      { value: "2 sem.", label: "Duración de sprint" },
    ],
    sections: [
      {
        title: "Contenido",
        items: [
          "12 diapositivas con agenda y modelo de gobierno.",
          "Metodología ágil con sprints quincenales.",
          "Cronograma de alto nivel.",
        ],
      },
    ],
  },
  {
    id: "pm-gantt",
    area: "pm",
    step: 3,
    group: "Planificación",
    title: "Cronograma Gantt",
    summary: "19 tareas en 3 fases a lo largo de 13 semanas.",
    tags: ["Gantt", "Planificación"],
    metrics: [
      { value: "19", label: "Tareas" },
      { value: "3", label: "Fases" },
      { value: "13", label: "Semanas" },
    ],
    sections: [
      {
        title: "Fases",
        items: [
          "Análisis y Diseño.",
          "Construcción e Implementación.",
          "Producción.",
        ],
      },
    ],
  },
  {
    id: "pm-hh",
    area: "pm",
    step: 4,
    group: "Seguimiento",
    title: "Control de Horas Hombre",
    summary: "Seguimiento semanal por actividad y colaborador.",
    tags: ["HH", "Seguimiento"],
    metrics: [{ value: "6", label: "Roles del equipo" }],
    sections: [
      {
        title: "Contenido",
        items: [
          "Registro semanal de horas por actividad.",
          "Seguimiento por colaborador para los 6 roles del equipo.",
        ],
      },
    ],
  },
  {
    id: "pm-risks",
    area: "pm",
    step: 5,
    group: "Planificación",
    title: "Plan de Gestión de Riesgos",
    summary: "Matriz probabilidad/impacto con planes de respuesta y monitoreo.",
    tags: ["Riesgos", "Matriz P×I"],
    metrics: [{ value: "8", label: "Riesgos identificados" }],
    sections: [
      {
        title: "Contenido",
        items: [
          "Matriz de probabilidad e impacto.",
          "8 riesgos identificados, cada uno con su plan de respuesta.",
          "Plan de monitoreo durante la ejecución.",
        ],
      },
    ],
  },
  {
    id: "pm-deviation",
    area: "pm",
    step: 6,
    group: "Seguimiento",
    title: "Programación Inicial vs Final",
    summary:
      "Análisis de un desvío por una actualización no comunicada en una librería de autenticación externa.",
    tags: ["Desvío", "Acciones correctivas"],
    metrics: [{ value: "20 días", label: "Desvío analizado" }],
    sections: [
      {
        title: "Análisis",
        items: [
          "Desvío de 20 días frente a la programación inicial.",
          "Causa: actualización no comunicada en una librería de autenticación externa.",
          "Acciones correctivas implementadas.",
        ],
      },
    ],
  },
  {
    id: "pm-effort",
    area: "pm",
    step: 7,
    group: "Seguimiento",
    title: "Cuantificación de Esfuerzos",
    summary: "HH iniciales vs reales y roadmap de fases futuras.",
    tags: ["Esfuerzo", "Costos", "Roadmap"],
    metrics: [
      { value: "800", label: "HH planificadas" },
      { value: "912", label: "HH reales" },
      { value: "+14%", label: "Sobrecosto" },
      { value: "1.100", label: "HH fases futuras" },
    ],
    sections: [
      {
        title: "Análisis",
        items: [
          "800 HH iniciales frente a 912 HH reales.",
          "14% de sobrecosto atribuible a la contingencia técnica.",
          "Roadmap de fases futuras estimado en 1.100 HH.",
        ],
      },
    ],
  },
  {
    id: "pm-closure",
    area: "pm",
    step: 8,
    group: "Cierre",
    title: "Acta de Cierre",
    summary: "Liquidación final, balance de objetivos y lecciones aprendidas.",
    tags: ["Cierre", "Lecciones aprendidas"],
    metrics: [{ value: "$8.180.000", label: "Liquidación final" }],
    sections: [
      {
        title: "Contenido",
        items: [
          "Liquidación final de $8.180.000, por debajo del presupuesto inicial.",
          "Balance de objetivos alcanzados.",
          "Lecciones aprendidas sobre la gestión de dependencias externas.",
        ],
      },
    ],
  },

  // ───────────── Análisis Funcional ─────────────
  {
    id: "fa-portal",
    area: "fa",
    group: "Portal de Turnos Médicos",
    title: "Relevamiento y Análisis de Sistema",
    summary:
      "Mapa de aplicaciones actual vs nuevo portal, reglas de validación y matriz de falencias y mejoras.",
    tags: ["Relevamiento", "Mapa de aplicaciones", "Reglas de negocio"],
    sections: [
      {
        title: "Entregables",
        items: [
          "Mapa de aplicaciones: situación actual frente al nuevo portal.",
          "Reglas de validación documentadas y no documentadas.",
          "Matriz de falencias y oportunidades de mejora priorizadas.",
        ],
      },
    ],
  },
  {
    id: "fa-moneymate-breakdown",
    area: "fa",
    group: "MoneyMate App",
    title: "Desglose jerárquico de requerimientos",
    summary: "Épicas > Historias de Usuario > Características > Tareas distribuidas por rol.",
    tags: ["Épicas", "Historias de Usuario", "Backlog"],
    metrics: [{ value: "5", label: "Roles con tareas" }],
    sections: [
      {
        title: "Estructura",
        items: [
          "Épicas desglosadas en Historias de Usuario, Características y Tareas.",
          "Tareas asignadas por rol: UX, Frontend, Backend, QA y Seguridad.",
        ],
      },
    ],
  },
  {
    id: "fa-moneymate-elicitation",
    area: "fa",
    group: "MoneyMate App",
    title: "Elicitación y especificación",
    summary: "Entrevistas simuladas, Casos de Uso vs HdU, BDD en Gherkin y Planning Poker.",
    tags: ["Entrevistas", "Casos de Uso", "Gherkin", "Planning Poker"],
    sections: [
      {
        title: "Técnicas",
        items: [
          "Simulación de entrevistas de elicitación.",
          "Modelado comparado de Casos de Uso frente a Historias de Usuario.",
          "Especificación BDD en Gherkin (Given / When / Then).",
          "Estimación con Planning Poker (Fibonacci).",
        ],
      },
    ],
  },
  {
    id: "fa-moneymate-roadmap",
    area: "fa",
    group: "MoneyMate App",
    title: "Priorización y roadmap",
    summary: "Matriz valor vs esfuerzo y mapa de releases y sprints.",
    tags: ["Priorización", "Roadmap", "Releases"],
    metrics: [
      { value: "2", label: "Releases" },
      { value: "4", label: "Sprints" },
    ],
    sections: [
      {
        title: "Contenido",
        items: [
          "Matriz de valor frente a esfuerzo para priorizar.",
          "Mapa de 2 releases y 4 sprints.",
          "Aislamiento de los riesgos técnicos en sprints específicos.",
        ],
      },
    ],
  },
];

export function projectsByArea(area: AreaId) {
  return projects.filter((p) => p.area === area);
}

export function groupProjects(list: Project[]) {
  const map = new Map<string, Project[]>();
  for (const p of list) {
    const arr = map.get(p.group) ?? [];
    arr.push(p);
    map.set(p.group, arr);
  }
  return Array.from(map.entries()).map(([group, items]) => ({ group, items }));
}
