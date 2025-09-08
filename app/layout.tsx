import '@/app/globals.css';
 // Chemin correct vers le CSS global
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
        {/* Les polices Google sont déjà dans globals.css, donc inutile ici */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}