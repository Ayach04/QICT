'use client';

import { notFound } from 'next/navigation';

type BlogData = {
  [slug: string]: {
    title: string;
    content: string;
  };
};

const blogData: BlogData = {
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
};

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = blogData[params.slug];

  if (!post) return notFound();

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
