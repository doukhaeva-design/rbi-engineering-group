"use client";

import Image from 'next/image';
import Header from "../components/layout/Header";
import styles from "./services.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ServicesPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t("services.card.modular.title"),
            desc: t("activities.modular.desc"),
            details: [
                t("services.card.modular.d.1"),
                t("services.card.modular.d.2"),
                t("services.card.modular.d.3"),
                t("services.card.modular.d.4"),
                t("services.card.modular.d.5")
            ],
            image: "/assets/drawings/modular_3d.png"
        },
        {
            title: t("services.card.construction.title"),
            desc: t("activities.construction.desc"),
            details: [
                t("services.card.construction.d.1"),
                t("services.card.construction.d.2"),
                t("services.card.construction.d.3"),
                t("services.card.construction.d.4")
            ],
            image: "/assets/drawings/construction_3d.png"
        },
        {
            title: t("services.card.networks.title"),
            desc: t("activities.networks.desc"),
            details: [
                t("services.card.networks.d.1"),
                t("services.card.networks.d.2"),
                t("services.card.networks.d.3")
            ],
            image: "/assets/drawings/networks_3d.png"
        },
        {
            title: t("services.card.finishing.title"),
            desc: t("activities.finishing.desc"),
            details: [
                t("services.card.finishing.d.1"),
                t("services.card.finishing.d.2"),
                t("services.card.finishing.d.3")
            ],
            image: "/assets/drawings/finishing_3d.png"
        },
        {
            title: t("services.card.planning.title"),
            desc: t("activities.planning.desc"),
            details: [
                t("services.card.planning.d.1"),
                t("services.card.planning.d.2"),
                t("services.card.planning.d.3")
            ],
            image: "/assets/drawings/planning_3d.png"
        },
        {
            title: t("services.card.mounting.title"),
            desc: t("activities.mounting.desc"),
            details: [
                t("services.card.mounting.d.1"),
                t("services.card.mounting.d.2"),
                t("services.card.mounting.d.3")
            ],
            image: "/assets/drawings/mounting_3d.png"
        }
    ];

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("services.title")}</h1>
                    <p className={styles.heroText}>
                        {t("services.subtitle")}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardNumber}>0{index + 1}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>

                                    {/* Render details list if available */}
                                    {item.details && (
                                        <ul className={styles.detailsList}>
                                            {item.details.map((detail, idx) => (
                                                <li key={idx} className={styles.detailItem}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={styles.sketchImage}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <Button href="/contacts" variant="primary">{t("services.button")}</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
