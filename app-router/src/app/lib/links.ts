export const getLinks = async (requestInit?: RequestInit) => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/links`
    : `http://localhost:3000/api/links`;
  const res = await fetch(url, requestInit);
  const data = await res.json();

  return data.links as {
    title: string;
    url: string;
  }[];
};
