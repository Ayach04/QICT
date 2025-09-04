'use client';

import React, { useState } from 'react';
import './rendezvous.css';
import ZohoFormEmbed from '@/app/components/ZohoFormEmbed';

export default function RendezVousPage() {
  const [formStatus, setFormStatus] = useState('');

  return (
    <section className="rendezvous-section">
      <div className="rendezvous-container custom-contact-box">
        <h1 className="rendezvous-title">Envoyez-nous un message</h1>

        <div className="rendezvous-left contact-form-box">
          <div className="rendezvous-form contact-form-content">
            <form 
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads6794840000000569051"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={() => setFormStatus('Demande envoyée avec succès ✅')}
            >
              <input type="hidden" name="xnQsjsdp" value="66d0376d6341cb7a9073d60f163a859186790d4afbf454fbffcd4b7fc36e6563" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="c09206f670f3ac5d9d26ce9583df70d8b919b1866d3e0714d4ccb099fa385db10bd704a38e9293e44db5fdc512a4025f" />
              <input type="hidden" name="actionType" value="TGVhZHM=" />
              <input type="hidden" name="returnURL" value="https://localhost:3000/merci" />

              <label>Nom complet</label>
              <input type="text" name="Last Name" placeholder="Entrez votre nom" required />

              <label>Email</label>
              <input type="email" name="Email" placeholder="exemple@email.com" required />

              <label>Téléphone</label>
              <input type="tel" name="Phone" placeholder="Votre numéro" required />

              <label>Service souhaité</label>
              <select name="service" required>
                <option value="">-- Choisissez un service --</option>
                <option value="videosurveillance">Vidéosurveillance et Sécurité</option>
                <option value="reseau">Installation réseau</option>
                <option value="crm-erp">Conseil et Implémentation CRM/ERP</option>
                <option value="formation">Formation et Accompagnement</option>
                <option value="cloud">Solutions cloud</option>
                <option value="pointage">Pointage et Contrôle d’Accès</option>
                <option value="migration">Migration et Déploiement Logiciels</option>
                <option value="infogérance">Infogérance</option>
                <option value="téléphonie">Téléphonie IP (VoIP)</option>
                <option value="dev">Développement sur Mesure</option>
                <option value="vente">Équipements IT & Électronique</option>
                <option value="caisse">Caisses enregistreuses & logiciels POS</option>
                <option value="fourniture">Fournitures de Bureau</option>
              </select>

              <label>Date</label>
              <input type="date" name="Date" required />

              <label>Heure</label>
              <input type="time" name="State" required />

              <label>Message</label>
              <textarea name="Description" placeholder="Décrivez votre besoin..." rows={4} required></textarea>

              <button type="submit" className="animated-button">Envoyer la demande</button>
            </form>
          </div>

          {formStatus && (
            <div className="popup-success">
              {formStatus}
              <span className="close-btn" onClick={() => setFormStatus('')}>×</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
