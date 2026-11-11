import { Link } from "@tanstack/react-router";
import { Bug, FileSearch, House, Mail, SquareKanban, UserRound, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type NavItem = {
  to: "/" | "/qa" | "/project-management" | "/analisis-funcional" | "/sobre-mi" | "/contacto";
  label: string;
  short: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { to: "/", label: "Inicio", short: "Inicio", icon: House },
  { to: "/qa", label: "QA & Testing", short: "QA", icon: Bug },
  { to: "/project-management", label: "Project Management", short: "PM", icon: SquareKanban },
  { to: "/analisis-funcional", label: "Análisis Funcional", short: "Análisis", icon: FileSearch },
  { to: "/sobre-mi", label: "Sobre mí", short: "Sobre mí", icon: UserRound },
  { to: "/contacto", label: "Contacto", short: "Contacto", icon: Mail },
];

export function SideNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Secciones" className={cn("flex flex-col gap-3", className)}>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeOptions={{ exact: item.to === "/" }}
          className="group relative grid h-16 w-16 place-items-center rounded-2xl glass text-foreground/85 transition-all duration-300 hover:z-50 hover:-translate-y-0.5 hover:text-primary data-[status=active]:border-primary data-[status=active]:bg-[image:var(--gradient-brand)] data-[status=active]:text-brand-foreground data-[status=active]:shadow-[var(--shadow-glow)]"
        >
          <item.icon className="h-6 w-6" strokeWidth={2.2} />
          <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 z-50 -translate-y-1/2 -translate-x-1 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export function BottomNav({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Secciones"
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 rounded-3xl glass-strong px-1.5 py-1.5 shadow-2xl",
        className,
      )}
    >
      <ul className="grid grid-cols-6 gap-1">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="flex flex-col items-center gap-0.5 rounded-2xl py-2 text-muted-foreground transition-colors data-[status=active]:bg-[image:var(--gradient-brand)] data-[status=active]:text-brand-foreground"
            >
              <item.icon className="h-5 w-5" strokeWidth={2.2} />
              <span className="max-w-full truncate px-0.5 text-[10px] font-semibold leading-tight">
                {item.short}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
