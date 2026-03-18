"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (lang: 'ru' | 'en') => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const GlobeIcon = () => (
        <svg className={styles.flag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );

    return (
        <div className={styles.container} ref={containerRef}>
            <button
                className={`${styles.switcher} ${isOpen ? styles.active : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select language"
                aria-expanded={isOpen}
            >
                <GlobeIcon />
                <span className={styles.langCode}>{language.toUpperCase()}</span>
                <svg className={styles.arrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <button className={`${styles.option} ${language === 'ru' ? styles.selected : ''}`} onClick={() => handleSelect('ru')}>
                        <GlobeIcon />
                        <span className={styles.optionText}>Русский</span>
                    </button>
                    <button className={`${styles.option} ${language === 'en' ? styles.selected : ''}`} onClick={() => handleSelect('en')}>
                        <GlobeIcon />
                        <span className={styles.optionText}>English</span>
                    </button>
                </div>
            )}
        </div>
    );
}
