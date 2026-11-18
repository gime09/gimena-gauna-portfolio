import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { NoiseBackground } from "@/components/portfolio/NoiseBackground";
import { BottomNav, SideNav } from "@/components/portfolio/nav";
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { profile } from "@/data/portfolio";

function NotFoundComponent() {
  return (
    <div className="animate-rise rounded-3xl glass p-8 text-center sm:p-12">
      <p className="font-serif text-6xl italic leading-none text-primary">404</p>
      <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">Esta página no existe</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Puede que el enlace esté mal escrito o que la página se haya movido. Probá desde el inicio.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center justify-center rounded-full btn-iridescent px-6 py-2.5 text-sm font-bold text-brand-foreground"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="animate-rise rounded-3xl glass p-8 text-center sm:p-12">
      <p className="font-serif text-5xl italic leading-none text-primary">Ups</p>
      <h1 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
        No pudimos cargar esta página
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        Algo falló de nuestro lado. Podés reintentar o volver al inicio.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex items-center justify-center rounded-full btn-iridescent px-6 py-2.5 text-sm font-bold text-brand-foreground"
        >
          Reintentar
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-glass-border px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Ir al inicio
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gimena Gauna · QA, Gestión de proyectos y Análisis Funcional" },
      {
        name: "description",
        content:
          "Portafolio de Gimena Gauna: Técnica en Programación (UTN), QA Engineer, Gestión de proyectos y Analista Funcional.",
      },
      { name: "author", content: "Gimena Gauna" },
      { property: "og:title", content: "Gimena Gauna · Portafolio" },
      {
        property: "og:description",
        content: "QA & Testing, Gestión de proyectos y Análisis Funcional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0b0a10" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400..800&family=Instrument+Serif:ital@0;1&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <NoiseBackground />
      <div className="relative min-h-screen">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>

        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 glass-strong border-x-0 border-t-0 lg:hidden">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl btn-iridescent font-serif text-lg italic text-brand-foreground">
              GG
            </span>
            <span className="truncate font-bold">Gimena Gauna</span>
          </Link>
          <Link
            to="/contacto"
            className="shrink-0 rounded-full btn-iridescent px-4 py-2 text-xs font-bold text-brand-foreground"
          >
            Contacto
          </Link>
        </header>

        <div className="mx-auto w-full max-w-[1440px] px-4 pb-6 pt-6 sm:px-6 lg:grid lg:grid-cols-[64px_minmax(0,320px)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:pb-12 lg:pt-10 xl:grid-cols-[64px_360px_minmax(0,1fr)] xl:gap-8">
          <SideNav className="hidden lg:sticky lg:top-10 lg:z-20 lg:flex lg:self-start" />
          <aside className="hidden lg:sticky lg:top-10 lg:block lg:self-start">
            <ProfileCard />
          </aside>
          <main id="contenido" tabIndex={-1} className="min-w-0 outline-none">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
        </div>

        <SiteFooter />

        <BottomNav className="lg:hidden" />
      </div>
    </QueryClientProvider>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-28 pt-2 sm:px-6 lg:px-8 lg:pb-10">
      <div className="flex flex-col gap-3 border-t border-glass-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gimena Gauna · Técnica en Programación (UTN)</p>
        <nav aria-label="Enlaces de contacto" className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            Correo
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            GitHub
          </a>
          <Link
            to="/contacto"
            className="transition-colors hover:text-primary focus-visible:text-primary"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
