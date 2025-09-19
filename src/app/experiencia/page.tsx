'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Experiencia() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="hero-content">
            <h1>Nuestra Experiencia</h1>
            <p>Más de 34 años de trayectoria defendiendo los derechos de nuestros clientes en las áreas más complejas del derecho, con una sólida experiencia en el sector público y privado</p>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="section">
        <div className="container">
          <div className={styles.specialtiesGrid}>
            <div className={styles.specialtyDetail}>
              <div className={styles.specialtyHeader}>
                <div className={styles.specialtyIcon}>🏛️</div>
                <h2>Derecho Administrativo</h2>
              </div>
              <div className={styles.specialtyContent}>
                <p>
                  Especialistas en procedimientos administrativos, contrataciones públicas, 
                  recursos administrativos y contencioso administrativo. Asesoramos tanto 
                  a entidades públicas como privadas en sus relaciones con la administración púlbica Nacional.
                </p>
                <div className={styles.specialtyServices}>
                  <h4>Servicios especializados:</h4>
                  <ul>
                    <li>Procedimientos de contratación pública</li>
                    <li>Recursos administrativos y reclamos</li>
                    <li>Asesoramiento en normativa administrativa</li>
                    <li>Representación en procesos contencioso-administrativos</li>
                    <li>Consultoría para entes públicos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.specialtyDetail}>
              <div className={styles.specialtyHeader}>
                <div className={styles.specialtyIcon}>💼</div>
                <h2>Derecho Tributario</h2>
              </div>
              <div className={styles.specialtyContent}>
                <p>
                  Asesoramiento integral en materia fiscal, planificación tributaria, defensa 
                  ante organismos recaudadores y optimización de la carga impositiva.
                </p>
                <div className={styles.specialtyServices}>
                  <h4>Servicios incluidos:</h4>
                  <ul>
                    <li>Planificación fiscal estratégica</li>
                    <li>Defensa ante AFIP, ARBA</li>
                    <li>Recursos de reconsideración y apelación</li>
                    <li>Moratorias y planes de pago</li>
                    <li>Auditorías tributarias</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.specialtyDetail}>
              <div className={styles.specialtyHeader}>
                <div className={styles.specialtyIcon}>👥</div>
                <h2>Derecho Laboral</h2>
              </div>
              <div className={styles.specialtyContent}>
                <p>
                  Gestión integral de relaciones laborales, desde la contratación hasta la 
                  finalización del vínculo laboral, incluyendo conflictos sindicales y 
                  negociación colectiva.
                </p>
                <div className={styles.specialtyServices}>
                  <h4>Servicios incluidos:</h4>
                  <ul>
                    <li>Contratos de trabajo y modalidades especiales</li>
                    <li>Despidos e indemnizaciones</li>
                    <li>Conflictos sindicales</li>
                    <li>Accidentes de trabajo y enfermedades profesionales</li>
                    <li>Auditorías laborales</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.specialtyDetail}>
              <div className={styles.specialtyHeader}>
                <div className={styles.specialtyIcon}>🛡️</div>
                <h2>Derecho Previsional</h2>
              </div>
              <div className={styles.specialtyContent}>
                <p>
                  Especialización en seguridad social, jubilaciones, pensiones, aportes 
                  previsionales y beneficios del sistema previsional argentino.
                </p>
                <div className={styles.specialtyServices}>
                  <h4>Servicios incluidos:</h4>
                  <ul>
                    <li>Trámites jubilatorios y pensiones (ANSES)</li>
                    <li>Recursos ante ANSES</li>
                    <li>Reajustes previsionales (ANSES)</li>
                    <li>Aportes y contribuciones (ANSES)</li>
                    <li>Beneficios de la seguridad social (ANSES)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section className="section section-blue">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Trayectoria Profesional Detallada</h2>
            <p>34 años de experiencia en el sector público y privado, defendiendo los derechos de nuestros clientes</p>
          </div>
          
          <div className={styles.detailedTimeline}>
            <div className={`${styles.timelinePeriod} ${styles.current}`}>
              <div className={styles.periodHeader}>
                <h3>2018 - 2025</h3>
                <span className={styles.periodDuration}>7 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>🏛️</div>
                    <div>
                      <h4>Directora del Área Legal y Previsional</h4>
                      <span className={styles.companySector}>Instituto de Previsión Social - Provincia de Corrientes</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Nombrada por Decreto del Sr. Gobernador Gustavo Valdés. Dirección estratégica del área legal y previsional, supervisando todos los aspectos jurídicos relacionados con la seguridad social provincial.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>⚖️</span>
                        <span>Gestión de expedientes previsionales</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📋</span>
                        <span>Implementación de nuevos procedimientos administrativos</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>🎯</span>
                        <span>Reducción del 40% en tiempos de resolución</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelinePeriod}>
              <div className={styles.periodHeader}>
                <h3>2020 - Presente</h3>
                <span className={styles.periodDuration}>5 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>🏪</div>
                    <div>
                      <h4>Asesora Legal en RRHH - IMPULSO S.A.</h4>
                      <span className={styles.companySector}>Sector: Retail / Gran Consumo</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Asesoría legal en el área de recursos humanos y representación en causas judiciales del fuero laboral, administrativo y contencioso administrativo.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>👥</span>
                        <span>Gestión legal de empleados</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>⚖️</span>
                        <span>Representación en múltiples fueros judiciales</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📋</span>
                        <span>Implementación de políticas laborales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelinePeriod}>
              <div className={styles.periodHeader}>
                <h3>2016 - 2022</h3>
                <span className={styles.periodDuration}>6 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>🎓</div>
                    <div>
                      <h4>Docente Universitaria</h4>
                      <span className={styles.companySector}>Universidad Nacional del Nordeste (UNNE)</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Cátedra de Derecho Político junto al Dr. Aquino Britos - Cátedra &quot;B&quot;, adscripta hasta el año 2022.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📚</span>
                        <span>Más de 500 estudiantes formados</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>🏆</span>
                        <span>Reconocimiento por excelencia académica</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📖</span>
                        <span>Desarrollo de material didáctico especializado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelinePeriod}>
              <div className={styles.periodHeader}>
                <h3>2001 - 2016</h3>
                <span className={styles.periodDuration}>24 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>💳</div>
                    <div>
                      <h4>Ejercicio Independiente - Agente Red Rapipago</h4>
                      <span className={styles.companySector}>Gire S.A. - Servicios Financieros</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Ejercicio profesional independiente como agente de la Red Rapipago, brindando servicios legales especializados.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>💰</span>
                        <span>Derecho financiero y bancario</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>🔒</span>
                        <span>Cumplimiento normativo</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📊</span>
                        <span>Regulaciones del sistema financiero</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelinePeriod}>
              <div className={styles.periodHeader}>
                <h3>1995 - 2006</h3>
                <span className={styles.periodDuration}>11 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>📞</div>
                    <div>
                      <h4>Abogada - Stet France Telecom S.A Argentina</h4>
                      <span className={styles.companySector}>Sector: Telecomunicaciones</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Regularización patrimonial de inmuebles en el proceso de privatización de Entel a Telecom. Gestión judicial y extrajudicial de deudas en Corrientes, Chaco, Formosa, Misiones y Norte de Santa Fe.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>🏢</span>
                        <span>Regularización patrimonial post-privatización</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>💼</span>
                        <span>Gestión de cobranzas en 5 provincias</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📊</span>
                        <span>Clientes residenciales, telefonía pública y empresas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.timelinePeriod}>
              <div className={styles.periodHeader}>
                <h3>1995 - 2005</h3>
                <span className={styles.periodDuration}>10 años</span>
              </div>
              <div className="period-content">
                <div className="period-role">
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>🏭</div>
                    <div>
                      <h4>Abogada - Múltiples Empresas Corporativas</h4>
                      <span className={styles.companySector}>Diversos Sectores Industriales</span>
                    </div>
                  </div>
                  <div className={styles.roleDetails}>
                    <p>Gestión de cobranza extrajudicial para empresas líderes: Aguas de Corrientes S.A, Telecom Personal S.A, Papelera Corrientes, Arnet S.A, House of Fuller S.A, SKY S.A, Finansur S.A, UOL SINECTIS, Chevrolet S.A, Gigared S.A, DICO S.A (Coca Cola), y Laboratorio Monserrat & Eclair.</p>
                    <div className={styles.achievements}>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>🏢</span>
                        <span>15+ empresas corporativas atendidas</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>💰</span>
                        <span>Recuperación millonaria de deudas</span>
                      </div>
                      <div className={styles.achievementItem}>
                        <span className={styles.achievementIcon}>📈</span>
                        <span>Sectores: telecomunicaciones, servicios, automotriz, farmacéutico</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Resultados que Nos Respaldan</h2>
            <p>Cifras que demuestran nuestro compromiso y efectividad</p>
          </div>
          
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>34+</div>
              <div className={styles.metricLabel}>Años de experiencia</div>
              <div className={styles.metricDescription}>Más de dos décadas defendiendo derechos</div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>500+</div>
              <div className={styles.metricLabel}>Casos exitosos</div>
              <div className={styles.metricDescription}>Resoluciones favorables para nuestros clientes</div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>100+</div>
              <div className={styles.metricLabel}>Empresas asesoradas</div>
              <div className={styles.metricDescription}>Desde PyMEs hasta grandes corporaciones</div>
            </div>
            
            <div className={styles.metricCard}>
              <div className={styles.metricNumber}>4</div>
              <div className={styles.metricLabel}>Especialidades</div>
              <div className={styles.metricDescription}>Áreas de práctica consolidadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-blue">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>¿Necesitás el respaldo de nuestra experiencia?</h2>
            <p>Contactanos para una consulta personalizada y descubrí cómo podemos ayudarte</p>
            <div className={styles.ctaButtons}>
              <Link href="https://wa.me/543794606123" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-large">
                Solicitá una consulta
              </Link>
              <Link href="/nosotros" className="btn btn-secondary btn-large">
                Conocé nuestro equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}
