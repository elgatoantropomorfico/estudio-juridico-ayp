'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  // submitStatus removed; we use message content for feedback

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        consulta: ''
      });
      
      setMessage('¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.');
    } catch (_error) {
      setMessage('Error al enviar la consulta. Por favor, intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="hero-content">
            <h1>Contacto</h1>
            <p>Estamos aquí para ayudarte. Contactanos para una consulta personalizada y descubrí cómo podemos resolver tu situación legal</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.contactFormSection}>
              <h2>Envianos tu consulta</h2>
              <p>Completá el formulario y nos pondremos en contacto contigo a la brevedad</p>
              
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="nombre">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={styles.formInput}
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className={styles.formInput}
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="consulta">Consulta *</label>
                  <textarea
                    id="consulta"
                    name="consulta"
                    className={styles.formTextarea}
                    rows={5}
                    value={formData.consulta}
                    onChange={handleInputChange}
                    placeholder="Describí tu situación legal o consulta..."
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary btn-large ${styles.formSubmit}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </button>

                {message && (
                  <div className={`${styles.formMessage} ${message.includes('Error') ? styles.error : styles.success}`}>
                    {message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Información de contacto</h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Dirección</h3>
                    <p>San Lorenzo 2279</p>
                    <p>Corrientes Capital</p>
                    <p>Provincia de Corrientes, Argentina</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Teléfonos</h3>
                    <a href="tel:3794770954" className="phone-link">3794770954</a>
                    <a href="tel:3794606123" className="phone-link">3794606123</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div className="contact-details">
                    <h3>WhatsApp</h3>
                    <p>Disponible en ambos números</p>
                    <a 
                      href="https://wa.me/5493794770954" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      Enviar mensaje por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📷</div>
                  <div className="contact-details">
                    <h3>Redes Sociales</h3>
                    <a 
                      href="https://instagram.com/estudiojuridicopradoacevedo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      @EstudioJuridicoPradoAcevedo
                    </a>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3>Horarios de atención</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Lunes a Viernes:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="hours-item">
                    <span>Sábados:</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="hours-item">
                    <span>Domingos:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapBackground}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8234567890123!2d-58.8234567!3d-27.4678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzA0LjQiUyA1OMKwNDknMjQuNCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Estudio Jurídico Prado - Acevedo y Asociados"
          />
        </div>
        <div className={styles.mapOverlay}>
          <div className="container">
            <div className={styles.mapContent}>
              <div className={styles.locationInfo}>
                <div className={styles.sectionLabel}>Nuestra Ubicación</div>
                <h2>Visitanos en Corrientes Capital</h2>
                <p>Nuestras oficinas están estratégicamente ubicadas en el centro de la ciudad para brindarte fácil acceso y comodidad.</p>
                
                <div className={styles.addressDetails}>
                  <div className={styles.addressItem}>
                    <div className={styles.addressIcon}>📍</div>
                    <div>
                      <h4>Dirección</h4>
                      <p>San Lorenzo 2279<br />Corrientes Capital<br />Provincia de Corrientes</p>
                    </div>
                  </div>
                  
                  <div className={styles.addressItem}>
                    <div className={styles.addressIcon}>🕒</div>
                    <div>
                      <h4>Horarios</h4>
                      <p>Lunes a Viernes: 9:00 - 18:00<br />Sábados: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.mapActions}>
                  <a 
                    href="https://maps.google.com/?q=San+Lorenzo+2279,+Corrientes+Capital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Ver en Google Maps
                  </a>
                  <a 
                    href="https://wa.me/5493794770954" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    💬 Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-blue">
        <div className="container">
          <div className="cta-content">
            <h2>¿Preferís contactarnos directamente?</h2>
            <p>Llamanos o envianos un WhatsApp para una respuesta inmediata</p>
            <div className="direct-contact">
              <a href="tel:3794770954" className="btn btn-gold btn-large">
                📞 Llamar ahora
              </a>
              <a 
                href="https://wa.me/5493794770954" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-large"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
