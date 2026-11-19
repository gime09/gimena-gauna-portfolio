import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { projects } from "@/data/portfolio";

describe("adjuntos de proyectos", () => {
  const media = projects.flatMap((project) => [
    ...(project.images ?? []).map((image) => image.src),
    ...(project.files ?? []).map((file) => file.href),
  ]);

  it("todas las imágenes y descargas existen en public/", () => {
    const missing = media.filter((path) => !existsSync(`public${path}`));

    expect(missing).toEqual([]);
  });

  it("las imágenes tienen texto alternativo descriptivo y caption", () => {
    for (const project of projects) {
      for (const image of project.images ?? []) {
        expect(image.alt.length).toBeGreaterThan(20);
        expect(image.caption.length).toBeGreaterThan(0);
      }
    }
  });

  it("no hay adjuntos repetidos entre proyectos", () => {
    expect(new Set(media).size).toBe(media.length);
  });
});
