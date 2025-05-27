'use client';
import React from 'react';
import Image from 'next/image';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Pourquoi Nous Choisir ?</h2>
          <p>QICT optimise vos systèmes et vous accompagne pour booster votre performance grâce à des solutions innovantes.</p>
        </div>

        <div className="cards">
          <div className="card">
            <Image src="/images/it_service/si4.png" alt="Optimisation des coûts" width={80} height={80} />
            <h3>Optimisation des Coûts</h3>
            <p>Réduisez vos dépenses IT en valorisant l&apos;usage et en renégociant avec vos fournisseurs.</p>
          </div>

          <div className="card">
            <Image src="/images/it_service/si3.png" alt="Solutions sur mesure" width={80} height={80} />
            <h3>Solutions sur Mesure</h3>
            <p>Adaptez vos outils informatiques à l&apos;évolution de vos métiers et gagnez en efficacité.</p>
          </div>

          <div className="card">
            <Image src="/images/it_service/si2.png" alt="Sécurité renforcée" width={80} height={80} />
            <h3>Sécurité Renforcée</h3>
            <p>Sécurisez vos données et vos infrastructures avec nos solutions de cybersécurité avancées.</p>
          </div>

          <div className="card">
            <Image src="/images/it_service/si6.png" alt="Support proactif" width={80} height={80} />
            <h3>Support Proactif</h3>
            <p>Nos experts sont toujours disponibles pour assurer la réussite et la stabilité de vos projets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
