# Gimena Gauna Portfolio

Crear mi portafolio web interactivo y responsive para mobile en base a mi portafolio de Notion y las capturas de diseño adjuntas:

Diseño visual (basado en Captura1.JPG y Captura2.JPG):
- Tema oscuro con fondo noise effect animado (con movimiento sutil).
- Barra de navegación vertical con iconos en píldoras y acento ámbar/dorado para el estado activo.
- Tarjeta de perfil lateral/destacada con mi foto adjunta (cv7_ccexpress.png), nombre "Gimena Gauna", título "Técnica en Programación (UTN) · QA Engineer · Project Manager · Analista Funcional", biografía breve, enlaces a redes sociales y botón "Descargar CV / Contacto".
- Tarjetas de contenido estilo glassmorphism oscuro con bordes sutiles y detalles interactivos.
- Totalmente responsive para móviles (menú adaptado a barra inferior o drawer en pantallas pequeñas).

Información personal y contacto:
- Nombre: Gimena Gauna
- Perfil: Técnica en Programación (UTN), con experiencia y formación en QA, Análisis Funcional y Project Management.
- Trayectoria y propuesta de valor: Participación en el ciclo completo de software (comprensión de negocio, análisis funcional, planificación y aseguramiento de calidad). Reconversión desde la docencia (Profesora de Historia) y marketing digital hacia tecnología, aportando empatía, comunicación con stakeholders y atención al detalle.
- Enlaces de contacto:
  * GitHub: https://github.com/gime09?tab=repositories
  * LinkedIn: https://www.linkedin.com/in/gimena-gauna-08925a197/
  * Correo: gimegauna12345678@gmail.com
  * WhatsApp: +54 9 261 5259143

Secciones y contenido de proyectos/evidencia:
1. Pestañas o selector de perfiles para alternar entre las 3 áreas: QA & Testing, Project Management, y Análisis Funcional.

2. Sección QA & Testing:
- QA Manual: Análisis y diseño de casos de prueba sobre DemoBlaze (requisitos, precondiciones, pasos y resultados esperados). Pruebas de caja negra con tablas de decisión (flujos de pago con tarjeta, bonos, descuentos).
- QA de Servicios Web (APIs):
  * SoapUI: Pruebas funcionales SOAP con AddInteger (casos positivo/negativo con validación de SLA y códigos HTTP 200/400) y CountryInfo FullCountryInfo (código ISO válido "AR", código inexistente "ZY" y XML malformado con manejo de errores).
  * Postman Rendimiento (Performance Testing): API de feriados (date.nager.at) con Spike test desde Runner (100 VU, 1.092 requests enviados, throughput de 15,85 req/s, tiempo promedio de 20ms, 0% error, análisis de percentiles 90th/95th/99th).
  * Postman Funcional REST: API reqres.in creación de usuarios (definición de alcance funcional vs rendimiento, casos de prueba con y sin body, validaciones 201 Created vs 400 Bad Request).
  * Postman Data-Driven Testing: Runner con archivo CSV sobre API LongWeekend (5 iteraciones, 15 validaciones pasadas, scripts Post-res para status, body y SLA).
  * Newman CLI: Reporte HTML interactivo (htmlextra) sobre registro en reqres.in, con diagnóstico real de falla en tiempo de respuesta (564ms vs umbral de 500ms).
- QA Automatizado (Repositorio: https://github.com/gime09/QA-Automation-Selenium):
  * Selenium WebDriver + Java 11/17/23 + TestNG + Maven + Page Object Model (POM) sobre SauceDemo, OrangeHRM y Automation Practice.
  * Cross-browser testing en Chrome, Firefox y Edge, y consultas JDBC a base de datos MySQL para datos de prueba.
  * Automatización con IA y Self-Healing Locators (librería AutoHeal locator con Gemini, manejo de esperas explícitas y sincronización en React SPAs).
- QA con Agentes de IA (Repositorio: https://github.com/gime09/ai-qa-testing):
  * Ciclo STLC completo con agentes especializados (Claude Code + Playwright MCP) sobre e-commerce ToolShop con enfoque human-in-the-loop.
  * Métricas: 117 pruebas ejecutadas (94 aprobadas, 17 fallidas, 6 bloqueadas), 49 casos manuales + 46 escenarios BDD Gherkin, 41 ambigüedades detectadas, 10 bug reports formalizados y dashboard de cierre Go/No-Go.

3. Sección Project Management (Caso integral: Portal de Autogestión de Turnos Médicos):
- Acta de Constitución: Presupuesto inicial ($8.500.000 con reserva de contingencia), objetivos, alcance, interesados y criterios de éxito.
- Presentación Kick Off: 12 diapositivas con agenda, gobierno, metodología ágil (sprints quincenales) y cronograma de alto nivel.
- Cronograma Gantt: 19 tareas distribuidas en 3 fases (Análisis y Diseño, Construcción e Implementación, Producción) a lo largo de 13 semanas.
- Control de Horas Hombre (HH): Seguimiento semanal por actividad y colaborador para 6 roles del equipo.
- Plan de Gestión de Riesgos: Matriz probabilidad/impacto con 8 riesgos identificados, planes de respuesta y monitoreo.
- Informe Programación Inicial vs Final: Análisis de desviación de 20 días por actualización no comunicada en librería de autenticación externa, con acciones correctivas implementadas.
- Cuantificación de Esfuerzos: Análisis de 800 HH iniciales vs 912 HH reales (14% de sobrecosto por la contingencia técnica) y roadmap de fases futuras (1.100 HH).
- Acta de Cierre: Liquidación final de $8.180.000, balance de objetivos y lecciones aprendidas sobre gestión de dependencias externas.

4. Sección Análisis Funcional:
- Relevamiento y Análisis de Sistema (Portal de Turnos Médicos): Mapa de aplicaciones actual vs nuevo portal, reglas de validación documentadas y no documentadas, matriz de falencias y oportunidades de mejora priorizadas.
- MoneyMate App (Ingeniería de requerimientos completa):
  * Desglose jerárquico: Épicas > Historias de Usuario > Características > Tareas distribuidas por rol (UX, Frontend, Backend, QA, Seguridad).
  * Elicitación y especificación: Simulación de entrevistas, modelado de Casos de Uso vs HdU, especificación BDD en Gherkin (Given/When/Then) y estimación con Planning Poker (Fibonacci).
  * Priorización y roadmap: Matriz valor vs esfuerzo y mapa de releases/sprints (2 releases, 4 sprints con aislamiento de riesgos técnicos).

5. Sección "Sobre Mí" y experiencia:
- Formación académica: Técnica en Programación (UTN), Profesora de Historia.
- Enfoque metodológico y aprendizaje continuo.
- Modal o visualizadores para inspeccionar el detalle de cada proyecto y caso de estudio.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f9e2ccf0-31c4-4b09-b518-29ab38a27ff8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
