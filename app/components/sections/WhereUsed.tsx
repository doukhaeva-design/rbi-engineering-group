
"use client";

import styles from './WhereUsed.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';
import { IconShieldCheck, IconDeviceDesktopCog, IconBuildingFactory2, IconWindmill, IconSchool, IconSword, IconStethoscope } from '@tabler/icons-react';

export default function WhereUsed() {
    const { t } = useLanguage();
    const items = [
        { text: t("where.i1"), icon: <IconShieldCheck className={styles.icon} stroke={1.5} /> },
        { text: t("where.i2"), icon: <IconDeviceDesktopCog className={styles.icon} stroke={1.5} /> },
        { text: t("where.i3"), icon: <IconBuildingFactory2 className={styles.icon} stroke={1.5} /> },
        { text: t("where.i4"), icon: <IconWindmill className={styles.icon} stroke={1.5} /> },
        { text: t("where.i5"), icon: <IconSchool className={styles.icon} stroke={1.5} /> },
        { text: t("where.i6"), icon: <IconSword className={styles.icon} stroke={1.5} /> },
        { text: t("where.i7"), icon: <IconStethoscope className={styles.icon} stroke={1.5} /> },
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
