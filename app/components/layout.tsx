import './globals.css'; // ✅ Assure que le fichier est bien dans app/

import React from 'react';
import Header from './Header'; // ✅ Chemin relatif correct

export const metadata = {
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
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,700,900&display=swap"
          rel="stylesheet"
        />
        {/* Tu peux ajouter d’autres liens de polices ici si besoin */}
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
