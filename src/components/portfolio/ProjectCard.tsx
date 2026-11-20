import { ArrowUpRight, Check, Github, Paperclip } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { ProjectFiles, ProjectGallery } from "./ProjectMedia";
import { trackSpotlight } from "./ui";

function RepoLink({ href, className }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-glass-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      <Github className="h-3.5 w-3.5" /> Ver en GitHub
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const metrics = project.metrics?.slice(0, 3) ?? [];
  const imageCount = project.images?.length ?? 0;
  const fileCount = project.files?.length ?? 0;
  const mediaSummary = [
    imageCount > 0 ? `${imageCount} ${imageCount === 1 ? "captura" : "capturas"}` : null,
    fileCount > 0 ? `${fileCount} ${fileCount === 1 ? "archivo" : "archivos"}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Dialog>
      <article
        onMouseMove={trackSpotlight}
        className="spotlight group @container flex h-full flex-col rounded-2xl glass p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {project.step !== undefined && (
              <span className="mb-2 inline-block font-serif text-2xl italic leading-none text-primary">
                {String(project.step).padStart(2, "0")}
              </span>
            )}
            <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
          </div>
          <DialogTrigger asChild>
            <button
              aria-label={`Ver detalle de ${project.title}`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground/10 text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </DialogTrigger>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        {metrics.length > 0 && (
          <dl
            className={cn(
              "mt-4 grid gap-2",
              metrics.length === 1
                ? "grid-cols-1"
                : metrics.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-2 @min-[22rem]:grid-cols-3",
            )}
          >
            {metrics.map((m, index) => {
              const spansMobileRow = metrics.length === 3 && index === 2;
              return (
                <div
                  key={m.label}
                  className={cn(
                    "min-w-0 rounded-xl bg-foreground/[0.05] px-2.5 py-2.5 sm:px-3",
                    spansMobileRow && "col-span-2 @min-[22rem]:col-span-1",
                  )}
                >
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <span className="block truncate text-base font-bold text-primary sm:text-lg">
                      {m.value}
                    </span>
                    <span className="block text-pretty text-[11px] leading-snug text-muted-foreground">
                      {m.label}
                    </span>
                  </dd>
                </div>
              );
            })}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-glass-border px-2.5 py-1 text-[11px] font-medium text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        {mediaSummary && (
          <p className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <Paperclip className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>{mediaSummary}</span>
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <DialogTrigger asChild>
            <button className="inline-flex items-center gap-1.5 rounded-full btn-iridescent px-3.5 py-1.5 text-xs font-bold text-brand-foreground transition-transform hover:-translate-y-0.5">
              Ver detalle
            </button>
          </DialogTrigger>
          {project.repo && <RepoLink href={project.repo} />}
        </div>
      </article>

      <ProjectDialogContent project={project} />
    </Dialog>
  );
}

function ProjectDialogContent({ project }: { project: Project }) {
  return (
    <DialogContent className="max-h-[88vh] w-[calc(100%-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl border-glass-border bg-popover/95 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {project.group}
        </p>
        <DialogTitle className="mt-2 pr-6 text-2xl font-bold leading-tight sm:text-3xl">
          {project.title}
        </DialogTitle>
        <DialogDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </DialogDescription>
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-glass-border bg-foreground/[0.04] p-3"
            >
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-xl font-bold text-primary">{m.value}</span>
                <span className="block text-xs text-muted-foreground">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      {project.id === "qa-ai-agents" && <ResultsBar passed={94} failed={17} blocked={6} />}
      {project.id === "pm-effort" && <EffortBars />}

      <div className="space-y-5">
        {project.sections.map((s) => (
          <section key={s.title}>
            <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground/90">
              {s.title}
            </h4>
            <ul className="space-y-2">
              {s.items.map((item) => {
                const isLink = typeof item !== "string";
                return (
                  <li
                    key={isLink ? item.text : item}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {isLink ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {((project.images?.length ?? 0) > 0 || (project.files?.length ?? 0) > 0) && (
        <div className="min-w-0 space-y-5 border-t border-glass-border pt-5">
          {project.images && project.images.length > 0 && (
            <section>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground/90">
                Capturas
              </h4>
              <ProjectGallery images={project.images} title={project.title} />
            </section>
          )}
          {project.files && project.files.length > 0 && (
            <section>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground/90">
                Archivos
              </h4>
              <ProjectFiles files={project.files} />
            </section>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-glass-border px-2.5 py-1 text-xs text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full btn-iridescent px-5 py-2.5 text-sm font-bold text-brand-foreground"
        >
          <Github className="h-4 w-4" /> Abrir repositorio
        </a>
      )}
      {project.siteUrl && (
        <a
          href={project.siteUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-glass-border px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowUpRight className="h-4 w-4" /> {project.siteLabel ?? "Abrir sitio de prueba"}
        </a>
      )}
    </DialogContent>
  );
}

export function ResultsBar({
  passed,
  failed,
  blocked,
}: {
  passed: number;
  failed: number;
  blocked: number;
}) {
  const total = passed + failed + blocked;
  const parts = [
    { label: "Aprobadas", value: passed, className: "bg-success" },
    { label: "Fallidas", value: failed, className: "bg-destructive" },
    { label: "Bloqueadas", value: blocked, className: "bg-warning" },
  ];
  return (
    <div>
      <div className="flex h-3 overflow-hidden rounded-full bg-foreground/10">
        {parts.map((p) => (
          <div
            key={p.label}
            className={p.className}
            style={{ width: `${(p.value / total) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        {parts.map((p) => (
          <span key={p.label} className="inline-flex items-center gap-1.5">
            <span className={cn("h-2 w-2 rounded-full", p.className)} />
            {p.label}: {p.value} ({Math.round((p.value / total) * 100)}%)
          </span>
        ))}
      </div>
    </div>
  );
}

export function EffortBars() {
  const rows = [
    { label: "Planificado", value: 800, className: "bg-chart-2" },
    { label: "Real", value: 912, className: "bg-primary" },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-[88px_minmax(0,1fr)_56px] items-center gap-3 text-xs"
        >
          <span className="text-muted-foreground">{r.label}</span>
          <div className="h-3 overflow-hidden rounded-full bg-foreground/10">
            <div
              className={cn("h-full rounded-full", r.className)}
              style={{ width: `${(r.value / 912) * 100}%` }}
            />
          </div>
          <span className="text-right font-semibold">{r.value} HH</span>
        </div>
      ))}
    </div>
  );
}
