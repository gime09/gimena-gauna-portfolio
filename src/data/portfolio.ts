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
  format: "docx" | "xlsx" | "pptx" | "xml" | "pdf";
  size: string;
  note?: string;
};

export type ProjectSectionItem = string | { text: string; href: string };

export type Project = {
  id: string;
  area: AreaId;
  /** Agrupa los entregables que pertenecen al mismo caso integral. */
  caseId?: string;
  group: string;
  title: string;
  summary: string;
  tags: string[];
  metrics?: Metric[];
  sections: { title: string; items: ProjectSectionItem[] }[];
  images?: ProjectImage[];
  files?: ProjectFile[];
  repo?: string;
  siteUrl?: string;
  siteLabel?: string;
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
    tagline: "Dos casos integrales de punta a punta",
    description:
      "Portal de Autogestión de Turnos Médicos y Modernización del MCD de Clínica Las Violetas: nueve entregables por caso, del acta de constitución al cierre.",
  },
  {
    id: "fa",
    to: "/analisis-funcional",
    label: "Análisis Funcional",
    short: "Análisis",
    tagline: "Levantamiento e ingeniería de requerimientos",
    description:
      "Dos casos: levantamiento del Portal de Turnos Médicos e ingeniería de requerimientos para MoneyMate App.",
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
    siteUrl: "https://www.demoblaze.com/",
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
    tags: ["Caja negra", "Tablas de decisión", "Particiones"],
    sections: [
      {
        title: "Caso 1 · Pago con tarjeta",
        items: [
          "Determina el descuento sobre el importe a facturar según el tipo de tarjeta: oro (15%) o club (5%). La modalidad joven suma un 5% adicional, acumulable.",
          "Valida que no se combinen tarjetas oro y club en una misma factura.",
        ],
      },
      {
        title: "Caso 2 · Bono de trabajo",
        items: [
          "Calcula el bono salarial según la antigüedad: 1,5% del sueldo por año trabajado para menos de 5 años; 2% entre 5 y 15 años; y 3% para más de 15 años.",
          "Aplica un tope del 30% del sueldo neto mensual.",
        ],
      },
      {
        title: "Caso 3 · Descuento para clientes",
        items: [
          "Aplica un 15% de descuento en la primera compra de clientes recién registrados, o un 20% si usan un cupón electrónico distribuido por la empresa.",
          "Valida que los descuentos no se acumulen entre sí.",
        ],
      },
      {
        title: "Caso 4 · Calentamiento",
        items: [
          "Monitorea el calentamiento de la línea y del motor de un ordenador de control.",
          "El calentamiento de cualquiera de los dos activa un mensaje de alarma en pantalla; si se calienta el motor, también se activa una sirena sonora.",
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
        title: "AddInteger · Descripción del proyecto",
        items: [
          "Testing funcional de un servicio SOAP mediante SoapUI, usando un WSDL de ejemplo y la operación AddInteger para sumar dos números.",
          "La Test Suite incluye tres casos: Suma - Positivo (números válidos), Suma - Negativo (letras) y Suma - Negativo (símbolos).",
          "Cada caso valida el SLA de la respuesta, los códigos de estado HTTP y la respuesta SOAP.",
          "Se comprueba la suma correcta con valores válidos (HTTP 200) y el rechazo de letras y símbolos con el código de error esperado (HTTP 400).",
        ],
      },
      {
        title: "CountryInfo · FullCountryInfo · Descripción del proyecto",
        items: [
          "Testing funcional del servicio SOAP público CountryInfo, operación FullCountryInfo, que consulta información de un país a partir de su código ISO.",
          'CP01 - Valor código válido: "AR" → HTTP 200; la respuesta contiene "Argentina" y no contiene "Error".',
          'CP02 - Código no existente: "ZY" → HTTP 200; la respuesta informa "not found" sin que falle el servicio.',
          'CP03 - Request incompleto: envío de XML malformado o incompleto → HTTP 500; la respuesta contiene "error".',
          "Cada caso valida también el cumplimiento de esquema (Schema Compliance) y el tiempo de respuesta (SLA). La cobertura incluye valor válido, valor inválido manejado con gracia e ingreso malformado.",
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
          "Prueba de rendimiento sobre el servicio REST público de feriados y long weekends date.nager.at, usando Postman.",
          "Configuré el endpoint GET /api/v3/LongWeekend/2024/AR y ejecuté una prueba de carga tipo Spike desde el Runner de Postman: 100 usuarios virtuales durante 1 minuto.",
          "Se enviaron 1.092 requests, con un throughput de 15,85 req/s, un tiempo de respuesta promedio de 20 ms y 0% de error.",
        ],
      },
      {
        title: "Análisis",
        items: [
          "Analicé los percentiles: 90th de 25 ms, 95th de 44 ms, 99th de 125 ms y máximo de 279 ms, para detectar picos de latencia que el promedio no refleja.",
          "El pico de latencia coincidió con el momento de mayor concurrencia de usuarios virtuales, en línea con el perfil de carga Spike, que incrementa progresivamente hasta alcanzar un tope.",
        ],
      },
    ],
    images: [
      {
        src: "/media/projects/qa-postman-performance/images/postman-longweekend-request-response.jpg",
        alt: "Postman con la solicitud GET al endpoint LongWeekend para 2024 y AR y respuesta JSON 200 OK, evidencia de que el endpoint está configurado y funcionando.",
        caption: "Postman · request y response de LongWeekend",
      },
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
      "Testing funcional de un servicio REST con Postman: creación de usuarios mediante POST a reqres.in/api/users.",
    tags: ["Postman", "REST", "reqres.in"],
    metrics: [
      { value: "201", label: "Created" },
      { value: "400", label: "Bad Request" },
    ],
    sections: [
      {
        title: "Descripción del proyecto",
        items: [
          "Evalué el contexto del servicio y prioricé las pruebas funcionales por tratarse de una funcionalidad nueva. Dejé rendimiento y seguridad fuera del alcance porque es un sistema interno con pocos usuarios: una decisión consciente sobre dónde enfocar el esfuerzo de testing.",
          "Identifiqué casos para datos válidos de nombre y rol, nombre vacío, rol vacío, rol inválido, nombre con caracteres no permitidos y request sin body.",
          'Con datos válidos (name: "Norma Perez", job: "Lider"), el servicio respondió 201 Created e incluyó un id y un createdAt generados.',
          "Al enviar el request sin body, el servicio respondió 400 Bad Request.",
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
    ],
  },
  {
    id: "qa-postman-ddt",
    area: "qa",
    group: "QA de Servicios Web (APIs)",
    title: "Postman · Data-Driven Testing",
    summary:
      "Automatización de pruebas del endpoint LongWeekend de Nager.Date API con el Runner de Postman y datos parametrizados desde CSV.",
    tags: ["Postman", "CSV", "Data-driven"],
    metrics: [
      { value: "5", label: "Iteraciones" },
      { value: "15/15", label: "Validaciones aprobadas" },
    ],
    sections: [
      {
        title: "Descripción del proyecto",
        items: [
          "Automaticé pruebas del endpoint LongWeekend (Nager.Date API) con el Runner de Postman y un dataset CSV parametrizado.",
          'En cada iteración, los scripts post-respuesta validan el código HTTP 200, que el body contenga "startDate" y un tiempo de respuesta menor a 500 ms.',
          'El CSV combina casos válidos (año 2024 con Argentina, Colombia y Estados Unidos) y casos edge o inválidos (año "ABCD" y código de país "99") para observar su comportamiento en una misma corrida.',
          "Resultado: 5 iteraciones y 15 validaciones (3 por iteración), con 15 aprobadas y 0 fallidas; tiempo de respuesta promedio de 20 ms.",
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
      "Generación de un reporte HTML de ejecución con Newman sobre POST https://reqres.in/api/register, con análisis de una falla real de SLA.",
    siteUrl: "https://reqres.in/api/register",
    siteLabel: "Abrir endpoint reqres.in/api/register",
    tags: ["Newman", "CLI", "htmlextra"],
    metrics: [
      { value: "564 ms", label: "Respuesta medida" },
      { value: "500 ms", label: "Umbral definido" },
    ],
    sections: [
      {
        title: "Flujo y resultados",
        items: [
          "Configuré en Postman una colección para el registro de usuario en POST https://reqres.in/api/register, con validaciones post-respuesta de status 200, contenido del body y tiempo de respuesta menor a 500 ms.",
          "Exporté la colección a JSON y la ejecuté por línea de comandos con Newman y el reporter htmlextra para generar un reporte HTML interactivo.",
          'Comando utilizado: newman run PI4.postman_collection.json -r htmlextra --reporter-htmlextra-title "Reporte Postman-Newman".',
          "Resultado real: pasaron 2 de 3 aserciones (status 200 y contenido del body). La validación de tiempo falló: la respuesta tardó 564 ms, por encima del umbral de 500 ms.",
          "El 67% de las pruebas pasó en esa corrida; el reporte permitió identificar y diagnosticar la falla de rendimiento.",
        ],
      },
    ],
    images: [
      {
        src: "/media/projects/qa-newman/images/postman-registro-endpoint-scripts.jpg",
        alt: "Postman con el endpoint POST de registro en reqres.in configurado, body de la solicitud y pestaña Scripts con validaciones.",
        caption: "Endpoint configurado + validaciones (Scripts)",
      },
      {
        src: "/media/projects/qa-newman/images/postman-registro-test-results.jpg",
        alt: "Ejecución en Postman del request de registro con tres validaciones aprobadas: código 200, body y tiempo de respuesta.",
        caption: "Ejecución en Postman (Test Results)",
      },
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
      { value: "6", label: "Proyectos en el repo" },
      { value: "5", label: "Sitios automatizados" },
      { value: "3", label: "Navegadores" },
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
          "6 proyectos en un mismo repositorio: SauceDemo, OrangeHRM, Automation Practice, Wikipedia y automationexercise.com.",
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
    repo: "https://github.com/gime09/qa-agentico/tree/main/ai-qa-testing-main",
    siteUrl: "https://practicesoftwaretesting.com/",
    siteLabel: "Abrir sitio bajo prueba · ToolShop",
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
          {
            text: "Sistema bajo prueba: el sitio practicesoftwaretesting.com y su API REST documentada en api.practicesoftwaretesting.com/api/documentation.",
            href: "https://api.practicesoftwaretesting.com/api/documentation",
          },
          "Human-in-the-loop: cada salida de los agentes pasa por revisión humana.",
        ],
      },
      {
        title: "Framework de agentes",
        items: [
          "Analista de historias: análisis de requerimientos y detección de ambigüedades.",
          "Estratega de pruebas: plan de pruebas y matriz de riesgos.",
          "Generadores de casos (manuales, BDD y API): diseño de casos con cobertura de escenarios positivos, negativos y de borde.",
          "Ejecutor E2E: automatización en navegador con Playwright MCP.",
          "Ejecutor de API: corridas de colecciones Postman vía Newman.",
          "Generador de reportes de bug: reportes estandarizados con severidad y evidencia.",
          "Generador de informe de cierre: dashboard ejecutivo con recomendación Go/No-Go.",
          "Regla central del framework: no inventar. Si a un agente le falta información, la marca y pregunta en vez de rellenar con una suposición disfrazada de hecho.",
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
  {
    id: "qa-playwright-ia",
    area: "qa",
    group: "QA con Agentes de IA",
    title: "Playwright + TypeScript · Suite E2E",
    summary:
      "Suite de pruebas E2E con Playwright y TypeScript sobre laboratoriodetesting.com: login, validación de formularios y carrito, con reportes HTML y CI.",
    tags: ["Playwright", "TypeScript", "E2E", "GitHub Actions"],
    repo: "https://github.com/gime09/qa-agentico/tree/main/playwright-ai-curso-master",
    siteUrl: "https://www.laboratoriodetesting.com/",
    siteLabel: "Abrir sitio bajo prueba",
    metrics: [
      { value: "2", label: "Flujos E2E" },
      { value: "HTML", label: "Reportes y trazas" },
      { value: "CI", label: "GitHub Actions" },
    ],
    sections: [
      {
        title: "Alcance",
        items: [
          "Automatización de extremo a extremo de los flujos críticos de la plataforma: inicio de sesión y gestión del carrito de compras.",
          "Validación del formulario de login, incluidos casos de error y formatos de email.",
          "Verificación del agregado de productos y de la gestión del carrito.",
          "Historias de usuario, planes de prueba y reportes de negocio documentados en el repositorio.",
        ],
      },
      {
        title: "Infraestructura",
        items: [
          "Playwright con TypeScript sobre Node.js.",
          "Reportes HTML y trazas para depuración de las corridas.",
          "Workflow de GitHub Actions en cada push o pull request a main y master.",
          "Datos y configuración reutilizables en fixtures.",
        ],
      },
    ],
  },

  // ───────────── Gestión de proyectos ─────────────
  {
    id: "pm-charter",
    area: "pm",
    caseId: "turnos",
    step: 1,
    group: "Inicio",
    title: "Acta de Constitución",
    summary: "Presupuesto inicial, objetivos, alcance, interesados y criterios de éxito.",
    tags: ["Inicio", "Alcance", "Presupuesto"],
    metrics: [{ value: "$8.500.000", label: "Presupuesto inicial" }],
    sections: [
      {
        title: "Estructura",
        items: [
          "Información del proyecto (datos y patrocinadores), propósito y justificación.",
          "Descripción y entregables, junto con los requerimientos de alto nivel del sistema y del proyecto.",
          "Objetivos organizados por alcance, cronograma, costo y calidad; premisas y restricciones.",
          "Riesgos iniciales de alto nivel, cronograma de hitos principales, presupuesto inicial asignado y lista de interesados.",
          "Requisitos de aprobación, criterios de cierre o cancelación, asignación del gerente de proyecto y niveles de autoridad.",
          "Personal y recursos preasignados, y aprobaciones del acta.",
        ],
      },
      {
        title: "Presupuesto inicial asignado",
        items: [
          "Presupuesto base: $7.500.000 + reserva de contingencia aproximada del 12%: $1.000.000 = presupuesto total: $8.500.000.",
          "La reserva de contingencia cubre los riesgos identificados en la sección de riesgos iniciales.",
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
    caseId: "turnos",
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
        title: "Estructura",
        items: [
          "Agenda, situación actual, objetivos y alcance del proyecto.",
          "Interesados e interesadas y gobierno del proyecto: patrocinador, jefatura de programa, jefe de proyecto y proveedor.",
          "Fases del proyecto: análisis y diseño, implementación y producción.",
          "Metodología ágil con sprints quincenales y sus ceremonias.",
          "Cronograma de alto nivel y riesgos iniciales.",
          "Presentación de 12 diapositivas, coherente con la misma línea de tiempo y los roles del resto de la evidencia del proyecto.",
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
    caseId: "turnos",
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
    caseId: "turnos",
    step: 4,
    group: "Planificación",
    title: "Plan de Gestión de Riesgos",
    summary: "Matriz probabilidad/impacto con planes de respuesta y monitoreo.",
    tags: ["Riesgos", "Matriz P×I"],
    metrics: [{ value: "8", label: "Riesgos identificados" }],
    sections: [
      {
        title: "Estructura",
        items: [
          "Objetivo del plan y metodología de gestión: identificación, análisis cualitativo, priorización, respuesta y monitoreo.",
          "Roles y responsabilidades, junto con la matriz de probabilidad e impacto.",
          "Registro de 8 riesgos con categoría, exposición y estrategia de respuesta.",
          "Plan de respuesta detallado para los riesgos de exposición alta.",
          "Desglose de la reserva de contingencia de $1.000.000 (aproximadamente 12% del presupuesto), asignada según el nivel de exposición.",
          "Esquema de monitoreo quincenal durante la ejecución.",
        ],
      },
      {
        title: "Trazabilidad",
        items: [
          "El riesgo de cambio de versión no comunicado en la librería de autenticación de terceros se materializó durante la ejecución.",
          "El evento quedó registrado en el Informe de Programación Inicial vs Final y en el Acta de Cierre del Proyecto, conectando la planificación de riesgos con lo ocurrido realmente.",
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
    caseId: "turnos",
    step: 5,
    group: "Seguimiento",
    title: "Control de Horas Hombre",
    summary: "Seguimiento semanal por actividad y colaborador.",
    tags: ["HH", "Seguimiento"],
    metrics: [{ value: "6", label: "Roles del equipo" }],
    sections: [
      {
        title: "Estructura",
        items: [
          "Una hoja por integrante del equipo, con las columnas Fecha, Tipo de Hora (Normal/Extra), N.° de Horas, Perfil, Colaborador, Proyecto, Actividad realizada, Descripción y Verificador/Entregable.",
          "Cada hoja incluye el total de horas calculado.",
        ],
      },
      {
        title: "Equipo y alcance",
        items: [
          "Equipo ficticio de 6 roles: Jefe de Proyecto Senior, Desarrolladora Frontend Senior, Desarrollador Backend Senior, Analista Funcional, DBA SQL Server Senior y Tester de Aplicaciones Senior.",
          "El registro cubre las dos primeras semanas del proyecto: levantamiento, diseño de pantallas, configuración de ambientes y primeras historias de usuario.",
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
    caseId: "turnos",
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
        title: "Formato del reporte",
        items: [
          "Ficha de programa con objetivos, alcance y cronograma planificado frente al real.",
          "Hitos de pago vinculados a entregables, logros del período y próximos pasos.",
          "Riesgos activos con su plan de respuesta, problemas y lecciones aprendidas.",
          "Anexo con las definiciones de estado del proyecto.",
        ],
      },
      {
        title: "Seguimiento del proyecto",
        items: [
          "Proyecto de 2 meses de duración, con un presupuesto de $8.500.000 distribuido en 3 hitos de pago: 30%, 40% y 30%.",
          "Avance real frente al planificado por mes, con cálculo de la desviación.",
          "Monitoreo de 2 riesgos activos: dependencia de datos maestros de terceros y necesidad de capacitación previa al lanzamiento.",
          "Lección aprendida: definir tempranamente los datos maestros críticos para reducir riesgos y evitar impactos en la ejecución.",
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
    caseId: "turnos",
    step: 7,
    group: "Seguimiento",
    title: "Programación Inicial vs Final",
    summary:
      "Análisis de un desvío por una actualización no comunicada en una librería de autenticación externa.",
    tags: ["Desvío", "Acciones correctivas"],
    metrics: [{ value: "20 días", label: "Desvío analizado" }],
    sections: [
      {
        title: "Propósito y hallazgo",
        items: [
          "Contrastar la programación inicial con la programación final o real y explicar los motivos de la diferencia de tiempo.",
          "Dos tareas no planificadas causaron el desvío: actualización de la integración por un cambio de versión no comunicado en la librería de autenticación del sistema de pacientes (12 días) y repetición de las pruebas de integración afectadas (8 días).",
          "El desplazamiento total fue de 20 días en el cierre del proyecto: del 31 de mayo al 20 de junio de 2024.",
        ],
      },
      {
        title: "Acción correctiva",
        items: [
          "Incorporar una validación temprana de versiones de dependencias externas al checklist de inicio de la fase de construcción, para prevenir el mismo problema en proyectos futuros.",
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
    caseId: "turnos",
    step: 8,
    group: "Seguimiento",
    title: "Cuantificación de Esfuerzos",
    summary: "HH iniciales vs reales y roadmap de fases futuras.",
    tags: ["Esfuerzo", "Costos", "Roadmap"],
    metrics: [
      { value: "800", label: "HH planificadas" },
      { value: "912", label: "HH reales" },
      { value: "+14%", label: "HH adicionales" },
      { value: "1.100", label: "HH fases futuras" },
    ],
    sections: [
      {
        title: "Dentro de alcance",
        items: [
          "Módulos entregados: búsqueda y reserva de turnos, cancelación y reprogramación, integración con el sistema de pacientes, notificaciones y panel de administración.",
          "La planificación inicial contempló 800 HH y la final 912 HH por rol. El incremento de 112 HH (14%) se explica por el cambio de versión de la librería de autenticación, documentado en el Informe de Programación Inicial vs Final.",
          "Las HH adicionales consumieron $680.000 de la reserva de contingencia; quedaron $320.000 sin utilizar.",
        ],
      },
      {
        title: "Fuera de alcance",
        items: [
          "Roadmap de funcionalidades futuras: recordatorios por WhatsApp, encuestas de satisfacción, reprogramación automática, reportes de ocupación, ausencias y tiempos de espera, e integraciones con facturación y laboratorio.",
          "Estas funcionalidades fueron estimadas en 1.100 HH, con una planificación de alto nivel de 130 días.",
        ],
      },
      {
        title: "Conclusión",
        items: [
          "Se recomienda incorporar un margen de contingencia de entre 10% y 15% en proyectos con integraciones a sistemas externos fuera del control directo del equipo.",
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
    caseId: "turnos",
    step: 9,
    group: "Cierre",
    title: "Acta de Cierre",
    summary: "Liquidación final, balance de objetivos y lecciones aprendidas.",
    tags: ["Cierre", "Lecciones aprendidas"],
    metrics: [{ value: "$8.180.000", label: "Liquidación final" }],
    sections: [
      {
        title: "Estructura",
        items: [
          "Datos generales y resumen ejecutivo del proyecto.",
          "Objetivos planificados frente a los alcanzados, y entregables completados.",
          "Desviaciones registradas, con referencia al Informe de Programación Inicial vs Final.",
          "Estado financiero final y lecciones aprendidas.",
          "Transición a operación y soporte, criterios de cierre cumplidos y aprobaciones.",
        ],
      },
      {
        title: "Cierre real y ejecución financiera",
        items: [
          "Cierre real el 20-06-2024, con 20 días de desviación respecto de la fecha planificada del 31-05-2024, por el mismo motivo documentado en el informe de programación.",
          "Ejecución financiera final de $8.180.000 sobre un presupuesto total de $8.500.000, incluyendo $680.000 de la reserva de contingencia consumidos por la desviación.",
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

  // ─── Gestión de proyectos · Caso 2: Modernización del MCD ───
  {
    id: "pm2-charter",
    area: "pm",
    caseId: "mcd",
    step: 1,
    group: "Inicio",
    title: "Acta de Constitución e Interesados",
    summary:
      "Autorización formal, objetivos medibles, presupuesto, plazo y registro de los 10 interesados del holding.",
    tags: ["Inicio", "Interesados", "Presupuesto"],
    metrics: [
      { value: "38", label: "Días hábiles" },
      { value: "$28.000.000", label: "Presupuesto aprobado" },
      { value: "10", label: "Interesados" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Propósito y justificación: Oracle Forms está fuera de soporte, se instala equipo por equipo y no admite nuevos puntos de acceso.",
          "Seis objetivos específicos con métrica: 3 de 3 mantenedores, 45 usuarios, 4 perfiles, alta de oficina bajo 4 horas y 0 defectos críticos.",
          "Alcance preliminar, supuestos, restricciones normativas (Ley 19.628) y seis riesgos iniciales con su respuesta.",
          "Hitos, presupuesto, criterios de éxito y límites de autoridad de la jefa de proyecto.",
          "Registro de interesados con rol, expectativa, influencia y estrategia, más la matriz poder–interés.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Presupuesto aprobado: $28.000.000. Oferta de Andes TI: $27.720.986; saldo no asignado: $279.014.",
          "Plazo: 38 días hábiles, del 02-03-2026 al 23-04-2026. Esfuerzo estimado: 614 horas.",
          "Hitos: kickoff 05-03, alcance y diseño 19-03, Sprint 1 31-03, Sprint 2 07-04, UAT 13-04, producción 15-04, marcha blanca 17-04, aceptación final 21-04 y acta de cierre 22-04.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-charter/files/acta-constitucion-e-interesados.pdf",
        label: "Acta de Constitución e Interesados",
        format: "pdf",
        size: "25 KB",
        note: "7 páginas",
      },
    ],
  },
  {
    id: "pm2-scope",
    area: "pm",
    caseId: "mcd",
    step: 2,
    group: "Planificación",
    title: "Enunciado del Alcance",
    summary:
      "Producto, 12 requerimientos funcionales, 10 no funcionales, 5 historias de usuario y 8 exclusiones explícitas.",
    tags: ["Alcance", "Requerimientos", "Exclusiones"],
    metrics: [
      { value: "12", label: "Requerimientos funcionales" },
      { value: "10", label: "No funcionales" },
      { value: "8", label: "Exclusiones" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Justificación y costo de la inacción: cada oficina nueva exige 3 días de instalación y no hay trazabilidad de cambios.",
          "Descripción del producto en cuatro capas y siete módulos: autenticación, Tipología, Direcciones, Información, integración, reportes y auditoría.",
          "12 requerimientos funcionales con prioridad Must o Should, fuente y criterio de aceptación verificable.",
          "10 requerimientos no funcionales: disponibilidad 99,5%, p95 bajo 3 segundos, OWASP, WCAG 2.1 AA, RTO 4 h y RPO 24 h.",
          "5 historias de usuario, criterios de aceptación por entregable y 8 exclusiones declaradas.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "10 de los 12 requerimientos funcionales son Must: definen el mínimo aceptable para la puesta en marcha.",
          "Las exclusiones cubren hardware, licenciamiento, red y respaldos, directorio activo, sistemas externos, otras filiales, soporte posterior y depuración manual de datos.",
          "Restricciones: cierre el 23-04-2026, presupuesto máximo de $28.000.000 y plataforma .NET sobre la infraestructura del holding.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-scope/files/enunciado-del-alcance.pdf",
        label: "Enunciado del Alcance",
        format: "pdf",
        size: "23 KB",
        note: "7 páginas",
      },
    ],
  },
  {
    id: "pm2-wbs",
    area: "pm",
    caseId: "mcd",
    step: 3,
    group: "Planificación",
    title: "EDT y Diccionario",
    summary:
      "Seis fases, 12 entregables y 49 paquetes de trabajo, cada uno con responsable, duración, horas, costo y criterio de aceptación.",
    tags: ["EDT", "Diccionario", "Paquetes de trabajo"],
    metrics: [
      { value: "6", label: "Fases" },
      { value: "12", label: "Entregables" },
      { value: "49", label: "Paquetes" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Descomposición en tres niveles: fases, entregables y paquetes de trabajo.",
          "49 paquetes con responsable principal, duración, horas y costo; el diccionario agrega la descripción del trabajo y el criterio de aceptación.",
          "Hoja de resumen por fase con paquetes, horas, costo directo y participación porcentual.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Costo directo total: $20.090.000 y 614 horas, distribuidos en las seis fases.",
          "Gestión del Proyecto concentra 15 paquetes, 148 horas y $6.600.000 (32,9% del costo directo).",
          "Construcción aporta 12 paquetes y 164 horas; Análisis y Diseño, 9 paquetes y 120 horas.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-wbs/files/edt-y-diccionario.xlsx",
        label: "EDT y Diccionario",
        format: "xlsx",
        size: "18 KB",
        note: "4 hojas",
      },
    ],
  },
  {
    id: "pm2-schedule",
    area: "pm",
    caseId: "mcd",
    step: 4,
    group: "Planificación",
    title: "Cronograma y Ruta Crítica",
    summary:
      "38 días hábiles con 9 hitos, curva S diaria y seis tramos de ruta crítica sin holgura.",
    tags: ["Gantt", "Ruta crítica", "Hitos"],
    metrics: [
      { value: "38", label: "Días hábiles" },
      { value: "9", label: "Hitos" },
      { value: "0", label: "Días de holgura" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Cronograma con EDT, duración, inicio, fin, predecesoras, recursos y costo por tarea, más el diagrama de Gantt diario.",
          "Hoja de hitos H-01 a H-09 con fecha y evidencia de aceptación.",
          "Asignación de recursos por rol y curva S de costo planificado acumulado.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Del 02-03-2026 al 23-04-2026: 38 días hábiles y 9 hitos, del kickoff al acta de cierre.",
          "Los seis tramos de la ruta crítica tienen 0 días de holgura: cualquier atraso desplaza la fecha de término.",
          "Los dos sprints se solapan con calidad: el plan de pruebas arranca el 20-03, antes de que termine la construcción.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-schedule/files/cronograma-y-gantt.xlsx",
        label: "Cronograma y Gantt",
        format: "xlsx",
        size: "18 KB",
        note: "4 hojas",
      },
    ],
  },
  {
    id: "pm2-cost",
    area: "pm",
    caseId: "mcd",
    step: 5,
    group: "Planificación",
    title: "Plan de Gestión de Costos",
    summary:
      "Estimación ascendente, tarifas por rol, reservas, margen y curva de desembolso hasta el precio del contrato.",
    tags: ["Costos", "BAC", "EVM"],
    metrics: [
      { value: "$27.720.986", label: "BAC" },
      { value: "614", label: "Horas hombre" },
      { value: "$2.651.880", label: "Reservas" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Enfoque, precisión de estimación, umbrales de alerta y frecuencia de control semanal y mensual.",
          "Estimación ascendente desde los 49 paquetes, más estimación por tres valores en los paquetes de mayor incertidumbre.",
          "Tarifas por rol, estructura de costos por fase y reservas de contingencia (8%) y de gestión (4%).",
          "Puente de costo a precio, curva de desembolso mensual y reglas de control con valor ganado.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Costo directo $20.090.000 + indirectos $2.009.000 + reservas $2.651.880 = costo total $24.750.880.",
          "Margen de la consultora de 12% ($2.970.106) hasta un precio de contrato de $27.720.986.",
          "El contrato queda $279.014 bajo el presupuesto aprobado de $28.000.000; el saldo es holgura del cliente.",
          "Desembolso de costos directos: $12.222.759 en marzo (60,8%) y $7.867.241 en abril (39,2%).",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-cost/files/plan-gestion-costos.pdf",
        label: "Plan de Gestión de Costos",
        format: "pdf",
        size: "19 KB",
        note: "6 páginas",
      },
    ],
  },
  {
    id: "pm2-quality",
    area: "pm",
    caseId: "mcd",
    step: 6,
    group: "Planificación",
    title: "Plan de Gestión de Calidad",
    summary:
      "Once factores medibles, siete niveles de prueba, gestión de defectos por severidad y cinco puertas de calidad.",
    tags: ["Calidad", "ISO 25010", "Puertas"],
    metrics: [
      { value: "11", label: "Factores" },
      { value: "7", label: "Niveles de prueba" },
      { value: "5", label: "Puertas" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Política, objetivos y roles de calidad con matriz RACI.",
          "Estándares: ISO 9001, ISO/IEC 25010, OWASP ASVS, WCAG 2.1 AA y Leyes 19.628 y 21.719.",
          "Línea base con 11 factores, cada uno con métrica, umbral, frecuencia y responsable.",
          "Aseguramiento (revisión por pares, definición de terminado, auditorías) y control con siete niveles de prueba.",
          "Defectos por severidad, cinco puertas de calidad y tratamiento de no conformidades.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Umbrales: cobertura unitaria ≥ 70%, ≥ 95% de casos exitosos, CPI ≥ 0,95 y 0 defectos críticos al cierre.",
          "Puertas: G1 diseño (19-03), G2 Sprint 1 (31-03), G3 Sprint 2 (07-04), G4 pre-producción (14-04) y G5 cierre (23-04).",
          "Un defecto crítico tiene 4 horas para corregirse y uno alto 8 horas; ambos bloquean la aceptación.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-quality/files/plan-gestion-calidad.pdf",
        label: "Plan de Gestión de Calidad",
        format: "pdf",
        size: "20 KB",
        note: "6 páginas",
      },
    ],
  },
  {
    id: "pm2-hr",
    area: "pm",
    caseId: "mcd",
    step: 7,
    group: "Planificación",
    title: "Plan de Recursos Humanos",
    summary:
      "Estructura del equipo, límites de autoridad, matriz RACI y dedicación por fase para 614 horas.",
    tags: ["Equipo", "RACI", "Dedicación"],
    metrics: [
      { value: "9", label: "Roles de ejecución" },
      { value: "17", label: "Actividades RACI" },
      { value: "614", label: "Horas" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Equipo dedicado por fase, con un núcleo estable de jefatura, arquitectura y calidad.",
          "Nueve roles de ejecución con responsabilidades y límites: qué puede y qué no puede decidir cada uno.",
          "Matriz RACI de 17 actividades y competencias requeridas por rol.",
          "Dedicación por persona y por fase, recurso crítico y plan de contingencia.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "614 horas asignadas: 176 de jefatura, 144 de desarrollo, 70 de calidad y 56 de análisis funcional.",
          "La jefa de proyecto dedica 58% de jornada y el desarrollador .NET 47%; es el recurso crítico de la ruta.",
          "La capacitación y los manuales se adquieren a proveedores externos homologados por el holding.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-hr/files/plan-recursos-humanos.pdf",
        label: "Plan de Recursos Humanos",
        format: "pdf",
        size: "23 KB",
        note: "6 páginas",
      },
    ],
  },
  {
    id: "pm2-procurement",
    area: "pm",
    caseId: "mcd",
    step: 8,
    group: "Planificación",
    title: "Adquisiciones y Cierre de Contratos",
    summary:
      "Análisis de hacer o comprar, selección ponderada de proveedores y simulación del cierre de los tres contratos con costo.",
    tags: ["Adquisiciones", "Contratos", "Garantías"],
    metrics: [
      { value: "3", label: "Contratos con costo" },
      { value: "$28.824.986", label: "Contratos gestionados" },
      { value: "10%", label: "Garantía retenida" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Análisis de hacer o comprar para desarrollo, migración, pruebas, capacitación, manuales e infraestructura.",
          "Enunciado de cinco adquisiciones y matriz de selección con precio, experiencia, calidad y disponibilidad.",
          "Contratos a precio fijo cerrado, calendario de compras, administración, control de cambios y disputas.",
          "Simulación del cierre: actas de recepción, liquidación, retención y liberación de garantías.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Tres contratos con costo: consultoría $27.720.986, capacitación $528.000 y manuales $576.000.",
          "Total de contratos gestionados: $28.824.986. Como ADQ-01 y ADQ-02 están incluidos en el precio de ADQ-00, el presupuesto del proyecto sigue siendo $27.720.986.",
          "Se retiene el 10% ($2.882.499) y se libera 60 días después de la recepción conforme, entre el 09 y el 22-06-2026.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-procurement/files/plan-adquisiciones-y-cierre.pdf",
        label: "Plan de Adquisiciones y Cierre",
        format: "pdf",
        size: "24 KB",
        note: "8 páginas",
      },
    ],
  },
  {
    id: "pm2-monitoring",
    area: "pm",
    caseId: "mcd",
    step: 9,
    group: "Seguimiento",
    title: "Seguimiento y Control",
    summary:
      "Control de alcance, tiempo, costo y riesgos: valor ganado al corte del 27-03-2026, registro de cambios y matriz de riesgos.",
    tags: ["EVM", "Riesgos", "Control de cambios"],
    metrics: [
      { value: "0,94", label: "CPI" },
      { value: "0,91", label: "SPI" },
      { value: "$29.384.245", label: "EAC" },
    ],
    sections: [
      {
        title: "Estructura",
        items: [
          "Marco de seguimiento y técnicas aplicadas al alcance, al tiempo, al costo y a los riesgos.",
          "Control integrado de cambios en seis pasos, con comité y umbrales de decisión.",
          "Registro de cuatro cambios, CR-01 a CR-04, y línea base de 38 días con ruta crítica sin holgura.",
          "Valor ganado con datos del corte, diagnóstico, acciones correctivas y matriz de siete riesgos con dueño y disparador.",
        ],
      },
      {
        title: "Datos clave",
        items: [
          "Corte al 27-03-2026: PV $11.565.103, EV $10.524.244 y AC $11.155.699, con 20 de los 38 días hábiles transcurridos.",
          "CV -$631.455 y SV -$1.040.859; CPI 0,94, SPI 0,91, EAC $29.384.245 y VAC -$1.663.259.",
          "TCPI 1,04: se requiere 3,8% más de eficiencia para cerrar dentro del BAC.",
          "Cuatro solicitudes de cambio: dos aprobadas, una rechazada por un impacto de 12 días y una en evaluación.",
        ],
      },
    ],
    files: [
      {
        href: "/media/projects/pm2-monitoring/files/seguimiento-y-control.pdf",
        label: "Plan de Seguimiento y Control",
        format: "pdf",
        size: "28 KB",
        note: "8 páginas",
      },
    ],
  },

  // ───────────── Análisis Funcional ─────────────
  {
    id: "fa-portal",
    area: "fa",
    caseId: "portal-turnos",
    group: "Portal de Turnos Médicos",
    title: "Levantamiento y Análisis de Sistema",
    summary:
      "Mapa de aplicaciones actual vs nuevo portal, reglas de validación y matriz de falencias y mejoras.",
    tags: ["Levantamiento", "Mapa de aplicaciones", "Reglas de negocio"],
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
        label: "Levantamiento y Análisis de Sistema",
        format: "docx",
        size: "65 KB",
        note: "Mapa de aplicaciones",
      },
    ],
  },
  {
    id: "fa-moneymate-breakdown",
    area: "fa",
    caseId: "moneymate",
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
    caseId: "moneymate",
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
    caseId: "moneymate",
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
