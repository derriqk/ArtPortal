import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '@/components/BottomMenu';
import TopMenu from '@/components/TopMenu';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Art Hub',
  description: 'Created to be place of creation and inspiration',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classString = `${inter.className} wrapper`;
  return (
    <html lang="en">
      <body className={classString}>
        <Providers>
          <TopMenu />
          {children}
          <BottomMenu />
        </Providers>
      </body>
    </html>
  );
}
