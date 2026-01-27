"use client";
import styles from './Header.module.css';
import React from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>RBI Engineering Group</div>

        <button
          className={`${styles.mobileMenuBtn} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <a href="#directions" className={styles.link} onClick={handleLinkClick}>Направления</a>
          <a href="#projects" className={styles.link} onClick={handleLinkClick}>Проекты</a>
          <a href="#about" className={styles.link} onClick={handleLinkClick}>О компании</a>
          <a href="#contacts" className={styles.link} onClick={handleLinkClick}>Контакты</a>
        </nav>
      </div>
    </header>
  );
}
