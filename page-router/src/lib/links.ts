export const getLinks = async (requestInit?: RequestInit) => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/links`
    : 'http://localhost:3000/api/links';
  const res = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': 'rkoCJHZyH9Qd8GL9AI82j1LQSjZk0jr9lRf5',
      ...requestInit?.headers,
    },
    ...requestInit,
  });
  const data = await res.json();

  return data.links as {
    title: string;
    url: string;
  }[];
};
