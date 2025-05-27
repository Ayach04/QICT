'use client';

import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <h1 className="about-title">À propos de QICT</h1>
        <p className="about-intro">
          QICT SARL est une société spécialisée dans l’accompagnement IT des PME/PMI, offrant un éventail de services informatiques destinés à optimiser et sécuriser le système d’information de ses clients, afin de garantir une qualité de service irréprochable et une satisfaction client maximale.
        </p>

        <div className="about-circles">
          <div className="circle">
            <h2>Notre Vision</h2>
            <p>
              Offrir des solutions technologiques fiables et innovantes qui accompagnent nos clients
              vers leur transformation numérique et leur croissance.
            </p>
          </div>

          <div className="circle">
            <h2>Nos Missions</h2>
            <ul>
              <li>Comprendre les besoins métiers de nos clients.</li>
              <li>Assurer des installations professionnelles.</li>
              <li>Former les utilisateurs.</li>
              <li>Assurer un support technique réactif.</li>
            </ul>
          </div>

          <div className="circle">
            <h2>Notre Équipe</h2>
            <p>
              Une équipe dynamique composée d’experts techniques, de chefs de projets et de jeunes talents
              passionnés par l’innovation et le service client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
