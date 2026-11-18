export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>No pudimos cargar esta página</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 16px/1.6 system-ui, -apple-system, sans-serif; background: #0b0a10; color: #f5f3fa; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 30rem; width: 100%; text-align: center; padding: 2.5rem; border: 1px solid rgba(214,176,255,.2); border-radius: 1.5rem; background: rgba(43,27,74,.45); }
      h1 { font-size: 1.5rem; margin: 0 0 0.5rem; }
      p { color: #c9c1d9; margin: 0 0 1.75rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1.25rem; border-radius: 9999px; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #e879f9; color: #21101f; }
      .secondary { background: transparent; color: #f5f3fa; border-color: rgba(214,176,255,.35); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>No pudimos cargar esta página</h1>
      <p>Algo falló de nuestro lado. Podés reintentar o volver al inicio.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Reintentar</button>
        <a class="secondary" href="/">Ir al inicio</a>
      </div>
    </div>
  </body>
</html>`;
}
