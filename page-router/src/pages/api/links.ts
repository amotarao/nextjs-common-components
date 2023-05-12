import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  links: {
    title: string;
    url: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    links: [
      { title: 'TOP', url: '/' },
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
    ],
  });
}
