"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './AboutSection.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';

interface StatItem {
    label: string;
    value: number;
    textValue?: string;
    suffix: string;
    isDominant?: boolean;
}

export default function AboutSection() {
    const { t } = useLanguage();

    const stats: StatItem[] = [
        { label: t("about.stat.years"), value: 13, suffix: "+", isDominant: true },
        { label: t("about.stat.projects"), value: 50, suffix: "+", isDominant: true },
        { label: t("about.stat.employees"), value: 50, suffix: "+" },
        { label: t("about.stat.machinery"), value: 53, suffix: "" },
        { label: t("about.stat.license"), value: 1, suffix: t("about.stat.license.suffix") }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    // Reset counts to 0 when leaving to allow re-animation
                    setCounts(stats.map(() => 0));
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);

        let currentFrame = 0;
        const timer = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            // Slightly faster easeOut for better feel
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(stats.map(s => Math.floor(s.value * easeOut)));

            if (currentFrame === totalFrames) {
                setCounts(stats.map(s => s.value));
                clearInterval(timer);
            }
        }, frameRate);

        return () => clearInterval(timer);
    }, [isVisible]);

    return (
        <section className={styles.section} ref={sectionRef} id="about">
            <div className={`container`}>
                <div className={styles.layout}>
                    {/* Header: Manifesto */}
                    <RevealOnScroll>
                        <div className={styles.profile}>
                            <h2 className={styles.tagline}>{t('about.title')}</h2>
                            <div className={styles.description}>
                                <p>
                                    <span className={styles.accent}>RBI Engineering Group</span> — {t('about.desc').replace("RBI Engineering Group — ", "").replace("RBI Engineering Group is a ", "is a ")}
                                </p>
                                <p className={styles.secondaryText}>
                                    {t('about.subdesc')}
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Stats: Proof through facts */}
                    <RevealOnScroll delay={0.2}>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={`${styles.statCard} ${stat.isDominant ? styles.dominant : ''}`}>
                                    <div className={styles.valueWrapper}>
                                        <span className={styles.number}>
                                            {stat.textValue ? stat.textValue : counts[index]}
                                        </span>
                                        <span className={styles.suffix}>{stat.suffix}</span>
                                    </div>
                                    <p className={styles.label}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
