import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProviders from '@/redux/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dusdusan',
  description:
    'Platform Komunitas Bisnis Reseller Dropship Online, Supplier Grosir, serta belajar banyak hal positif yang dapat meningkatkan bisnis Anda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          {children}
        </ReduxProviders>
      </body>
    </html>
  );
}
