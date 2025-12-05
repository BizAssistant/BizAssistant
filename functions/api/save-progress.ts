export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;
  const body = await request.json();

  // Save progress to D1, KV, or R2
  await env.BIZASSIST_R2.put('progress.json', JSON.stringify(body));
  return new Response('Progress saved', {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
