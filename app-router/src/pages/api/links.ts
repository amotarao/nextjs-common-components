import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  links: {
    title: string;
    url: string;
  }[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('api is called.');

  const url = 'https://gq9fphyxxi.microcms.io/api/v1/links';
  const resp = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': 'rkoCJHZyH9Qd8GL9AI82j1LQSjZk0jr9lRf5',
    },
  });
  const data = (await resp.json()) as Data;

  res.status(200).json(data);
}
