import type { ReactNode } from "react";

import { groupProjects, projectsByArea, type AreaId } from "@/data/portfolio";

import { ProjectCard } from "./ProjectCard";
import { AreaSwitcher, PageHeader, SectionTitle } from "./ui";

export function AreaPage({
  area,
  eyebrow,
  title,
  accent,
  description,
  intro,
  grouped = true,
}: {
  area: AreaId;
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  intro?: ReactNode;
  grouped?: boolean;
}) {
  const list = projectsByArea(area);
  const groups = grouped ? groupProjects(list) : [{ group: "", items: list }];

  return (
    <div className="space-y-10">
      <AreaSwitcher current={area} />
      <PageHeader eyebrow={eyebrow} title={title} accent={accent} description={description} />
      {intro}
      {groups.map(({ group, items }) => (
        <section key={group || "all"}>
          {group && <SectionTitle count={items.length}>{group}</SectionTitle>}
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {items.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
