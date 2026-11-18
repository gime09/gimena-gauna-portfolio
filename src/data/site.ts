/**
 * URL pública del sitio, sin barra final.
 * Si cambia el dominio, esta es la única línea que hay que tocar:
 * canonical, og:image, sitemap y JSON-LD se derivan de acá.
 */
export const SITE_URL = "https://gimena-gauna-portfolio.vercel.app";

export const SITE_NAME = "Gimena Gauna";

export const OG_IMAGE = {
  url: `${SITE_URL}/media/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Gimena Gauna — QA Engineer, Gestión de proyectos y Analista Funcional",
};

type PageMetaInput = {
  title: string;
  description: string;
  /** Ruta absoluta dentro del sitio, con barra inicial. Ej: "/qa". */
  path: string;
  type?: "website" | "profile" | "article";
};

type PageMetaTag =
  { title: string } | { name: string; content: string } | { property: string; content: string };

/** Meta de título, descripción, Open Graph y Twitter para cada página. */
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: PageMetaInput): PageMetaTag[] {
  const url = `${SITE_URL}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "es_AR" },
    { property: "og:image", content: OG_IMAGE.url },
    { property: "og:image:width", content: String(OG_IMAGE.width) },
    { property: "og:image:height", content: String(OG_IMAGE.height) },
    { property: "og:image:alt", content: OG_IMAGE.alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: OG_IMAGE.url },
  ];
}

/** Link canónico de la página. */
export function canonical(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

/**
 * Datos estructurados. El router detecta la clave `script:ld+json` y la
 * serializa como <script type="application/ld+json"> en el <head>.
 * El cast existe porque el tipo de `head()` de esta versión todavía no
 * contempla esa clave, aunque sí la soporta en runtime.
 */
export function jsonLd(data: Record<string, unknown>): PageMetaTag {
  return { "script:ld+json": data } as unknown as PageMetaTag;
}

/** Páginas indexables, para el sitemap. */
export const SITE_PAGES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/qa", priority: "0.9", changefreq: "monthly" },
  { path: "/project-management", priority: "0.9", changefreq: "monthly" },
  { path: "/analisis-funcional", priority: "0.9", changefreq: "monthly" },
  { path: "/sobre-mi", priority: "0.7", changefreq: "yearly" },
  { path: "/contacto", priority: "0.8", changefreq: "yearly" },
] as const;
