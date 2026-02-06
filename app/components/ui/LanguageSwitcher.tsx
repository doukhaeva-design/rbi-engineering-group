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

    const RuFlag = () => (
        <svg className={styles.flag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" preserveAspectRatio="xMidYMid slice">
            <rect fill="#fff" width="9" height="3" />
            <rect fill="#d52b1e" y="3" width="9" height="3" />
            <rect fill="#0039a6" y="2" width="9" height="2" />
        </svg>
    );

    const EnFlag = () => (
        <svg className={styles.flag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice">
            <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
            </clipPath>
            <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
            </clipPath>
            <g clipPath="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
            </g>
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
                {language === 'ru' ? (
                    <>
                        <RuFlag />
                        <span className={styles.langCode}>RU</span>
                    </>
                ) : (
                    <>
                        <EnFlag />
                        <span className={styles.langCode}>EN</span>
                    </>
                )}
                <svg className={styles.arrow} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <button className={`${styles.option} ${language === 'ru' ? styles.selected : ''}`} onClick={() => handleSelect('ru')}>
                        <RuFlag />
                        <span className={styles.optionText}>Русский</span>
                    </button>
                    <button className={`${styles.option} ${language === 'en' ? styles.selected : ''}`} onClick={() => handleSelect('en')}>
                        <EnFlag />
                        <span className={styles.optionText}>English</span>
                    </button>
                </div>
            )}
        </div>
    );
}
