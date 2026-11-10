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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
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
      { title: "Gimena Gauna · QA, Project Management y Análisis Funcional" },
      {
        name: "description",
        content:
          "Portafolio de Gimena Gauna: Técnica en Programación (UTN), QA Engineer, Project Manager y Analista Funcional.",
      },
      { name: "author", content: "Gimena Gauna" },
      { property: "og:title", content: "Gimena Gauna · Portafolio" },
      {
        property: "og:description",
        content: "QA & Testing, Project Management y Análisis Funcional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0f1c21" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap",
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
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 glass-strong border-x-0 border-t-0 lg:hidden">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary font-serif text-lg italic text-primary-foreground">
              GG
            </span>
            <span className="truncate font-bold">Gimena Gauna</span>
          </Link>
          <Link
            to="/contacto"
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground"
          >
            Contacto
          </Link>
        </header>

        <div className="mx-auto w-full max-w-[1440px] px-4 pb-32 pt-6 sm:px-6 lg:grid lg:grid-cols-[64px_minmax(0,320px)_minmax(0,1fr)] lg:gap-6 lg:px-8 lg:pb-12 lg:pt-10 xl:grid-cols-[64px_360px_minmax(0,1fr)] xl:gap-8">
          <SideNav className="hidden lg:sticky lg:top-10 lg:flex lg:self-start" />
          <aside className="hidden lg:sticky lg:top-10 lg:block lg:self-start">
            <ProfileCard />
          </aside>
          <main className="min-w-0">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
        </div>

        <BottomNav className="lg:hidden" />
      </div>
    </QueryClientProvider>
  );
}
