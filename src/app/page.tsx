"use client";
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedStat from '@/components/AnimatedStat';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const servicesViewportRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: 'next' | 'prev') => {
    const viewport = servicesViewportRef.current;
    if (!viewport) return;
    const visibleWidth = viewport.clientWidth;
    const delta = Math.floor(visibleWidth / 3) + 24; // approx one card + gap
    viewport.scrollBy({ left: direction === 'next' ? delta : -delta, behavior: 'smooth' });
  };
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.heroLabel}>
                Estudio Jurídico de Excelencia
              </div>
              <h1 className={styles.heroTitle}>
                Más de 34 Años de Experiencia
                <span className={styles.heroHighlight}> en Excelencia Legal</span>
              </h1>
              <p className={styles.heroSubtitle}>
              Se inició en la Provincia de Santa Fé y hace más de 34 años 
              en la Ciudad de Corrientes venimos aportando nuestra experiencia Legal
              </p>
              <div className={styles.heroActions}>
                <a 
                  href="https://wa.me/543794606123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-large"
                >
                  Consulta Gratuita
                </a>
                <Link href="/nosotros" className="btn btn-outline btn-large">
                  Conocer Más
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.lawyerPhotoContainer}>
                <Image
                  src="/images/WhatsApp Image 2025-09-15 at 02.16.14.jpeg"
                  alt="Dra. Acevedo - Socia Fundadora en su oficina"
                  width={800}
                  height={500}
                  className={styles.lawyerPhoto}
                  priority
                />
                <div className={styles.heroCard}>
                  <div className={styles.heroCardIcon}>⚖️</div>
                  <div className={styles.heroCardText}>
                    <strong>Dr. Prado & Dra. Acevedo</strong>
                    <span>34+ años de experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Nuestros Servicios</div>
            <h2>Encontramos Soluciones Expertas<br />Para Casos Legales</h2>
            <p>Ofrecemos servicios jurídicos integrales especializados en las áreas más demandadas del derecho.</p>
          </div>
          <div className={styles.servicesMarquee}>
            <button aria-label="Anterior" className={`${styles.servicesNavBtn} ${styles.left}`} onClick={() => scrollByCards('prev')}>
              ‹
            </button>
            <div ref={servicesViewportRef} className={styles.servicesViewport}>
              <div className={styles.servicesTrack}>
                {/* Card 1: Laboral y Previsional */}
                <div className={`elegant-card ${styles.serviceCard}`}>
                  <div className={styles.serviceImageContainer}>
                    <Image
                      src="/images/50f839ded13c53139345897857cb32eb.jpg"
                      alt="Derecho Laboral y Previsional - Firma de documentos y asesoría legal"
                      width={800}
                      height={400}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceOverlay}>
                      <div className={styles.serviceIcon}>⚖️</div>
                    </div>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>Derecho Laboral y Previsional</h3>
                    <p>Asesoramiento integral en relaciones laborales y beneficios previsionales. Representación en reclamos laborales, jubilaciones y pensiones.</p>
                    <div className={styles.serviceFeatures}>
                      <span>Despidos, liquidaciones y conflictos sindicales</span>
                      <span>Jubilaciones y pensiones (ANSES)</span>
                      <span>Recursos administrativos y judiciales</span>
                      <span>Negociación colectiva</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Riesgos del Trabajo */}
                <div className={`elegant-card ${styles.serviceCard}`}>
                  <div className={styles.serviceImageContainer}>
                    <Image
                      src="/images/WhatsApp Image 2025-09-15 at 02.16.13.jpeg"
                      alt="Derecho de Riesgos del Trabajo - Trámites y gestiones"
                      width={800}
                      height={400}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceOverlay}>
                      <div className={styles.serviceIcon}>🛡️</div>
                    </div>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>Derecho de Riesgos del Trabajo</h3>
                    <p>Gestión integral de reclamos y prestaciones frente a accidentes y enfermedades laborales. Acompañamiento en todo el proceso.</p>
                    <div className={styles.serviceFeatures}>
                      <span>ART: trámites y apelaciones</span>
                      <span>Incapacidades y recalificación</span>
                      <span>Pericias médicas y comisiones</span>
                      <span>Indemnizaciones por accidente</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Administrativo */}
                <div className={`elegant-card ${styles.serviceCard}`}>
                  <div className={styles.serviceImageContainer}>
                    <Image
                      src="/images/fondo.jpeg"
                      alt="Derecho Administrativo - Procedimientos y contrataciones públicas"
                      width={800}
                      height={400}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceOverlay}>
                      <div className={styles.serviceIcon}>🏛️</div>
                    </div>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>Derecho Administrativo</h3>
                    <p>Procedimientos administrativos, contrataciones públicas, recursos y representación ante organismos estatales.</p>
                    <div className={styles.serviceFeatures}>
                      <span>Recursos y reclamos administrativos</span>
                      <span>Contrataciones y licitaciones</span>
                      <span>Contencioso administrativo</span>
                      <span>Asesoramiento a entes públicos</span>
                    </div>
                  </div>
                </div>

                {/* Card 4: Tributario */}
                <div className={`elegant-card ${styles.serviceCard}`}>
                  <div className={styles.serviceImageContainer}>
                    <Image
                      src="/images/50f839ded13c53139345897857cb32eb.jpg"
                      alt="Derecho Tributario - Planificación y defensa fiscal"
                      width={800}
                      height={400}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceOverlay}>
                      <div className={styles.serviceIcon}>💼</div>
                    </div>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>Derecho Tributario</h3>
                    <p>Planificación fiscal, recursos ante organismos recaudadores y defensa en sede administrativa y judicial.</p>
                    <div className={styles.serviceFeatures}>
                      <span>Planificación y auditorías</span>
                      <span>Recursos ante AFIP y fiscos provinciales</span>
                      <span>Moratorias y planes de pago</span>
                      <span>Cumplimiento normativo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button aria-label="Siguiente" className={`${styles.servicesNavBtn} ${styles.right}`} onClick={() => scrollByCards('next')}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="section">
        <div className="container">
          <div className={styles.consultationSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>Consulta Profesional</div>
              <h2>Su Consulta Inicial</h2>
              <p>Con 34 años de experiencia, ofrecemos una consulta inicial gratuita para evaluar su caso y brindarle la mejor estrategia legal personalizada.</p>
            </div>
            
            <div className={styles.consultationGrid}>
              <div className={styles.consultationCard}>
                <div className={styles.consultationCardIcon}>
                  <div className={styles.iconWrapper}>📋</div>
                </div>
                <div className={styles.consultationCardContent}>
                  <h3>Evaluación Gratuita</h3>
                  <p>Análisis inicial completo sin costo de su situación legal específica</p>
                  <div className={styles.cardFeatures}>
                    <span>Revisión de documentos</span>
                    <span>Análisis de viabilidad</span>
                    <span>Recomendaciones iniciales</span>
                  </div>
                </div>
              </div>

              <div className={styles.consultationCard}>
                <div className={styles.consultationCardIcon}>
                  <div className={styles.iconWrapper}>⚖️</div>
                </div>
                <div className={styles.consultationCardContent}>
                  <h3>Estrategia Legal</h3>
                  <p>Plan personalizado y detallado para resolver su caso de manera efectiva</p>
                  <div className={styles.cardFeatures}>
                    <span>Estrategia personalizada</span>
                    <span>Cronograma de acciones</span>
                    <span>Estimación de tiempos</span>
                  </div>
                </div>
              </div>

              <div className={styles.consultationCard}>
                <div className={styles.consultationCardIcon}>
                  <div className={styles.iconWrapper}>🔒</div>
                </div>
                <div className={styles.consultationCardContent}>
                  <h3>Confidencialidad</h3>
                  <p>Absoluta reserva y privacidad garantizada en todo el proceso legal</p>
                  <div className={styles.cardFeatures}>
                    <span>Secreto profesional</span>
                    <span>Información protegida</span>
                    <span>Privacidad total</span>
                  </div>
                </div>
              </div>

              <div className={styles.consultationCard}>
                <div className={styles.consultationCardIcon}>
                  <div className={styles.iconWrapper}>📞</div>
                </div>
                <div className={styles.consultationCardContent}>
                  <h3>Comunicación Directa</h3>
                  <p>Contacto inmediato y seguimiento constante durante todo el proceso</p>
                  <div className={styles.cardFeatures}>
                    <span>WhatsApp disponible</span>
                    <span>Respuesta rápida</span>
                    <span>Seguimiento continuo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.consultationCTA}>
              <div className={styles.ctaContent}>
                <div className={styles.ctaStats}>
                  <AnimatedStat 
                    value="34+" 
                    label="Años de Experiencia" 
                  />
                  <AnimatedStat 
                    value="1000+" 
                    label="Casos Resueltos" 
                  />
                  <AnimatedStat 
                    value="95%" 
                    label="Casos Exitosos" 
                  />
                </div>
                <a 
                  href="https://wa.me/543794606123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-large"
                >
                  Agendar Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.faqSection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>Preguntas Frecuentes</div>
              <h2>Respuestas de Nuestros Expertos</h2>
              <p>Resolvemos las dudas más comunes sobre nuestros servicios legales y procesos.</p>
            </div>
            <div className={styles.faqGrid}>
              <div className={styles.faqList}>
                <div className="elegant-card">
                  <h4>¿Cómo manejan la facturación y los honorarios?</h4>
                  <p>Ofrecemos diferentes modalidades de facturación según el tipo de caso: honorarios fijos para trámites específicos, porcentaje del resultado en casos de éxito, y tarifas por hora para asesoramiento continuo.</p>
                </div>
                <div className="elegant-card">
                  <h4>¿Pueden presentar recursos ante tribunales superiores?</h4>
                  <p>Sí, tenemos amplia experiencia en recursos de apelación y procedimientos ante tribunales superiores. Evaluamos cada caso para determinar la viabilidad de los recursos.</p>
                </div>
                <div className="elegant-card">
                  <h4>¿Cómo mantienen comunicación con los clientes?</h4>
                  <p>Mantenemos comunicación constante con nuestros clientes a través de WhatsApp, email y llamadas telefónicas. Siempre estarás informado del progreso de tu caso.</p>
                </div>
                <div className="elegant-card">
                  <h4>¿Cuál es el momento adecuado para iniciar un proceso legal?</h4>
                  <p>El momento adecuado depende de cada situación particular. Ofrecemos asesoramiento personalizado para evaluar las mejores opciones según tu caso específico.</p>
                </div>
              </div>
              <div className={styles.heroImage}>
              <div className={styles.heroImageContainer}>
                <Image
                  src="/images/WhatsApp Image 2025-09-15 at 02.16.13.jpeg"
                  alt="Dr. Prado y Dra. Acevedo - Socios Fundadores"
                  width={800}
                  height={500}
                  className={styles.lawyerPhoto}
                />
                <div className={styles.heroImageOverlay}>
                  <div className={styles.heroCard}>
                    <div className={styles.heroCardIcon}>⚖️</div>
                    <div className={styles.heroCardContent}>
                      <h3>Dr. Prado & Dra. Acevedo</h3>
                      <p>Socios Fundadores - 34 años de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Nuestros Clientes</div>
            <h2>La Confianza de Grandes Empresas</h2>
            <p>Más de tres décadas construyendo relaciones sólidas con empresas e instituciones líderes que confían en nuestro asesoramiento legal especializado.</p>
          </div>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.companyLogo}>
                  <div className={styles.logoIcon}>🏢</div>
                </div>
                <div className={styles.companyInfo}>
                  <h4>Telecom Argentina</h4>
                  <span className={styles.testimonialPeriod}>1998 - 2008</span>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <p>&quot;Asesoramiento legal especializado en telecomunicaciones y regulaciones del sector. Su expertise nos permitió navegar exitosamente el complejo marco regulatorio.&quot;</p>
                <div className={styles.testimonialTags}>
                  <span>Derecho Corporativo</span>
                  <span>Regulaciones</span>
                  <span>Telecomunicaciones</span>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.companyLogo}>
                  <div className={styles.logoIcon}>💳</div>
                </div>
                <div className={styles.companyInfo}>
                  <h4>Rapipago</h4>
                  <span className={styles.testimonialPeriod}>2007 - 2015</span>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <p>&quot;Soporte legal integral para operaciones financieras y cumplimiento normativo. Profesionalismo excepcional en cada consulta y gestión legal.&quot;</p>
                <div className={styles.testimonialTags}>
                  <span>Derecho Financiero</span>
                  <span>Cumplimiento</span>
                  <span>Operaciones</span>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.companyLogo}>
                  <div className={styles.logoIcon}>🏪</div>
                </div>
                <div className={styles.companyInfo}>
                  <h4>Supermercados Impulso S.A.</h4>
                  <span className={styles.testimonialPeriod}>2015 - Presente</span>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <p>&quot;Gestión legal de recursos humanos y relaciones laborales corporativas. Su conocimiento profundo del derecho laboral es invaluable para nuestra operación.&quot;</p>
                <div className={styles.testimonialTags}>
                  <span>Derecho Laboral</span>
                  <span>RRHH</span>
                  <span>Relaciones Laborales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>¿Necesitás asesoramiento legal?</h2>
            <p>Contactanos para una consulta personalizada y sin compromiso</p>
            <div className={styles.ctaButtons}>
              <Link href="https://wa.me/543794606123" target="_blank" rel="noopener noreferrer" className={`btn btn-gold ${styles.btnLarge}`}>
                Solicitá una consulta
              </Link>
              <div className={styles.contactQuick}>
                <p>O llamanos directamente:</p>
                <a href="tel:3794606123" className={styles.phoneLink}>
                  📞 3794606123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
