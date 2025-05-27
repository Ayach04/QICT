'use client';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>QICT SARL</h4>
          <p>Tissir 2, 13 Av. Abderahim Bouabid<br />Berrechid 21000, Maroc</p>
          <p>Email : <a href="mailto:contact@qict.ma">contact@qict.ma</a></p>
          <p>Téléphone : +212 522-327680 / +212 681-677719</p>
        </div>

        <div className="footer-map">
        <div className="footer-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.689289496854!2d-7.587182785189732!3d33.27258088082298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdf01188a25f%3A0x5d3f4a8ad0125ff3!2s13%20Av.%20Abderahim%20Bouabid%2C%20Berrechid!5e0!3m2!1sfr!2sma!4v1714422052593!5m2!1sfr!2sma"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QICT. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
