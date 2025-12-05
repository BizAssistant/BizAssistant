export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const key = `uploads/${file.name}`;

  await env.BIZASSIST_R2.put(key, file.stream());
  return new Response(JSON.stringify({ key }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
