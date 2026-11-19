export type AreaId = "qa" | "pm" | "fa";

export type Metric = { value: string; label: string };

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectFile = {
  href: string;
  label: string;
  format: "docx" | "xlsx" | "pptx" | "xml";
  size: string;
  note?: string;
};

export type Project = {
  id: string;
  area: AreaId;
  group: string;
  title: string;
  summary: string;
  tags: string[];
  metrics?: Metric[];
  sections: { title: string; items: string[] }[];
  images?: ProjectImage[];
  files?: ProjectFile[];
  repo?: string;
  step?: number;
  featured?: boolean;
};

export const profile = {
  name: "Gimena Gauna",
  title: "QA Engineer · Gestión de proyectos · Analista Funcional",
  shortBio:
    "Técnica en Programación (UTN). Participo en el ciclo completo del software: entiendo el negocio, analizo, planifico y aseguro la calidad.",
  bio: "Técnica en Programación (UTN), con formación en QA, Análisis Funcional y Gestión de proyectos. Participo en el ciclo completo de software: comprensión de negocio, análisis funcional, planificación y aseguramiento de calidad.",
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
  short: string;
  tagline: string;
  description: string;
}[] = [
  {
    id: "qa",
    to: "/qa",
    label: "QA & Testing",
    short: "QA",
    tagline: "Manual, APIs, automatización e IA",
    description:
      "Diseño de casos, pruebas de servicios SOAP/REST, rendimiento, automatización con Selenium y un ciclo STLC completo con agentes de IA.",
  },
  {
    id: "pm",
    to: "/project-management",
    label: "Gestión de proyectos",
    short: "Gestión",
    tagline: "Portal de Autogestión de Turnos Médicos",
    description:
      "Caso integral de punta a punta: acta de constitución, kick off, Gantt, horas hombre, riesgos, desvíos y cierre.",
  },
  {
    id: "fa",
    to: "/analisis-funcional",
    label: "Análisis Funcional",
    short: "Análisis",
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
    featured: true,
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
    files: [
      {
        href: "/media/projects/qa-demoblaze/files/tc-demoblaze.xlsx",
        label: "Casos de prueba · DemoBlaze",
        format: "xlsx",
        size: "91 KB",
        note: "Planilla de casos",
      },
    ],
  },
  {
    id: "qa-decision-tables",
    area: "qa",
    group: "QA Manual",
    title: "Caja negra con tablas de decisión",
    summary:
      "Pruebas de caja negra sobre pagos con tarjeta, bonos, descuentos y calentamiento de sistemas, con tablas de decisión y particiones de equivalencia.",
    tags: ["Caja negra", "Tablas de decisión", "Particiones", "Calentamiento"],
    sections: [
      {
        title: "Qué hice",
        items: [
          "Modelé las combinaciones de condiciones de pago (tarjeta, bonos, descuentos) y de calentamiento de sistemas en tablas de decisión.",
          "Derivé casos de prueba que cubren cada regla de negocio.",
          "Complementé con particiones de equivalencia para los rangos de antigüedad del bono.",
          "Detecté combinaciones límite que suelen quedar fuera de las pruebas intuitivas.",
        ],
      },
    ],
    images: [
      {
        src: "/media/projects/qa-decision-tables/images/tabla-decision-pago-tarjeta.webp",
        alt: "Tabla de decisión de pago con tarjeta: tarjeta oro, club y modalidad joven, casos inviables, descuentos del 15% y 5% y cálculo del importe en 8 reglas.",
        caption: "Pago con tarjeta · 8 reglas",
      },
      {
        src: "/media/projects/qa-decision-tables/images/particion-equivalencias-bono.webp",
        alt: "Partición de equivalencias del bono por antigüedad: tramos de menos de 5, de 5 a 15 y más de 15 años, con porcentajes del 1,5%, 2% y 3% y tope.",
        caption: "Bono por antigüedad · particiones",
      },
      {
        src: "/media/projects/qa-decision-tables/images/tabla-decision-descuentos.webp",
        alt: "Tabla de decisión de descuentos: 15% por primer registro, 20% por cupón y caso inviable cuando se combinan ambas condiciones.",
        caption: "Descuentos · 3 reglas",
      },
      {
        src: "/media/projects/qa-decision-tables/images/tabla-decision-calentamiento.webp",
        alt: "Tabla de decisión de calentamiento: combinaciones de calentamiento de línea y motor con mensajes, alarmas y continuación del proceso.",
        caption: "Calentamiento · 4 combinaciones",
      },
    ],
    files: [
      {
        href: "/media/projects/qa-decision-tables/files/caso-1-pago-con-tarjeta.xlsx",
        label: "Caso 1 · Pago con tarjeta",
        format: "xlsx",
        size: "36 KB",
      },
      {
        href: "/media/projects/qa-decision-tables/files/caso-2-bono-de-trabajo.xlsx",
        label: "Caso 2 · Bono de trabajo",
        format: "xlsx",
        size: "37 KB",
      },
      {
        href: "/media/projects/qa-decision-tables/files/caso-3-descuento-para-clientes.xlsx",
        label: "Caso 3 · Descuento para clientes",
        format: "xlsx",
        size: "36 KB",
      },
      {
        href: "/media/projects/qa-decision-tables/files/caso-4-calentamiento-motor-y-linea.xlsx",
        label: "Caso 4 · Calentamiento de motor y línea",
        format: "xlsx",
        size: "36 KB",
      },
    ],
  },
  {
    id: "qa-soapui",
    area: "qa",
    featured: true,
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
        items: ["Casos positivo y negativo.", "Validación de SLA y de códigos HTTP 200 y 400."],
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
    files: [
      {
        href: "/media/projects/qa-soapui/files/addinteger-desafios.xml",
        label: "AddInteger · resolución de desafíos",
        format: "xml",
        size: "6 KB",
        note: "Proyecto SoapUI",
      },
      {
        href: "/media/projects/qa-soapui/files/countryinfo-testsuite.xml",
        label: "CountryInfo · test suite",
        format: "xml",
        size: "9 KB",
        note: "Proyecto SoapUI",
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
    images: [
      {
        src: "/media/projects/qa-postman-performance/images/resumen-100-vu.jpg",
        alt: "Resumen del spike test: 100 usuarios virtuales durante un minuto, 1.092 requests, 15,85 requests por segundo, 20 ms de tiempo promedio y 0% de error.",
        caption: "Test setup y resumen",
      },
      {
        src: "/media/projects/qa-postman-performance/images/grafico-throughput.jpg",
        alt: "Gráfico de throughput durante el spike test, con el pico de solicitudes por segundo y la caída posterior.",
        caption: "Throughput durante el spike",
      },
      {
        src: "/media/projects/qa-postman-performance/images/grafico-response-time.jpg",
        alt: "Gráfico de tiempos de respuesta con las líneas de percentiles 90, 95 y 99 durante el pico de carga.",
        caption: "Tiempos de respuesta por percentil",
      },
      {
        src: "/media/projects/qa-postman-performance/images/tabla-percentiles.jpg",
        alt: "Tabla de percentiles del spike test: 90th 25 ms, 95th 44 ms, 99th 125 ms, mínimo 11 ms y máximo 279 ms.",
        caption: "Percentiles y extremos",
      },
    ],
  },
  {
    id: "qa-postman-rest",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Postman · Funcional REST",
    summary:
      "Creación y registro de usuarios en reqres.in: alcance funcional vs rendimiento y validaciones 200, 201 y 400.",
    tags: ["Postman", "REST", "reqres.in"],
    metrics: [
      { value: "200", label: "OK" },
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
          "Registré usuarios en /api/register con validaciones de status, body y tiempo de respuesta.",
        ],
      },
    ],
    images: [
      {
        src: "/media/projects/qa-postman-rest/images/respuesta-201-created.jpg",
        alt: "POST a reqres.in con nombre y puesto de trabajo: respuesta 201 Created en 512 ms con el id y la fecha de creación.",
        caption: "Respuesta válida · 201",
      },
      {
        src: "/media/projects/qa-postman-rest/images/respuesta-sin-body.jpg",
        alt: "POST a reqres.in con el body vacío: respuesta 400 Bad Request en 459 ms.",
        caption: "Sin body · 400",
      },
      {
        src: "/media/projects/qa-postman-rest/images/endpoint-validaciones.jpg",
        alt: "POST al endpoint de registro de reqres.in con email y contraseña: respuesta 200 OK y tres validaciones aprobadas.",
        caption: "Registro · 200 OK",
      },
      {
        src: "/media/projects/qa-postman-rest/images/ejecucion-test-results.jpg",
        alt: "Pestaña Test Results de Postman con las validaciones de status, body y tiempo de respuesta aprobadas.",
        caption: "Test Results · 3 de 3",
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
    images: [
      {
        src: "/media/projects/qa-postman-ddt/images/endpoint-configurado.jpg",
        alt: "Petición GET a LongWeekend en Postman con los parámetros year 2024 y countryCode AR, y respuesta 200 OK.",
        caption: "Endpoint LongWeekend",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/request-response.jpg",
        alt: "Respuesta de LongWeekEnd para 2024 y AR con 200 OK en 1.031 ms y el JSON de feriados.",
        caption: "Request y response",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/archivo-csv.jpg",
        alt: "Archivo datos_longweekend.csv con las columnas year y countryCode y cinco filas de prueba, incluidas ABCD y 99 como casos inválidos.",
        caption: "CSV de datos",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/configuracion-runner.jpg",
        alt: "Configuración del Runner de Postman con 5 iteraciones y el archivo datos_longweekend.csv.",
        caption: "Runner · 5 iteraciones",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/corrida-5-iteraciones.jpg",
        alt: "Resultados de la corrida del Runner: 5 iteraciones, 15 pruebas aprobadas, 0 fallidas y 20 ms de tiempo promedio.",
        caption: "Resultados de la corrida",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/validaciones-scripts.jpg",
        alt: "Pestaña Scripts de Postman con las validaciones de status 200, body y tiempo de respuesta menor a 500 ms.",
        caption: "Scripts de validación",
      },
      {
        src: "/media/projects/qa-postman-ddt/images/resultado-validaciones.jpg",
        alt: "Test Results con las tres validaciones aprobadas sobre la API LongWeekend.",
        caption: "Test Results · 3 de 3",
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
    images: [
      {
        src: "/media/projects/qa-newman/images/reporte-resumen.jpg",
        alt: "Resumen del reporte htmlextra: 1 iteración, 3 aserciones, 1 prueba fallida y 0 omitidas.",
        caption: "Resumen del reporte",
      },
      {
        src: "/media/projects/qa-newman/images/reporte-iteraciones.jpg",
        alt: "Detalle de la iteración 1: POST a reqres.in, respuesta 200 OK, 564 ms de tiempo medio y 67% de pruebas aprobadas.",
        caption: "Iteración y porcentaje",
      },
      {
        src: "/media/projects/qa-newman/images/reporte-request-body.jpg",
        alt: "Request body del reporte con el email y la contraseña enviados al endpoint de registro.",
        caption: "Request body",
      },
      {
        src: "/media/projects/qa-newman/images/reporte-response-body.jpg",
        alt: "Response body con el id y el token, y tabla de tests: body correcto y status 200 aprobados, tiempo de respuesta fallido.",
        caption: "Response body y tests",
      },
      {
        src: "/media/projects/qa-newman/images/reporte-timings.jpg",
        alt: "Informe de archivo y timings: 648 ms de duración total, 3 aserciones con 1 fallida y el detalle por tipo de script.",
        caption: "Timings y totales",
      },
    ],
  },
  {
    id: "qa-selenium",
    area: "qa",
    featured: true,
    group: "QA Automatizado",
    title: "Automatización con Selenium WebDriver",
    summary:
      "Selenium + Java + TestNG + Maven con Page Object Model sobre SauceDemo, OrangeHRM y Automation Practice.",
    tags: ["Selenium", "Java", "TestNG", "Maven", "POM", "MySQL"],
    repo: "https://github.com/gime09/QA-Automation-Selenium",
    metrics: [
      { value: "3", label: "Sitios automatizados" },
      { value: "3", label: "Navegadores" },
      { value: "11–23", label: "Versiones de Java" },
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
    featured: true,
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

  // ───────────── Gestión de proyectos ─────────────
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
    files: [
      {
        href: "/media/projects/pm-charter/files/acta-de-constitucion.docx",
        label: "Acta de Constitución",
        format: "docx",
        size: "13 KB",
        note: "Portal de Turnos",
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
    files: [
      {
        href: "/media/projects/pm-kickoff/files/kickoff.pptx",
        label: "Presentación Kick Off",
        format: "pptx",
        size: "220 KB",
        note: "12 diapositivas",
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
        items: ["Análisis y Diseño.", "Construcción e Implementación.", "Producción."],
      },
    ],
    files: [
      {
        href: "/media/projects/pm-gantt/files/cronograma-gantt.xlsx",
        label: "Cronograma Gantt",
        format: "xlsx",
        size: "9 KB",
        note: "19 tareas · 13 semanas",
      },
    ],
  },
  {
    id: "pm-risks",
    area: "pm",
    step: 4,
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
    files: [
      {
        href: "/media/projects/pm-risks/files/plan-gestion-riesgos.docx",
        label: "Plan de Gestión de Riesgos",
        format: "docx",
        size: "12 KB",
        note: "8 riesgos",
      },
    ],
  },
  {
    id: "pm-hh",
    area: "pm",
    step: 5,
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
    files: [
      {
        href: "/media/projects/pm-hh/files/control-horas-hombre.xlsx",
        label: "Control de Horas Hombre",
        format: "xlsx",
        size: "16 KB",
        note: "Seguimiento semanal",
      },
    ],
  },
  {
    id: "pm-status",
    area: "pm",
    step: 6,
    group: "Seguimiento",
    title: "Reporte de Avance",
    summary:
      "Reporte N.° 3 del Portal de Turnos: ficha de programa, seguimiento financiero por hitos, logros del período, riesgos y lecciones aprendidas.",
    tags: ["Reporting", "Seguimiento", "PMO"],
    metrics: [
      { value: "8", label: "Diapositivas" },
      { value: "3", label: "Hitos de pago" },
      { value: "2", label: "Riesgos activos" },
    ],
    sections: [
      {
        title: "Contenido",
        items: [
          "Ficha de programa con estado, avance mensual y presupuesto ejecutado.",
          "Seguimiento financiero de los 3 hitos de pago vinculados a entregables.",
          "Logros del período, próximos pasos y 2 riesgos activos con su plan de respuesta.",
          "Lecciones aprendidas y definición de los estados del proyecto.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm-status/files/reporte-avance-n3.pptx",
        label: "Reporte de Avance N.° 3",
        format: "pptx",
        size: "302 KB",
        note: "8 diapositivas",
      },
    ],
  },
  {
    id: "pm-deviation",
    area: "pm",
    step: 7,
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
    files: [
      {
        href: "/media/projects/pm-deviation/files/programacion-inicial-vs-final.docx",
        label: "Programación Inicial vs Final",
        format: "docx",
        size: "13 KB",
        note: "Desvío de 20 días",
      },
    ],
  },
  {
    id: "pm-effort",
    area: "pm",
    step: 8,
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
    files: [
      {
        href: "/media/projects/pm-effort/files/cuantificacion-esfuerzos.docx",
        label: "Cuantificación de Esfuerzos",
        format: "docx",
        size: "14 KB",
        note: "800 vs 912 HH",
      },
    ],
  },
  {
    id: "pm-closure",
    area: "pm",
    step: 9,
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
    files: [
      {
        href: "/media/projects/pm-closure/files/acta-de-cierre.docx",
        label: "Acta de Cierre",
        format: "docx",
        size: "11 KB",
        note: "Liquidación final",
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
    files: [
      {
        href: "/media/projects/fa-portal/files/relevamiento-analisis-sistema.docx",
        label: "Relevamiento y Análisis de Sistema",
        format: "docx",
        size: "65 KB",
        note: "Mapa de aplicaciones",
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
    files: [
      {
        href: "/media/projects/fa-moneymate-breakdown/files/desglose-epicas-hdu.docx",
        label: "Desglose de épicas e historias",
        format: "docx",
        size: "14 KB",
        note: "MoneyMate",
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
    files: [
      {
        href: "/media/projects/fa-moneymate-elicitation/files/ingenieria-requerimientos.docx",
        label: "Ingeniería de Requerimientos",
        format: "docx",
        size: "85 KB",
        note: "MoneyMate · Etapa 3",
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
    files: [
      {
        href: "/media/projects/fa-moneymate-roadmap/files/priorizacion-releases.docx",
        label: "Priorización de Releases",
        format: "docx",
        size: "69 KB",
        note: "MoneyMate · Etapa 4",
      },
    ],
  },
];

export function projectsByArea(area: AreaId) {
  return projects.filter((p) => p.area === area);
}

/** Los 4 proyectos que mejor resumen el área (o los primeros si no hay destacados). */
export function featuredByArea(area: AreaId, limit = 4) {
  const list = projectsByArea(area);
  const highlighted = list.filter((p) => p.featured);
  return (highlighted.length > 0 ? highlighted : list).slice(0, limit);
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
