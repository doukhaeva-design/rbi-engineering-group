
"use client";

import styles from './WhereUsed.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, MonitorCog, Factory, Wind, School, Sword, HeartPulse } from 'lucide-react';

export default function WhereUsed() {
    const { t } = useLanguage();
    const items = [
        { text: t("where.i1"), icon: <ShieldCheck className={styles.icon} /> },
        { text: t("where.i2"), icon: <MonitorCog className={styles.icon} /> },
        { text: t("where.i3"), icon: <Factory className={styles.icon} /> },
        { text: t("where.i4"), icon: <Wind className={styles.icon} /> },
        { text: t("where.i5"), icon: <School className={styles.icon} /> },
        { text: t("where.i6"), icon: <Sword className={styles.icon} /> },
        { text: t("where.i7"), icon: <HeartPulse className={styles.icon} /> },
    ];

    return (
        <section className={`section-alt ${styles.section}`}>
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 className={styles.title}>{t('where.title')}</h2>
                </RevealOnScroll>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
