# Portafolio — Gimena Gauna

Sitio personal de Gimena Gauna: Técnica en Programación (UTN), QA Engineer, Gestión de proyectos y Analista Funcional.

Dark theme con fondo animado, tarjeta de perfil, navegación lateral en escritorio y barra inferior en móvil.

## Stack

- **TanStack Start** (React 19 + SSR) con routing por archivos
- **Vite 8** + **Nitro** para el build de servidor
- **Tailwind CSS v4** (config en `src/styles.css`)
- **Radix UI** para diálogos y componentes accesibles

## Requisitos

Node.js 22 o superior y npm.

## Comandos

```sh
npm install     # instalar dependencias
npm run dev     # servidor local en http://localhost:8080
npm run build   # build de producción
npm run preview # previsualizar el build
npm test        # tests (Vitest)
npm run lint    # ESLint + Prettier
npm run format  # formatear todo el repo
```

## Dónde está cada cosa

| Qué | Archivo |
| --- | --- |
| Perfil, áreas, proyectos y métricas | `src/data/portfolio.ts` |
| Descargas de CV (rutas y nombres) | `src/data/cvs.ts` |
| Shell: nav, perfil, footer, 404 y error | `src/routes/__root.tsx` |
| Páginas: inicio, áreas, sobre mí, contacto | `src/routes/*.tsx` |
| Foto y PDFs | `public/media/` |
| Estilos y variables de color | `src/styles.css` |

Todo el contenido vive en `src/data/portfolio.ts`; las páginas solo lo renderizan. Para agregar un proyecto alcanza con sumar un objeto a `projects` (con `featured: true` aparece en la home).

## Assets

En `public/media/`:

- `gimena-gauna.webp` — retrato 574×752 con transparencia (29 KB)
- `cv-gimena-gauna-qa.pdf`
- `cv-gimena-gauna-pm.pdf`
- `cv-gimena-gauna-pmo.pdf`
- `cv-gimena-gauna-analista-funcional.pdf`

Para reemplazar un CV, pisá el archivo manteniendo el nombre. La foto debe conservar la proporción 574×752 porque el delineado animado (`src/data/portrait-outline.ts`) se extrajo de esa geometría.

## Publicar en Vercel

El proyecto ya está preparado: `vercel.json` define el build y Nitro detecta Vercel solo.

1. Entrá a [vercel.com](https://vercel.com), iniciá sesión con GitHub.
2. **Add New → Project** e importá `gime09/gimena-gauna-portfolio`.
3. En *Production Branch* elegí la rama que quieras publicar (`main` o `Andromeda`).
4. Dejá el resto por defecto y presioná **Deploy**.

Vercel corre `npm run build` y toma la salida `.vercel/output` (Build Output API), que incluye la función SSR y los estáticos. Cada push a la rama elegida redeploya automáticamente.

Con dominio propio, agregalo en **Settings → Domains** y luego actualizá `SITE_URL` en `src/data/site.ts` (canonical, og:image, sitemap y JSON-LD se arman a partir de esa constante).

## Ramas

- `main`: versión publicada.
- `Andromeda`: línea de trabajo donde se hizo la migración de assets a Lovable, accesibilidad y rediseño de la home.

## Nota sobre Lovable

El proyecto nació en Lovable y sigue vinculado (ver `AGENTS.md`). Los cambios de esta rama son compatibles: no se reescribió el historial ni se tocó `main`. Esta versión ya no depende de Lovable para funcionar, porque la foto y los CV son archivos del repositorio.

## Contenido de referencia

El brief original con el detalle completo de cada proyecto quedó documentado en `src/data/portfolio.ts`, que es la fuente de verdad.
