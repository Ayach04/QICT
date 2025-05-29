'use client';

import { notFound } from 'next/navigation';

const blogData = {
  'videosurveillance-intelligente': {
    title: 'Vidéosurveillance intelligente pour votre entreprise',
    content: 'Voici comment QICT vous accompagne avec l’IA dans la sécurité...',
  },
  'securiser-reseau-entreprise': {
    title: '5 bonnes pratiques pour sécuriser votre réseau',
    content: 'Sécuriser votre réseau est crucial. Voici nos conseils...',
  },
  'choisir-crm-pme': {
    title: 'Comment choisir le bon CRM pour votre PME',
    content: 'Un CRM bien choisi facilite la gestion client...',
  },
  'externaliser-systeme-it': {
    title: 'Pourquoi externaliser la gestion de votre IT ?',
    content: 'L’infogérance permet à votre entreprise de se concentrer...',
  },
} as const;

type Slug = keyof typeof blogData;

// ✅ Génération des routes statiques
export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

// ✅ Composant page
export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug as Slug];

  if (!post) {
    return notFound();
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
