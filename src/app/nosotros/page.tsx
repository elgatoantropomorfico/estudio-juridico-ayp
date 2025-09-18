'use client';

import { } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Nosotros() {

  const milestones = [
    {
      id: 1,
      year: '1990',
      title: 'Fundación del Estudio',
      position: 'top',
      content: {
        title: 'Inicio de una Trayectoria Excepcional',
        description: 'Dr. Prado y Dra. Acevedo fundan el estudio jurídico con la visión de brindar asesoramiento legal integral y de excelencia.',
        achievements: ['Primeros casos en derecho laboral', 'Establecimiento de metodología de trabajo', 'Construcción de red de contactos profesionales']
      }
    },
    {
      id: 2,
      year: '1998-2008',
      title: 'Telecom Argentina',
      position: 'bottom',
      content: {
        title: 'Especialización en Telecomunicaciones',
        description: 'Asesoramiento legal especializado en el sector de telecomunicaciones, manejando regulaciones complejas y normativas específicas.',
        achievements: ['Derecho de telecomunicaciones', 'Regulaciones sectoriales', 'Casos de alta complejidad técnica']
      }
    },
    {
      id: 3,
      year: '2007-2015',
      title: 'Rapipago',
      position: 'top',
      content: {
        title: 'Expansión al Sector Financiero',
        description: 'Soporte legal integral para operaciones financieras, cumplimiento normativo y regulaciones del sistema financiero argentino.',
        achievements: ['Derecho financiero', 'Cumplimiento normativo', 'Operaciones complejas']
      }
    },
    {
      id: 4,
      year: '2015-2025',
      title: 'Supermercados Impulso',
      position: 'bottom',
      content: {
        title: 'Liderazgo en RRHH Corporativo',
        description: 'Gestión integral de recursos humanos, relaciones laborales y asesoramiento legal continuo para el sector retail.',
        achievements: ['Derecho laboral avanzado', 'Gestión de RRHH', 'Sector retail']
      }
    },
    {
      id: 5,
      year: '2018-2025',
      title: 'Instituto de Previsión Social y Cámara de Diputados',
      position: 'top',
      content: {
        title: 'Consolidación en el Sector Público',
        description: 'Asesoramiento en derecho administrativo, previsional y gestión de recursos humanos en la administración pública.',
        achievements: ['Derecho administrativo', 'Derecho previsional', 'Gestión pública']
      }
    },
    {
      id: 6,
      year: '2020-2025',
      title: 'Reconocimiento y Expansión',
      position: 'bottom',
      content: {
        title: 'Consolidación del Liderazgo Legal',
        description: 'Expansión y consolidación de la práctica profesional, abarcando todas las especialidades que hoy nos caracterizan.',
        achievements: ['Práctica integral', 'Reconocimiento profesional', 'Liderazgo sectorial']
      }
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="hero-content">
            <h1>Nosotros</h1>
            <p>Conocé al equipo profesional que está detrás de más de 34 años de experiencia en asesoramiento legal</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Nuestra Filosofía</h2>
              <p>
                En Estudio Jurídico Prado - Acevedo y Asociados, creemos firmemente que la 
                justicia se construye sobre tres pilares fundamentales: <strong>confianza</strong>, 
                <strong>ética</strong> y <strong>experiencia</strong>.
              </p>
              <p>
                Durante más de 34 años, hemos mantenido un compromiso inquebrantable con 
                nuestros clientes, brindando asesoramiento legal de la más alta calidad, 
                siempre con transparencia, honestidad, ética y excelencia.
              </p>
              <p>
                Nuestro enfoque se centra en comprender profundamente las necesidades específicas 
                de cada cliente, ofreciendo soluciones jurídicas personalizadas que no solo 
                resuelvan los problemas actuales, sino que también prevengan futuros conflictos.
              </p>
            </div>
            <div className="philosophy-marquee" aria-label="Valores del estudio desplazándose automáticamente">
              <div className="marquee-track">
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3>Confianza</h3>
                  <p>Construimos relaciones duraderas basadas en la transparencia y el compromiso mutuo.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">⚖️</div>
                  <h3>Ética</h3>
                  <p>Actuamos siempre con integridad, respetando los más altos estándares profesionales.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🎓</div>
                  <h3>Experiencia</h3>
                  <p>Más de dos décadas de trayectoria nos respaldan en cada caso que asumimos.</p>
                </div>
                {/* duplicate for seamless loop */}
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3>Confianza</h3>
                  <p>Construimos relaciones duraderas basadas en la transparencia y el compromiso mutuo.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">⚖️</div>
                  <h3>Ética</h3>
                  <p>Actuamos siempre con integridad, respetando los más altos estándares profesionales.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🎓</div>
                  <h3>Experiencia</h3>
                  <p>Más de dos décadas de trayectoria nos respaldan en cada caso que asumimos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Nuestro Equipo</h2>
            <p>Profesionales altamente capacitados con amplia experiencia en el sector público y privado</p>
          </div>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image 
                  src="/images/enrique.jpeg" 
                  alt="Doctor Jose Enrique Prado"
                  width={150} 
                  height={150} 
                  className={styles['member-img']}
                  priority
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Doctor Jose Enrique Prado</h3>
                <p className={styles.memberTitle}>Socio Fundador</p>
                <p className={styles.memberSpecialties}>Especialista en Derecho Laboral y Riesgos del Trabajador</p>
                <p className={styles.memberDescription}>
                Con más de 34 años de trayectoria, ha acompañado y representado
                 a trabajadores y empresas en conflictos laborales y en materia de riesgos del trabajo,
                defendiendo con solidez sus derechos y obligaciones.
                </p>
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image 
                  src="/images/cris.jpeg" 
                  alt="Doctora Maria Cristina Acevedo Urturi"
                  width={150} 
                  height={150} 
                  className={styles['member-img']}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Doctora Maria Cristina Acevedo Urturi</h3>
                <p className={styles.memberTitle}>Socia Directora</p>
                <p className={styles.memberSpecialties}>Especialista en Derecho Laboral y Previsional</p>
                <p className={styles.memberDescription}>
                  Directora de Legales y Previsional en IPS Corrientes, con vasta experiencia 
                  en recursos humanos y relaciones laborales en el sector corporativo.
                </p>
              </div>
            </div>

            {/* Nueva Integrante */}
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image 
                  src="/images/WhatsApp Image 2025-09-15 at 02.16.13.jpeg" 
                  alt="Marina Belén Díez"
                  width={150} 
                  height={150} 
                  className={styles['member-img']}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3>Marina Belén Díez</h3>
                <p className={styles.memberTitle}>Escribana Pública • Abogada</p>
                <p className={styles.memberSpecialties}>Escribanía y Derecho Inmobiliario</p>
                <p className={styles.memberDescription}>
                Ejerce la tarea de Procuración, maneja las bases de datos 
                de las diferentes causas, encargada de consultas por correo electrónico y on-line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className="section-header">
            <h2>Nuestra Trayectoria</h2>
            <p>Un recorrido de más de 34 años defendiendo los derechos de nuestros clientes</p>
          </div>
          
          <div className={styles.timeline}>
            {milestones.map((milestone) => (
              <div key={milestone.id} className={styles.timelineItem}>
                <div className={styles.timelineYear}>
                  {milestone.year}
                </div>
                <div className={styles.timelineCard}>
                  <h3>{milestone.content.title}</h3>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.content.description}</p>
                  <div className={styles.timelineAchievements}>
                    {milestone.content.achievements.map((achievement, idx) => (
                      <span key={idx} className={styles.achievementTag}>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-blue">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>¿Querés conocer más sobre nuestro trabajo?</h2>
            <p>Explorá nuestra experiencia detallada o contactanos para una consulta personalizada</p>
            <div className={styles.ctaButtons}>
              <Link href="/experiencia" className="btn btn-gold btn-large">
                Ver experiencia completa
              </Link>
              <Link href="https://wa.me/543794606123" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
