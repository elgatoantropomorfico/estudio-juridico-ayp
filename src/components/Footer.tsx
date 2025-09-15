"use client"
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <h3>Estudio Jurídico</h3>
              <p className={styles.footerSubtitle}>Prado - Acevedo y Asociados</p>
            </div>
            <p className={styles.footerDescription}>
              Más de 25 años de trayectoria defendiendo tus derechos en Corrientes Capital.
              Especialistas en Derecho Administrativo, Tributario, RRHH y Previsional.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Navegación</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/experiencia">Experiencia</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Especialidades</h4>
            <ul className={styles.footerLinks}>
              <li>Derecho Administrativo</li>
              <li>Derecho Tributario</li>
              <li>Derecho Laboral</li>
              <li>Derecho Previsional</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contacto</h4>
            <div className={styles.contactInfo}>
              <p>📍 San Lorenzo 2279</p>
              <p>Corrientes Capital</p>
              <p>📞 3794770954 / 3794606123</p>
              <p>📱 WhatsApp disponible</p>
              <p>📷 @EstudioJuridicoPradoAcevedo</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Estudio Jurídico Prado - Acevedo y Asociados. Todos los derechos reservados.</p>
          <div className={styles.footerLegal}>
            <Link href="/privacidad">Política de Privacidad</Link>
            <Link href="/terminos">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
