import type { Metadata } from 'next';
import './globals.css';
import ReduxProviders from '@/redux/provider';
import Head from 'next/head';
import Header from '@/components/App/Header';

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
      <body>
        <div className="bg-[#F1F3F4] text-black neo-sans">
          <ReduxProviders>
            <div className="max-w-[480px] w-full min-h-screen bg-white shadow-lg mx-auto">
              <Header />
              {children}
            </div>
          </ReduxProviders>
        </div>
      </body>
    </html>
  );
}
