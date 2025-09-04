'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import './service-detail.css';

const serviceDetails: Record<string, {
  title: string;
  image: string;
  description: string;
  sections?: { subtitle: string; content: string }[];
}> = {
  'videosurveillance': {
    title: '🔒📹 Vidéosurveillance & Sécurité',
    image: '/images/services/camera.jpeg',
    description: 'Mise en place de solutions de sécurité vidéo sur mesure : caméras IP ou analogiques, enregistreurs DVR/NVR, et accès à distance sécurisé.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Étude du site pour déterminer les emplacements stratégiques, choix du matériel selon vos besoins (caméras fixes ou motorisées, stockage, résolution...).'
      },
      {
        subtitle: '🛠️ Installation & Configuration',
        content: 'Installation physique des caméras et du système d’enregistrement, câblage réseau ou coaxial, tests de connectivité et configuration logicielle.'
      },
      {
        subtitle: '🧑‍🏫 Formation & Mise en service',
        content: 'Mise en route du système et formation à l’utilisation de l’application de gestion vidéo sur PC ou smartphone.'
      },
      {
        subtitle: '🔧 Maintenance & Suivi',
        content: 'Contrôle régulier du bon fonctionnement, nettoyage des caméras, mises à jour des firmwares et assistance technique en cas de problème.'
      }
    ]
  },
  'pointage': {
    title: '🔐🕒 Pointage et Contrôle d’Accès',
    image: '/images/services/pointage1.jpg',
    description: 'Déploiement de solutions combinées de pointage et de contrôle d’accès aux locaux, basées sur la biométrie, les badges RFID/magnétiques ou les claviers à code, avec un logiciel centralisé pour la gestion des accès et du temps de présence.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Évaluation des besoins en sécurité et en contrôle d’accès : identification des zones sensibles, des flux de personnes, et des règles d’accès à appliquer (plages horaires, droits par type d’utilisateur). Proposition de la technologie adaptée et architecture du système à mettre en place.'
      },
      {
        subtitle: '🛠️ Installation & Configuration',
        content: 'Installation des dispositifs de contrôle (lecteurs biométriques, badgeuses, contrôleurs d’accès, serrures électromagnétiques…), câblage réseau/électrique, connexion aux ouvrants (portes, tourniquets), et paramétrage du logiciel de gestion des accès et du pointage.'
      },
      {
        subtitle: '🧑‍🏫 Formation & Mise en service',
        content: 'Formation des responsables RH ou sécurité à l’enregistrement des utilisateurs, la création des profils d’accès, l’exploitation des rapports de pointage, et l’usage de l’interface web/mobile de supervision.'
      },
      {
        subtitle: '🔧 Maintenance & Suivi',
        content: 'Assistance technique et préventive : vérification périodique du matériel, nettoyage des capteurs, remplacement des supports défectueux (badges, serrures…), mise à jour logicielle, et dépannage en cas d’incident ou de blocage d’accès.'
      },
    ]
  },
  'reseau': {
    title: '🖧 Réseaux Informatiques & VPN Sécurisés  ',
    image: '/images/services/reseau1.jpg',
    description: 'Mise en place d’infrastructures réseau fiables et performantes : réseaux LAN/WAN, connexions Wi-Fi, VPN inter-sites et solutions de sécurité réseau.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Évaluation de l’existant (schéma réseau, bande passante, nombre d’utilisateurs), définition des besoins en connectivité et sécurité, et conception d’une architecture adaptée (LAN, WAN, VPN).'
      },
      {
        subtitle: '✅ Tests & Mise en service',
        content: 'Vérification complète de la connectivité, des performances et de la sécurité. Mise en service des connexions VPN entre sites distants et documentation des configurations.'
      },
      {
        subtitle: '🔧 Maintenance & Suivi',
        content: 'Supervision du réseau, mises à jour des firmwares, maintenance préventive et curative, interventions rapides en cas de panne pour assurer la continuité du service.'
      },
    ]
  },
  'infogerance': {
    title: '🖥️ Infogérance & Support IT Global',
    image: '/images/services/infogerance2.jpg',
    description: 'Mise en place d’infrastructures réseau fiables et performantes : réseaux LAN/WAN, connexions Wi-Fi, VPN inter-sites et solutions de sécurité réseau.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Évaluation des besoins techniques et organisationnels, proposition de contrat d’infogérance adapté (nombre de postes, niveau de service attendu, périmètre couvert). Conseil en évolution du parc et accompagnement dans les projets IT.'
      },
      {
        subtitle: '🛠️ Support & Maintenance',
        content: 'Support utilisateur (helpdesk réactif pour les incidents logiciels et matériels), maintenance préventive et curative des postes de travail, serveurs et périphériques, mises à jour logicielles, correctifs de sécurité, gestion des licences et des comptes.'
      },
      {
        subtitle: '🧑‍💻 Supervision & Sécurité',
        content: 'Surveillance à distance de l’état du système d’information, supervision des serveurs et postes, gestion des antivirus, anti-malwares, pare-feux logiciels, et des sauvegardes automatiques.'
      },
      {
        subtitle: '☁️ Services IT Complémentaires',
        content: 'Déploiement de solutions comme Office 365, migration cloud, installation de téléphonie IP, projets ponctuels sur demande. L’objectif : garantir un système informatique fonctionnel, sécurisé et toujours à jour, sans mobiliser de ressources internes.'
      },
    ]
  },
  'telephonie': {
    title: '📞 Téléphonie IP (VoIP) & Communications Unifiées',
    image: '/images/services/tele2.jpg',
    description: 'Remplacement ou extension de votre téléphonie classique par une solution VoIP moderne : appels de qualité, flexibilité, et fonctionnalités avancées.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Étude des besoins en communication (nombre d’utilisateurs, numérotation interne, renvois, messagerie vocale, conférences…). Recommandation d’architecture adaptée : PABX/IPBX local ou hébergé, postes IP ou softphones.'
      },
      {
        subtitle: '🛠️ Installation & Configuration',
        content: 'Déploiement et configuration des postes IP (fixes ou logiciels), paramétrage des trunks SIP avec l’opérateur, intégration réseau avec gestion QoS et VLAN voix pour garantir une excellente qualité d’appel.'
      },
      {
        subtitle: '📲 Mise en service & Formation',
        content: 'Tests complets des appels entrants/sortants, configuration des fonctionnalités avancées (transfert, renvoi, journal, conférence…), et formation des utilisateurs à l’usage des téléphones et applications VoIP.'
      },
      {
        subtitle: '🔧 Maintenance & Support',
        content: 'Suivi de la qualité de service, modification de configuration en cas de changement d’organisation, support réactif en cas de problème de ligne, d’enregistrement ou de connexion réseau.'
      },
    ]
  },
  'caisse': {
    title: '🛒 Systèmes de Caisse Tactile & Logiciels POS',
    image: '/images/services/caisse1.jpg',
    description: 'Solutions complètes de point de vente pour commerces : terminaux tactiles, périphériques d\'encaissement, logiciels de gestion, installation et support.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Étude de l’activité du client pour recommander un logiciel de caisse adapté (gestion des ventes, TVA, stocks, remises, multi-utilisateurs…). Sélection des équipements (terminal tactile, tiroir-caisse, imprimante tickets, lecteur code-barres, balance…).'
      },
      {
        subtitle: '🛠️ Installation & Configuration',
        content: 'Déploiement des équipements en point de vente, installation et configuration du logiciel de caisse, paramétrage des articles, taux de TVA, utilisateurs et caissiers. Réalisation de tests complets de transaction.'
      },
      {
        subtitle: '🧑‍🏫 Mise en service & Formation',
        content: 'Formation des équipes à l’utilisation de l’interface tactile, aux fonctionnalités de base (ouverture/fermeture de caisse, édition de rapports de ventes…), et vérification de la conformité légale du système de caisse.'
      },
      {
        subtitle: '🔧 Maintenance & Support',
        content: 'Support continu incluant vérification du bon fonctionnement du matériel, mises à jour logicielles, dépannage rapide en cas de panne ou bug pour éviter toute interruption d’activité.'
      },
    ]
  },
  'vente': {
    title: '💻 Matériel Informatique & Installation sur Site',
    image: '/images/services/materiel.jpg',
    description: 'Fourniture, déploiement et configuration de postes informatiques, périphériques et accessoires adaptés aux besoins des entreprises.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Identification des besoins en équipements (bureautique, technique, mobilité…), choix du matériel adéquat : ordinateurs fixes ou portables, écrans, imprimantes, périphériques, onduleurs, câbles, etc.'
      },
      {
        subtitle: '🛠️ Installation & Configuration',
        content: 'Livraison et assemblage du matériel si nécessaire, installation des systèmes d’exploitation et des logiciels de base, connexion au réseau, configuration des imprimantes et périphériques.'
      },
      {
        subtitle: '✅ Mise en service & Vérification',
        content: 'Tests de bon fonctionnement sur chaque poste (connexion réseau, impression, affichage…), validation avec le client des fonctionnalités installées.'
      },
      {
        subtitle: '🔧 Maintenance & Support',
        content: 'Assistance en cas de problème matériel ou logiciel, remplacement rapide des équipements défectueux et mise à jour logicielle sur demande.'
      },
    ]
  },
  'fournitures-bureau': {
    title: '🗂️ Fournitures & Équipement de Bureau',
    image: '/images/services/fourniture.jpeg',
    description: 'Équipement complet pour aménager vos espaces de travail avec du matériel fiable, ergonomique et professionnel.',
    sections: [
      {
        subtitle: '🔍 Analyse & Conseil',
        content: 'Évaluation des besoins en mobilier et fournitures selon la taille de l’entreprise et l’usage quotidien .'
      },
      {
        subtitle: '📦 Fourniture & Livraison',
        content: 'Sélection et approvisionnement de matériel de bureau : papiers, stylos, classeurs, cartouches d’encre, mobilier, accessoires informatiques… Livraison sur site rapide et adaptée.'
      },
      {
        subtitle: '🛠️ Installation & Mise en place',
        content: 'Montage du mobilier, agencement ergonomique des postes de travail, intégration avec les équipements existants.'
      },
      {
        subtitle: '🔧 Support & Suivi',
        content: 'Réapprovisionnement régulier sur demande, remplacement des articles défectueux, conseil pour l’amélioration continue de l’environnement de travail.'
      },
    ]
  },
  'migration': {
    title: '💾 Migration & Déploiement de Logiciels',
    image: '/images/services/migration1.jpg',
    description: 'Accompagnement complet pour l’installation de logiciels métiers et la migration de vos données et systèmes, en toute sécurité et sans interruption.',
    sections: [
      {
        subtitle: '🔍 Analyse & Préparation',
        content: 'Étude de l’environnement existant, identification des logiciels à migrer ou déployer (ERP, CRM, comptabilité, gestion commerciale, etc.), vérification de la compatibilité matérielle et logicielle, planification du projet de migration.'
      },
      {
        subtitle: '💻 Installation & Déploiement',
        content: 'Installation des logiciels métiers sur les postes de travail ou serveurs, configuration des paramètres selon les besoins métiers, création des utilisateurs, et tests de bon fonctionnement.'
      },
      {
        subtitle: '🔁 Migration des Données',
        content: 'Transfert sécurisé des données depuis l’ancien système vers la nouvelle solution (bases de données, fichiers utilisateurs, historiques…), tout en assurant l’intégrité et la confidentialité des informations.'
      },
      {
        subtitle: '🧑‍🏫 Formation & Mise en service',
        content: 'Formation des utilisateurs clés à l’utilisation des nouveaux logiciels, accompagnement au démarrage pour garantir une prise en main fluide et rapide.'
      },
      {
        subtitle: '🔧 Support & Maintenance',
        content: 'Assistance post-déploiement, résolutions des bugs ou incompatibilités, mises à jour et évolution des logiciels selon les besoins futurs de l’entreprise.'
      },
    ]
  },
  'crm-erp': {
    title: '🧩 Conseil & Intégration de solutions CRM / ERP',
    image: '/images/services/erpcrm2.jpg',
    description: 'Accompagnement complet dans le choix, l’installation et l’adaptation de solutions de gestion d’entreprise (CRM & ERP), pour optimiser vos processus internes et améliorer votre pilotage.',
    sections: [
      {
        subtitle: '🔍 Audit & Recommandation',
        content: 'Analyse des processus métiers existants (vente, marketing, gestion des stocks, production, etc.) pour identifier les besoins fonctionnels, puis conseil sur la solution la plus adaptée (Salesforce, Zoho, HubSpot, Odoo, Dolibarr, Sage).'
      },
      {
        subtitle: '⚙️ Déploiement & Personnalisation',
        content: 'Installation de la solution retenue (en local ou cloud), paramétrage des modules nécessaires, personnalisation des formulaires, importation des données existantes et développement de connecteurs ou de fonctionnalités spécifiques.'
      },
      {
        subtitle: '🧪 Tests & Validation',
        content: 'Mise en œuvre d’une phase de recette fonctionnelle avec les utilisateurs clés pour valider le bon fonctionnement de la solution, ajustements finaux avant mise en production.'
      },
      {
        subtitle: '🧑‍🏫 Formation & Support',
        content: 'Formation des utilisateurs à l’utilisation du CRM/ERP (navigation, création de fiches, rapports, workflows...), puis accompagnement post-déploiement avec assistance, évolutions et support technique.'
      },
      {
        subtitle: '🔧 Support & Maintenance',
        content: 'Assistance post-déploiement, résolutions des bugs ou incompatibilités, mises à jour et évolution des logiciels selon les besoins futurs de l’entreprise.'
      },
    ]
  },
  'formation': {
    title: '🎓 Formation des utilisateurs',
    image: '/images/services/formation.jpg',
    description: 'Sensibilisation et accompagnement des utilisateurs finaux pour une prise en main efficace des solutions déployées.',
    sections: [
      {
        subtitle: '🧑‍🏫 Sessions de formation ciblées',
        content: 'Organisation d’ateliers pratiques, démonstrations ou présentations adaptées au public (employés, RH, commerciaux...) pour leur apprendre à utiliser le nouveau système dans leur quotidien.'
      },
      {
        subtitle: '📘 Contenu pédagogique personnalisé',
        content: 'Explication des fonctionnalités clés, des procédures à suivre et des bonnes pratiques à adopter (ex. : ajout d’un employé dans un système de pointage, suivi d’une opportunité dans un CRM...).'
      },
      {
        subtitle: '🧾 Supports utilisateurs',
        content: 'Remise de documents clairs et accessibles : guides, fiches mémo, tutoriels vidéo si nécessaire pour favoriser l’autonomie des utilisateurs.'
      },
      {
        subtitle: '🤝 Accompagnement post-formation',
        content: 'Présence sur site ou disponibilité à distance pendant les premiers jours d’utilisation réelle pour répondre aux questions, rassurer les utilisateurs et ajuster les derniers paramètres selon leurs retours.'
      },
    ]
  },
  'cloud': {
    title: '☁️ Solutions Cloud',
    image: '/images/services/cloud2.jpeg',
    description: 'Mise en place de services cloud adaptés aux besoins spécifiques de votre entreprise pour un accès sécurisé, flexible et évolutif à vos données et applications professionnelles.',
    sections: [
      {
        subtitle: '🔍 Analyse des besoins & Conseil',
        content: "Nous commençons par analyser votre infrastructure IT actuelle et vos besoins spécifiques en matière de stockage, gestion des données, et accès à distance. En fonction de vos exigences, nous vous conseillons sur les solutions cloud les plus adaptées, qu'il s'agisse de cloud privé, public ou hybride (par exemple, Microsoft Azure, Google Cloud, AWS, etc.)"
      },
      {
        subtitle: '☁️ Déploiement et Migration vers le Cloud',
        content: 'Nous déployons des solutions cloud sur mesure pour optimiser vos opérations. Cela inclut la migration sécurisée de vos données existantes vers le cloud, la configuration des services (messagerie, stockage, applications métier, sauvegarde), ainsi que l’intégration des systèmes existants avec les nouvelles solutions. Nous assurons une transition fluide, minimisant les perturbations.'
      },
      {
        subtitle: '🛡️ Sécurité et Gestion des Accès',
        content: 'Nous mettons en place des solutions de sécurité adaptées : chiffrement des données, gestion des accès (authentification multi-facteurs, permissions, etc.), et surveillance continue de l’infrastructure cloud pour prévenir toute menace. Nous assurons également la conformité avec les normes locales et internationales en matière de sécurité des données.'
      },
      {
        subtitle: '🔧 Maintenance et Suivi Proactif',
        content: 'Nous proposons un suivi permanent pour garantir le bon fonctionnement de vos solutions cloud. Cela inclut des mises à jour régulières des systèmes, des sauvegardes automatiques, et un support réactif en cas de problème. Nous ajustons également les configurations en fonction de l’évolution de vos besoins, vous permettant ainsi de scaler facilement vos services cloud.'
      },
    ]
  },
  'developpement': {
    title: '🌐 Développement sur Mesure',
    image: '/images/services/dev1.jpg',
    description: 'Création de sites web personnalisés, parfaitement adaptés à vos besoins spécifiques, avec hébergement sécurisé et évolutif pour garantir des performances optimales.',
    sections: [
      {
        subtitle: '🔍 Analyse des besoins & Conseil',
        content: "Nous commençons par une étude approfondie de vos objectifs, de votre audience cible et de vos attentes spécifiques pour le site web. Cette analyse nous permet de définir une stratégie de développement claire et un cahier des charges détaillé, pour un projet qui répond précisément à vos besoins."
      },
      {
        subtitle: '💻 Conception et Développement',
        content: 'Nos développeurs créent des sites web sur mesure en utilisant des technologies modernes et performantes, adaptées à vos exigences.Nous proposons des solutions sur mesure en utilisant des frameworks comme React, Next.js, WordPress, ou d’autres outils en fonction des spécifications du projet.'
      },
      {
        subtitle: '🌍 Hébergement & Gestion de Domaine',
        content: 'Nous offrons des services d’hébergement sécurisés et optimisés pour garantir des performances maximales. En fonction de vos besoins, nous proposons des solutions d’hébergement dédiées, mutualisées, ou dans le cloud. De plus, nous gérons l’enregistrement et la configuration de votre domaine pour que vous n’ayez à vous soucier de rien.'
      },
      {
        subtitle: '🛠️ Maintenance et Mises à Jour',
        content: 'Une fois votre site mis en ligne, nous assurons un suivi régulier pour garantir son bon fonctionnement. Cela comprend des mises à jour de sécurité, l’ajout de nouvelles fonctionnalités, et la correction de bugs éventuels. Nous vous fournissons aussi un support technique pour toute question ou besoin d’ajustement.'
      },
      
      {
        subtitle: '📈 Optimisation SEO et Performance',
        content: 'Afin de maximiser la visibilité de votre site web, nous intégrons les meilleures pratiques SEO dès la phase de développement. De plus, nous optimisons les performances du site (temps de chargement, responsive design, expérience utilisateur) pour offrir une navigation fluide sur tous les appareils.'
      },
      
      {
        subtitle: '👩‍🏫 Formation & Accompagnement',
        content: 'Nous offrons des formations à vos équipes pour les familiariser avec l’administration et la gestion du contenu de leur site via des CMS ou des outils personnalisés. Un accompagnement est également assuré lors de la prise en main du site, pour garantir son utilisation optimale.'
      },
    ]
  },
};


export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ déstructuration correcte
  const service = serviceDetails[id];

  if (!service) return notFound();

  return (
    <main className="service-detail-section">
      <div className="container">
        <div className="content-section">
          <div className="row">
            <div className="col-md-6 service-image-column">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="service-image"
              />
              <div className="service-sidebar">
                <h3>Besoin d&apos;aide ?</h3>
                <p>Contacte-nous pour plus d&apos;informations sur ce service.</p>
                <Link href="/contact" className="btn-contact">Contactez-nous</Link>
              </div>
            </div>

            <div className="col-md-6 service-description">
              <h1>{service.title}</h1>
              <p className="main-description">{service.description}</p>

              <div className="animated-line"></div>
              <h3 className="section-title">Détails du service</h3>

              {service.sections?.map((section, index) => (
                <div key={index} className="service-section">
                  <h4>{section.subtitle}</h4>
                  <p>{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animated-line animated-line"></div>

          <div className="associated-products">
            <h2>Produits associés</h2>
            <div className="product-row">
              <div className="product-item">
                <Image src="/images/produits/camera-ip.jpg" alt="Caméra IP" width={300} height={200} />
                <h3>Caméra IP Full HD</h3>
                <p>Caméra réseau avec vision nocturne, détection de mouvement et enregistrement cloud.</p>
              </div>
              <div className="product-item">
                <Image src="/images/produits/nvr.jpg" alt="Enregistreur NVR" width={300} height={200} />
                <h3>Enregistreur NVR 8 canaux</h3>
                <p>Solution de stockage pour caméras IP, compatible avec visualisation à distance.</p>
              </div>
            </div>

            <div className="product-button-container">
              <Link href="/produits" className="btn-products">Voir tous les produits</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
