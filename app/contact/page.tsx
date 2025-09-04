'use client';

import React from 'react';
import './contact.css';
import Image from 'next/image';
import ZohoContactFormEmbed from '@/app/components/ZohoContactFormEmbed';

export default function ContactPage() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Formulaire à gauche */}
        <div className="contact-form card">
          <h2>Envoyez-nous un message</h2>
          <ZohoContactFormEmbed />
        </div>

        {/* Image + Infos pratiques à droite */}
        <div className="contact-info-simple">
          <Image
            width={500}
            height={300}
            src="/images/contact/bgcontactt.png"
            alt="QICT Building"
            className="contact-image"
          />

          <h2>Informations pratiques</h2>
          <p><strong>Adresse :</strong> 123 Rue QICT, Casablanca, Maroc</p>
          <p><strong>Email :</strong> contact@qict.ma</p>
          <p><strong>Téléphone :</strong> +212 522-327680 / +212 681-677719</p>
          <p><strong>Heures d&apos;ouverture :</strong> Lun - Ven : 8h30 - 18h00</p>
        </div>
      </div>
    </section>
  );
}
