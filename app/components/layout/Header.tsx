"use client";
import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NewRBILogo from '../ui/NewRBILogo';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

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
          <NewRBILogo style={{ height: '40px', width: 'auto' }} />
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
          <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.home')}</Link>
          <Link href="/services" className={`${styles.link} ${pathname === '/services' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.services')}</Link>
          <Link href="/modular" className={`${styles.link} ${pathname === '/modular' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.modular')}</Link>
          <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.projects')}</Link>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.about')}</Link>
          <Link href="/licenses" className={`${styles.link} ${pathname === '/licenses' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.licenses')}</Link>
          <Link href="/contacts" className={`${styles.link} ${pathname === '/contacts' ? styles.active : ''}`} onClick={handleLinkClick}>{t('nav.contacts')}</Link>

          {/* Mobile only CTA */}
          <div className={styles.mobileCta}>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Desktop CTA (Visible on large screens) */}
        <div className={styles.desktopCta}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
