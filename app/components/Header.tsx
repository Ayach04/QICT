'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span>Email: contact@qict.ma</span>
            <span>Tél: +212 522-327680 / +212 681-677719</span>
            <span>Heures: Lun - Ven: 8h30 - 18h00</span>
          </div>
          <div className="social_icon">
            <ul className="list-inline">
              <li>
                <a className="fa fa-facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li>
                <a className="fa fa-twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li>
                <a className="fa fa-linkedin" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li>
                <a className="fa fa-instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="main-nav">
        <div className="container">
          <div className="logo-section">
            <Link href="/" className="logo">
              <Image
                src="/images/logos/logo.png"
                alt="Logo QICT"
                width={100}
                height={100}
                className="logo-image"
              />
            </Link>
            <Link href="/rendez-vous">
              <button className="btn-rdv">Prendre un rendez-vous</button>
            </Link>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/produits">Produits</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
