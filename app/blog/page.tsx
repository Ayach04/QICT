'use client';

import Link from 'next/link';
import './blog.css';

type BlogPost = {
  slug: string;
  title: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'videosurveillance-intelligente',
    title: 'Vidéosurveillance intelligente pour votre entreprise',
    image: '/images/blog/1.jpg',
  },
  {
    slug: 'securiser-reseau-entreprise',
    title: '5 bonnes pratiques pour sécuriser votre réseau',
    image: '/images/blog/2.jpg',
  },
  {
    slug: 'choisir-crm-pme',
    title: 'Comment choisir le bon CRM pour votre PME',
    image: '/images/blog/3.jpg',
  },
  {
    slug: 'externaliser-systeme-it',
    title: 'Pourquoi externaliser la gestion de votre IT ?',
    image: '/images/blog/4.jpg',
  },
];

export default function BlogPage() {
  return (
    <section className="blog container">
      <h1>Nos Articles de Blog</h1>
      <div className="cards">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
            <div className="card-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="card-content">
              <h3>{post.title}</h3>
              <div className="arrow">→</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
