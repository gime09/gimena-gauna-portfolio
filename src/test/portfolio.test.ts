import { describe, expect, it } from "vitest";

import { projects } from "@/data/portfolio";

// El número que muestra cada tarjeta sale de `step` y la página respeta el orden
// del array. Si se agrega un entregable en el lugar equivocado, se ve 01, 02,
// 03, 05, 06, 04. Como una misma área puede tener varios casos integrales y cada
// uno reinicia la numeración, el orden se valida por área y caso.
describe("orden de los entregables", () => {
  it("cada caso lista sus pasos en orden ascendente y sin huecos", () => {
    const cases = new Map<string, number[]>();

    for (const project of projects) {
      if (project.step === undefined) continue;

      const key = `${project.area}/${project.caseId ?? "sin-caso"}`;
      const steps = cases.get(key) ?? [];
      steps.push(project.step);
      cases.set(key, steps);
    }

    for (const [key, steps] of cases) {
      expect(steps, `caso ${key}`).toEqual(steps.map((_, index) => index + 1));
    }
  });

  it("todos los proyectos de gestión pertenecen a un caso", () => {
    const missing = projects
      .filter((project) => project.area === "pm" && project.step !== undefined)
      .filter((project) => project.caseId === undefined)
      .map((project) => project.id);

    expect(missing).toEqual([]);
  });

  it("no hay ids repetidos", () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
