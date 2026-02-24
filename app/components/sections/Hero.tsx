"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';
import Button from '../ui/Button';

import { useLanguage } from '../../context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const currentRef = heroRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.disconnect();
        };
    }, []);
    return (
        <section className={styles.hero} ref={heroRef}>
            {/* Glass Background Panel - Absolute */}
            <div className={styles.glassPanel}></div>

            {/* Content Container - Aligned with Global Layout */}
            <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
                <h1 className={styles.title}>
                    RBI Engineering<br className={styles.desktopBreak} /> Group
                </h1>
                <p className={styles.description}>
                    {t('hero.description')}
                </p>
                <div className={styles.trustLine}>
                    <span>{t('hero.trust')}</span>
                    <span className={styles.trustBreak}>{t('hero.license')}</span>
                </div>
                <div className={styles.buttonGroup}>
                    <Button href="/contacts" variant="primary">{t('hero.request')}</Button>
                    <Button href="/projects" variant="outline">{t('hero.projects')}</Button>
                </div>
            </div>
        </section>
    );
}
