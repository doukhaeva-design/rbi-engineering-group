"use client";
import styles from './Header.module.css';


import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link
          href="/"
          className={styles.logo}
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          RBI Engineering Group
        </Link>

        <button
          className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link href="/services" className={`${styles.link} ${pathname === '/services' ? styles.active : ''}`} onClick={handleLinkClick}>Услуги</Link>
          <Link href="/modular" className={`${styles.link} ${pathname === '/modular' ? styles.active : ''}`} onClick={handleLinkClick}>Модульные</Link>
          <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`} onClick={handleLinkClick}>Проекты</Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={handleLinkClick}>О компании</Link>
          <Link href="/licenses" className={`${styles.link} ${pathname === '/licenses' ? styles.active : ''}`} onClick={handleLinkClick}>Лицензии</Link>
          <Link href="/contacts" className={`${styles.link} ${pathname === '/contacts' ? styles.active : ''}`} onClick={handleLinkClick}>Контакты</Link>

          {/* Mobile only CTA */}
          <div className={styles.mobileCta}>
            <Link href="/contacts" className={styles.ctaButton} onClick={handleLinkClick}>
              Получить консультацию
            </Link>
          </div>
        </nav>

        {/* Desktop CTA (Visible on large screens) */}
        <div className={styles.desktopCta}>
          <Link href="/contacts" className={styles.ctaButton}>
            Получить консультацию
          </Link>
        </div>
      </div>
    </header>
  );
}
