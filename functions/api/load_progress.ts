export const onRequestGet: PagesFunction = async (context) => {
  const { env } = context;
  const object = await env.BIZASSIST_R2.get('progress.json');

  if (object) {
    return new Response(object.body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response('{}', {
    headers: { 'Content-Type': 'application/json' },
  });
};
