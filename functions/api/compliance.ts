export const onRequestGet: PagesFunction = async (context) => {
  const { request, env } = context;
  const res = await fetch('https://api.compliance-partner.com/check', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${env.COMPLIANCE_API_KEY}`,
    },
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
