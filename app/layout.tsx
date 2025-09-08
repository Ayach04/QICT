import '@/app/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QICT WEB',
  description: 'Mon site Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Meta viewport pour rendre le site responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Les polices Google sont déjà dans globals.css */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
