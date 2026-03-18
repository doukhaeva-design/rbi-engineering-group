"use client";

import Image from 'next/image';
import styles from './Activities.module.css';
import Button from '../ui/Button';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';

export default function Activities() {
    const { t } = useLanguage();

    const items = [
        {
            title: t("activities.modular.title"),
            desc: t("activities.modular.desc"),
            image: "/assets/drawings/modular_3d.png"
        },
        {
            title: t("activities.construction.title"),
            desc: t("activities.construction.desc"),
            image: "/assets/drawings/construction_3d.png"
        },
        {
            title: t("activities.networks.title"),
            desc: t("activities.networks.desc"),
            image: "/assets/drawings/networks_3d.png"
        },
        {
            title: t("activities.finishing.title"),
            desc: t("activities.finishing.desc"),
            image: "/assets/drawings/finishing_3d.png"
        },
        {
            title: t("activities.planning.title"),
            desc: t("activities.planning.desc"),
            image: "/assets/drawings/planning_3d.png"
        },
        {
            title: t("activities.mounting.title"),
            desc: t("activities.mounting.desc"),
            image: "/assets/drawings/mounting_3d.png"
        }
    ];

    return (
        <section className={`section ${styles.activitiesSection}`} id="services">
            <div className={`container`}>
                <RevealOnScroll>
                    <p className="eyebrow">{t('activities.eyebrow')}</p>
                    <h2 className={styles.sectionTitle}>{t('activities.title')}</h2>
                    <p className={styles.sectionDescription}>{t('activities.desc')}</p>
                </RevealOnScroll>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 0.08} className={styles.cardWrapper}>
                                <div className={styles.card}>
                                    <div className={styles.cardContent}>
                                        <span className={styles.cardNumber}>0{index + 1}</span>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardDesc}>{item.desc}</p>
                                    </div>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            className={styles.sketchImage}
                                        />
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
                <RevealOnScroll delay={0.4}>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <Button href="/services" variant="filled">{t('activities.button')}</Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
