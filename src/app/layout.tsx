import type { Metadata } from 'next';
import './globals.css';
import ReduxProviders from '@/redux/provider';
import Head from 'next/head';

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
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/neo-sans-pro"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: 'Neo Sans Pro' }}>
        <ReduxProviders>{children}</ReduxProviders>
      </body>
    </html>
  );
}
