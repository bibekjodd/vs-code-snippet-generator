import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VsCode Snippet Generator',
  description: 'vscode snippet generator by @bibekjodd'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800`}>
        <Toaster duration={5000} closeButton richColors theme="dark" />
        {children}
      </body>
    </html>
  );
}
