'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/experiencia', label: 'Experiencia' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.navLogo}>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Estudio Jurídico</span>
              <span className={styles.logoSub}>Acevedo Urturi - Prado y Asociados</span>
              <span className={styles.logoSub}>Desde 1964</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="https://wa.me/543794606123" target="_blank" rel="noopener noreferrer" className={`btn btn-gold ${styles.navCta}`}>
            Consulta Online
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileMenuLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/543794606123"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-gold ${styles.mobileMenuCta}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consulta Online
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
