'use client';

import Link from 'next/link';
import './Services.css';
import React from 'react';
import Image from 'next/image';

const services = [
    {
      id: 'videosurveillance',
      image: '/images/services/surveillance1.jpg',
      title: 'Vidéosurveillance et Sécurité',
      shortDescription: 'Nous installons des systèmes de vidéosurveillance intelligents adaptés à tous types d’environnements. Caméras IP ou analogiques, enregistrement sécurisé, alertes en temps réel. Surveillance à distance via smartphone ou PC. Idéal pour protéger vos locaux 24h/24.',
    },
    {
      id: 'pointage',
      image: '/images/services/pointage.png',
      title: 'Pointage et Contrôle d’Accès',
      shortDescription: 'Solutions modernes pour la gestion des présences et la sécurité des accès. Pointeuses biométriques ou à badge, rapports automatisés, contrôle par zone. Adapté aux PME comme aux grandes structures. Gestion centralisée avec interface intuitive.',
    },
    {
      id: 'reseau',
      image: '/images/services/network.jpg',
      title: 'Installation Réseau',
      shortDescription: 'Conception et déploiement de réseaux filaires et Wi-Fi performants. Installation de baies de brassage, câblage structuré, switchs et routeurs. Sécurité réseau intégrée avec segmentation et firewall. Surveillance et maintenance assurées.',
    },
    {
      id: 'migration',
      image: '/images/services/migration.jpg',
      title: 'Migration et Déploiement Logiciels',
      shortDescription: 'Accompagnement complet pour la migration de vos outils métiers vers des solutions modernes. Déploiement de logiciels, transfert de données sécurisé, tests et validation. Adaptation à vos processus internes et réduction des interruptions de service.',
    },
    {
      id: 'formation',
      image: '/images/services/formation.jpg',
      title: 'Formation et Accompagnement',
      shortDescription: 'Sessions de formation sur site ou à distance pour vos équipes. Apprentissage des outils bureautiques, logiciels métiers, sécurité IT. Supports pédagogiques inclus. Suivi post-formation pour assurer la bonne prise en main.'
    },
    {
      id: 'crm-erp',
      image: '/images/services/erpcrm2.jpg',
      title: 'Conseil et Implémentation CRM/ERP',
      shortDescription: 'Mise en place de solutions CRM/ERP comme Salesforce, Zoho, HubSpot, Odoo, Dolibarr et Sage. Analyse de vos flux métiers, configuration sur mesure, intégration aux systèmes existants. Formation des utilisateurs et accompagnement à long terme.'
    },
    {
      id: 'infogerance',
      image: '/images/services/infogerance1.jpg',
      title: 'Infogérance',
      shortDescription: 'Supervision et gestion complète de votre infrastructure IT. Mises à jour, sauvegardes, support technique, sécurité réseau. Intervention proactive en cas d’incident. Vous vous concentrez sur votre métier, on s’occupe de votre système.'
    },
    {
      id: 'telephonie',
      image: '/images/services/telephonie.jpg',
      title: 'Téléphonie IP (VoIP)',
      shortDescription: 'Installation de standards téléphoniques IPBX modernes. Appels illimités, gestion d’extensions, répondeur intelligent. Intégration possible avec CRM. Qualité sonore HD et communication unifiée sur mobile ou PC.',
    },
    {
      id: 'cloud',
      image: '/images/services/cloud2.jpeg',
      title: 'Solutions Cloud',
      shortDescription: 'Hébergement sécurisé de vos données et applications. Accès distant sécurisé, sauvegarde automatique, haute disponibilité. Solutions Microsoft 365, Google Workspace ou sur serveur privé. Réduction des coûts et flexibilité maximale.',
    },
    {
      id: 'developpement',
      image: '/images/services/dev1.jpg',
      title: 'Développement sur Mesure',
      shortDescription: 'Conception de sites web. Solutions développées selon vos besoins spécifiques. Design responsive, sécurité intégrée et maintenance continue. Livraison clé en main.',
    },
    {
      id: 'vente',
      image: '/images/services/vente1.png',
      title: 'Équipements IT & Électronique',
      shortDescription: 'Fourniture de matériel informatique professionnel : ordinateurs, imprimantes, périphériques réseau. Produits sélectionnés pour leur fiabilité. Configuration et installation sur site.',
    },
    {
      id: 'caisse',
      image: '/images/services/caisse.jpg',
      title: 'Caisses enregistreuses & logiciels POS',
      shortDescription: 'Systèmes de caisse tactiles adaptés aux commerces et restaurants. Logiciels de gestion des ventes, stocks, fidélité client. Interfaces intuitives, connectivité cloud, compatibilité ticket CB. Déploiement rapide et assistance.',
    },
    {
      id: 'fournitures-bureau',
      image: '/images/services/bur1.png',
      title: 'Fournitures de Bureau',
      shortDescription: 'Large choix de matériel de bureau : imprimantes, mobilier, fournitures diverses. Qualité professionnelle,. Offres personnalisées selon vos besoins pour un environnement de travail bien équipé et productif.',
    },
  ];

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container text-center">
          <h1 className="services-title">Nos Services</h1>
          <p className="services-subtitle">Découvrez nos solutions innovantes pour sécuriser, moderniser et digitaliser votre entreprise.</p>
        </div>
      </section>

      <section id="services" className="services-zigzag">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`zigzag-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="zigzag-image">
                <Image src={service.image} alt={service.title} width={500} height={300} />
              </div>
              <div className="zigzag-content">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link href={`/services/${service.id}`}>
                  <button className="service-button">Voir le service</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
