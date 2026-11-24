import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { cvs } from "@/data/cvs";
import { projectFilePreview, projects } from "@/data/portfolio";

describe("adjuntos de proyectos", () => {
  const media = projects.flatMap((project) => [
    ...(project.images ?? []).map((image) => image.src),
    ...(project.files ?? []).map((file) => file.href),
  ]);

  const previews = projects.flatMap((project) =>
    (project.files ?? []).map((file) => ({
      file,
      preview: projectFilePreview(file),
    })),
  );

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

  it("cada documento descargable tiene su vista previa en public/", () => {
    const missing = previews
      .filter(({ preview }) => preview.kind === "pdf")
      .map(({ preview }) => preview.href)
      .filter((href) => !existsSync(`public${href}`));

    expect(missing).toEqual([]);
  });

  it("los XML se previsualizan como texto desde el archivo original", () => {
    const xml = previews.filter(({ file }) => file.format === "xml");

    expect(xml.length).toBeGreaterThan(0);
    for (const { file, preview } of xml) {
      expect(preview.kind).toBe("text");
      expect(preview.href).toBe(file.href);
    }
  });

  it("las descargas siguen apuntando al archivo original", () => {
    for (const { file, preview } of previews) {
      expect(file.href).toMatch(/^\/media\/projects\/.+\/files\/.+\.[a-z0-9]+$/);
      if (file.format !== "pdf" && file.format !== "xml") {
        expect(preview.href).not.toBe(file.href);
      }
    }
  });
});

describe("CV descargables", () => {
  it("todos los CV existen y se pueden previsualizar", () => {
    const missing = cvs.filter((cv) => !existsSync(`public${cv.url}`));

    expect(missing).toEqual([]);
    expect(cvs.every((cv) => cv.url.endsWith(".pdf"))).toBe(true);
  });
});
