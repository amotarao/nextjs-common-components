export const getLinks = async (requestInit?: RequestInit) => {
  const url = 'https://nextjs-common-components-page-router.vercel.app/api/links';
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
