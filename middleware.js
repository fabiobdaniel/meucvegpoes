// Redireciona fabiobdaniel.com e www.fabiobdaniel.com para awakenyourhero.com.br
const REDIRECT_HOSTS = ['fabiobdaniel.com', 'www.fabiobdaniel.com'];
const REDIRECT_TO = 'https://awakenyourhero.com.br';

export default function middleware(request) {
  const host = request.headers.get('host') || '';
  if (REDIRECT_HOSTS.includes(host)) {
    const url = new URL(request.url);
    const path = url.pathname + url.search;
    const target = path === '/' ? REDIRECT_TO : REDIRECT_TO + path;
    return new Response(null, {
      status: 301,
      headers: { Location: target },
    });
  }
  return undefined; // deixa a requisição seguir (meucvegpoes.vercel.app, etc.)
}

export const config = {
  matcher: '/:path*',
};
