"use client";

import Image from 'next/image';
import styles from './KeyCompetencies.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';
import { Trophy, UsersRound, Truck, Boxes, Handshake, BadgeCheck } from 'lucide-react';

export default function KeyCompetencies({ limited = false }: { limited?: boolean }) {
    const { t } = useLanguage();
    const fullCompetencies = [
        {
            title: t("competencies.c1.title"),
            desc: t("competencies.c1.desc"),
            icon: <Trophy className={styles.icon} />
        },
        {
            title: t("competencies.c2.title"),
            desc: t("competencies.c2.desc"),
            icon: <UsersRound className={styles.icon} />
        },
        {
            title: t("competencies.c3.title"),
            desc: t("competencies.c3.desc"),
            icon: <Truck className={styles.icon} />
        },
        {
            title: t("competencies.c4.title"),
            desc: t("competencies.c4.desc"),
            icon: <Boxes className={styles.icon} />
        },
        {
            title: t("competencies.c5.title"),
            desc: t("competencies.c5.desc"),
            icon: <Handshake className={styles.icon} />
        },
        {
            title: t("competencies.c6.title"),
            desc: t("competencies.c6.desc"),
            icon: <BadgeCheck className={styles.icon} />
        }
    ];

    // Show only 3 items if limited is true, BUT actually for the "Why Choose Us" look user might want more text or specific layout. 
    // The previous code had slice(0,3). I will keep logic but if layout changes, sticking to 3 might leave big empty space if image is tall.
    // However, usually "Why Choose Us" has 3-4 points. Let's keep existing logic.
    const competencies = limited ? fullCompetencies.slice(0, 3) : fullCompetencies;

    return (
        <section className={`section ${styles.section}`}>
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 className={styles.title}>{limited ? t('competencies.title_alt') : t('competencies.title')}</h2>
                </RevealOnScroll>

                <div className={limited ? styles.splitLayout : ''}>
                    {limited && (
                        <RevealOnScroll className={styles.imageWrapper}>
                            <Image
                                src="/PochemuNasVibirayut.png"
                                alt={t("competencies.title_alt")}
                                fill
                                className={styles.image}
                            />
                        </RevealOnScroll>
                    )}

                    <div className={styles.grid}>
                        {competencies.map((comp, index) => (
                            <RevealOnScroll key={index} delay={index * 0.1}>
                                <div className={styles.item}>
                                    <div className={styles.iconWrapper}>
                                        {comp.icon}
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.compTitle}>{comp.title}</h3>
                                        <p className={styles.compDesc}>{comp.desc}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
