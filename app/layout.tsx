import { Courgette, Libre_Baskerville } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const courgette = Courgette({
  weight: '400',
  variable: '--font-courgette',
  subsets: ['latin'],
});

const libreBaskerville = Libre_Baskerville({
  variable: '--font-libre-baskerville',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Craft Chaos',
  description:
    'A personal gallery of knitting, crochet, embroidery, and craft projects with patterns, materials, and progress tracking.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-linear-to-tr from-lime-600 to-yellow-200 p-4 sm:p-6 md:p-8'>
      <body
        className={`${courgette.variable} ${libreBaskerville.variable} antialiased flex flex-col min-h-screen p-4 sm:p-6 md:p-8 bg-emerald-50 rounded-3xl`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
