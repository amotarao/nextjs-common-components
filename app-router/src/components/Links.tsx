import { getLinks } from '@/app/lib/links';
import Link from 'next/link';

export async function Links() {
  const links = await getLinks({ cache: 'force-cache' });

  return (
    <section className="py-16 grid place-items-center gap-4">
      <h2 className="">Links</h2>
      <ul className="flex gap-4">
        {links.map((link, i) => (
          <li key={i}>
            <Link className="before:content-['・']" href={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
