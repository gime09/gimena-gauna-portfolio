import { describe, expect, it } from "vitest";

import { projects } from "@/data/portfolio";

// El número que muestra cada tarjeta sale de `step` y la página respeta el orden
// del array. Si se agrega un entregable en el lugar equivocado, se ve 01, 02,
// 03, 05, 06, 04. Estos tests lo detectan antes del deploy.
describe("orden de los entregables", () => {
  it("cada área lista sus pasos en orden ascendente y sin huecos", () => {
    const areas = [...new Set(projects.map((project) => project.area))];

    for (const area of areas) {
      const steps = projects
        .filter((project) => project.area === area)
        .map((project) => project.step)
        .filter((step): step is number => step !== undefined);

      if (steps.length === 0) continue;

      expect(steps, `área ${area}`).toEqual(steps.map((_, index) => index + 1));
    }
  });

  it("no hay ids repetidos", () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
