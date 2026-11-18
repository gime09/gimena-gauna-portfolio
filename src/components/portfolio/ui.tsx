import { Link } from "@tanstack/react-router";
import type { MouseEvent, ReactNode } from "react";

import { areas, type AreaId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Sets --mx/--my so the .spotlight glow follows the pointer. */
export function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function GlassCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      onMouseMove={interactive ? trackSpotlight : undefined}
      className={cn("rounded-2xl glass p-6", interactive && "spotlight", className)}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/90">
      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string | undefined;
  description?: string | undefined;
}) {
  return (
    <header className="animate-rise">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
        {title}{" "}
        {accent && <span className="font-serif font-normal italic text-primary">{accent}</span>}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}

export function AreaSwitcher({ current }: { current: AreaId }) {
  return (
    <nav
      aria-label="Áreas del portafolio"
      className="inline-flex w-full gap-1 overflow-x-auto rounded-full glass p-1 sm:w-auto"
    >
      {areas.map((a) => (
        <Link
          key={a.id}
          to={a.to}
          aria-current={a.id === current ? "page" : undefined}
          className={cn(
            "flex-1 whitespace-nowrap rounded-full px-4 py-2 text-center text-sm font-semibold transition-colors sm:flex-none",
            a.id === current
              ? "btn-iridescent text-brand-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {a.label}
        </Link>
      ))}
    </nav>
  );
}

export function SectionTitle({ children, count }: { children: ReactNode; count?: number }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
      {count !== undefined && (
        <span className="rounded-full border border-glass-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
          {count}
        </span>
      )}
    </div>
  );
}
