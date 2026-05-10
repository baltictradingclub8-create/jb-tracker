export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/robbery-state') {
      const res = await fetch('https://api.jbvalues.com/v1/robbery-state');
      const data = await res.json();
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    return env.ASSETS.fetch(request);
  }
}
