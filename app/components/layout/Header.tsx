"use client";
import styles from './Header.module.css';


import React from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <Link href="/#services" className={styles.link} onClick={handleLinkClick}>Услуги</Link>
          <Link href="/#modular" className={styles.link} onClick={handleLinkClick}>Модульные</Link>
          <Link href="/#projects" className={styles.link} onClick={handleLinkClick}>Проекты</Link>
          <Link href="/#about" className={styles.link} onClick={handleLinkClick}>О компании</Link>
          <Link href="/#licenses" className={styles.link} onClick={handleLinkClick}>Лицензии</Link>
          <Link href="/#contacts" className={styles.link} onClick={handleLinkClick}>Контакты</Link>

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
