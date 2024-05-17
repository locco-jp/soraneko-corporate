import {Inter} from 'next/font/google';
import './globals.css';
import TypekitLoader from './_utils/TypekitLoader';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'soraneko',
  description: 'Generated by create next app',
};

export default function RootLayout({children}) {
  return (
    <html lang="ja">
      <TypekitLoader />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
