// Redireciona fabiobdaniel.com e www.fabiobdaniel.com para awakenyourhero.com.br
const REDIRECT_HOSTS = ['fabiobdaniel.com', 'www.fabiobdaniel.com'];
const REDIRECT_TO = 'https://awakenyourhero.com.br';

export default function middleware(request) {
  const url = new URL(request.url);
  const hostname = (url.hostname || request.headers.get('host') || '').toLowerCase().split(':')[0];
  if (REDIRECT_HOSTS.includes(hostname)) {
    const path = url.pathname + url.search;
    const target = path === '/' ? REDIRECT_TO : REDIRECT_TO + path;
    return new Response(null, {
      status: 301,
      headers: {
        Location: target,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }
  return undefined;
}

export const config = {
  matcher: ['/', '/:path*'],
};
