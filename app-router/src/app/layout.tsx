import { Links } from '@/components/Links';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja-JP">
      <body className={inter.className}>
        <p className="text-center py-4">App Router</p>
        {children}
        {/* https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components */}
        {/* @ts-expect-error Async Server Component */}
        <Links />
      </body>
    </html>
  );
}
