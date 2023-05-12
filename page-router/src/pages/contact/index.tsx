import { Links } from '@/components/Links';
import { getLinks } from '@/lib/links';
import { GetStaticProps } from 'next';

type Props = {
  links: {
    title: string;
    url: string;
  }[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const links = await getLinks();

  return {
    props: {
      links,
    },
  };
};

export default function Contact({ links }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-20">Contact Page</h1>
      <Links links={links} />
    </div>
  );
}
