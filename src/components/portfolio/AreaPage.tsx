import type { ReactNode } from "react";

import { groupProjects, projectsByArea, type AreaId, type Project } from "@/data/portfolio";

import { ProjectCard } from "./ProjectCard";
import { AreaSwitcher, Eyebrow, PageHeader, SectionTitle } from "./ui";

export type AreaPageCase = {
  caseId: string;
  eyebrow: string;
  title: string;
  accent?: string | undefined;
  description?: string | undefined;
  intro?: ReactNode;
};

function ProjectGrid({ items, grouped }: { items: Project[]; grouped: boolean }) {
  const groups = grouped ? groupProjects(items) : [{ group: "", items }];

  return (
    <>
      {groups.map(({ group, items: groupItems }) => (
        <section key={group || "all"}>
          {group && <SectionTitle count={groupItems.length}>{group}</SectionTitle>}
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {groupItems.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function CaseBlock({
  pageCase,
  items,
  grouped,
}: {
  pageCase: AreaPageCase;
  items: Project[];
  grouped: boolean;
}) {
  return (
    <section
      id={pageCase.caseId}
      className="scroll-mt-24 border-t border-glass-border pt-10 first:border-t-0 first:pt-0"
    >
      <header className="max-w-3xl">
        <Eyebrow>{pageCase.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
          {pageCase.title}
          {pageCase.accent && (
            <>
              {" "}
              <span className="font-serif font-normal italic text-primary">{pageCase.accent}</span>
            </>
          )}
        </h2>
        {pageCase.description && (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {pageCase.description}
          </p>
        )}
      </header>
      {pageCase.intro && <div className="mt-6">{pageCase.intro}</div>}
      <div className="mt-8 space-y-8">
        <ProjectGrid items={items} grouped={grouped} />
      </div>
    </section>
  );
}

export function AreaPage({
  area,
  eyebrow,
  title,
  accent,
  description,
  intro,
  grouped = true,
  cases,
}: {
  area: AreaId;
  eyebrow: string;
  title: string;
  accent?: string | undefined;
  description: string;
  intro?: ReactNode;
  grouped?: boolean;
  /** Si se indica, la página se divide en un bloque por caso integral. */
  cases?: AreaPageCase[];
}) {
  const list = projectsByArea(area);

  if (cases && cases.length > 0) {
    return (
      <div className="space-y-10">
        <AreaSwitcher current={area} />
        <PageHeader eyebrow={eyebrow} title={title} accent={accent} description={description} />
        {intro}
        <div className="space-y-12">
          {cases.map((pageCase) => (
            <CaseBlock
              key={pageCase.caseId}
              pageCase={pageCase}
              items={list.filter((project) => project.caseId === pageCase.caseId)}
              grouped={grouped}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <AreaSwitcher current={area} />
      <PageHeader eyebrow={eyebrow} title={title} accent={accent} description={description} />
      {intro}
      <ProjectGrid items={list} grouped={grouped} />
    </div>
  );
}
