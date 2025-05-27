'use client';

import Image from 'next/image';
import React from 'react';
import './ServiceProcess.css';

export default function ServiceProcess() {
  return (
    <section className="service-process">
      <div className="container">
        <div className="section-header">
          <h2>Notre Processus</h2>
          <p>Un parcours simple et efficace pour répondre à vos besoins IT et services numériques.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="icon">
              <Image src="/images/it_service/si7.png" alt="Analyse des besoins" width={60} height={60} />
            </div>
            <h3>Analyse des Besoins</h3>
            <p>Nous analysons vos objectifs et votre environnement pour trouver des solutions adaptées.</p>
          </div>

          <div className="step">
            <div className="icon">
              <Image src="/images/it_service/si8.png" alt="Proposition de solutions" width={60} height={60} />
            </div>
            <h3>Proposition de Solutions</h3>
            <p>Nous concevons une solution personnalisée et optimisée pour répondre à vos attentes.</p>
          </div>

          <div className="step">
            <div className="icon">
              <Image src="/images/it_service/si9.png" alt="Implémentation" width={60} height={60} />
            </div>
            <h3>Implémentation</h3>
            <p>Notre équipe assure une mise en place efficace, rapide et de qualité.</p>
          </div>

          <div className="step">
            <div className="icon">
              <Image src="/images/it_service/si10.png" alt="Suivi & Support" width={60} height={60} />
            </div>
            <h3>Suivi & Support</h3>
            <p>Nous restons à vos côtés pour assurer le bon fonctionnement et l’évolution de votre projet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
