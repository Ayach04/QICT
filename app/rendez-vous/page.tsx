'use client';

import React from 'react';
import './rendezvous.css';

export default function RendezVousPage() {
  return (
    <section className="rendezvous-section">
      <div className="rendezvous-container">
        {/* FORMULAIRE ZOHO INTÉGRÉ */}
        <div className="rendezvous-left">
          <h1 className="rendezvous-title">Prendre un Rendez-vous</h1>

          <div className="rendezvous-form">
            <div dangerouslySetInnerHTML={{ __html: `
              <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <meta http-equiv='content-type' content='text/html;charset=UTF-8'>
                <form id='webform6794840000000569051' action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads6794840000000569051' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory6794840000000569051()' accept-charset='UTF-8'>
                  <input type='text' style='display:none;' name='xnQsjsdp' value='66d0376d6341cb7a9073d60f163a859186790d4afbf454fbffcd4b7fc36e6563'>
                  <input type='hidden' name='zc_gad' id='zc_gad' value=''>
                  <input type='text' style='display:none;' name='xmIwtLD' value='c09206f670f3ac5d9d26ce9583df70d8b919b1866d3e0714d4ccb099fa385db10bd704a38e9293e44db5fdc512a4025f'>
                  <input type='text' style='display:none;' name='actionType' value='TGVhZHM='>
                  <input type='text' style='display:none;' name='returnURL' value='https://qict.ma/merci'>

                  <div class='zcwf_row'><label for='Last_Name'>Nom Complet<span style='color:red;'>*</span></label><input type='text' id='Last_Name' name='Last Name' maxlength='80'></div>
                  <div class='zcwf_row'><label for='Email'>E-mail<span style='color:red;'>*</span></label><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></div>
                  <div class='zcwf_row'><label for='Phone'>Téléphone<span style='color:red;'>*</span></label><input type='text' id='Phone' name='Phone' maxlength='30'></div>
                  <div class='zcwf_row'><label for='City'>Service souhaité<span style='color:red;'>*</span></label>
                    <select id='City' name='City' required>
                      <option value=''>-- Choisissez un service --</option>
                      <option value='videosurveillance'>Vidéosurveillance et Sécurité</option>
                      <option value='reseau'>Installation réseau</option>
                      <option value='crm-erp'>Conseil et Implémentation CRM/ERP</option>
                      <option value='formation'>Formation et Accompagnement</option>
                      <option value='cloud'>Solutions cloud</option>
                      <option value='pointage'>Pointage et Contrôle d’Accès</option>
                      <option value='migration'>Migration et Déploiement Logiciels</option>
                      <option value='infogérance'>Infogérance</option>
                      <option value='téléphonie'>Téléphonie IP (VoIP)</option>
                      <option value='dev'>Développement sur Mesure</option>
                      <option value='vente'>Équipements IT & Électronique</option>
                      <option value='caisse'>Caisses enregistreuses & logiciels POS</option>
                      <option value='fourniture'>Fournitures de Bureau</option>
                    </select>
                  </div>

                  <div class='zcwf_row'><label for='Date'>Date<span style='color:red;'>*</span></label><input type='date' id='Date' name='Date' required></div>
                  <div class='zcwf_row'><label for='State'>Heure<span style='color:red;'>*</span></label><input type='time' id='State' name='State' required></div>
                  
                  <div class='zcwf_row'>
                    <label for='Description'>Message<span style='color:red;'>*</span></label>
                    <textarea id='Description' name='Description' maxlength='1000' rows='6' style='width: 100%;'></textarea>
                  </div>

                  <div class='zcwf_row'>
                    <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Envoyer la demande'>
                  </div>
                </form>
              </div>
            `}} />
          </div>
        </div>
      </div>
    </section>
  );
}
