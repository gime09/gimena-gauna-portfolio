import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { SITE_PAGES, SITE_URL } from "@/data/site";

// Si cambia el dominio o se agrega una página, estos tests avisan antes del deploy.
describe("SEO", () => {
  it("el sitemap lista todas las páginas declaradas", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");

    for (const page of SITE_PAGES) {
      expect(xml).toContain(`<loc>${SITE_URL}${page.path}</loc>`);
    }
  });

  it("robots.txt apunta al sitemap del dominio actual", () => {
    const robots = readFileSync("public/robots.txt", "utf8");

    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
  });
});
