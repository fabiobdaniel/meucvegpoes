// Redireciona fabiobdaniel.com e www.fabiobdaniel.com para www.awakenyourhero.com.br
// Usa página HTML para todos os navegadores (funciona no Safari e não depende do redirect do painel Vercel)
const REDIRECT_TO = 'https://www.awakenyourhero.com.br';

function isRedirectHost(hostname) {
  const h = (hostname || '').toLowerCase().replace(/\.$/, '').split(':')[0];
  return h === 'fabiobdaniel.com' || h === 'www.fabiobdaniel.com';
}

export default function middleware(request) {
  const url = new URL(request.url);
  const hostname = url.hostname || (request.headers.get('host') || '').split(':')[0];
  if (!isRedirectHost(hostname)) return undefined;

  const path = url.pathname + url.search;
  const target = path === '/' ? REDIRECT_TO : REDIRECT_TO + path;

  // Página HTML que redireciona (meta refresh + JS) — funciona em todos os navegadores, incluindo Safari
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><script>window.location.replace(${JSON.stringify(target)});</script></head><body><p>Redirecionando… <a href="${target}">Clique aqui</a>.</p></body></html>`;
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}

export const config = {
  matcher: ['/', '/:path*'],
};
