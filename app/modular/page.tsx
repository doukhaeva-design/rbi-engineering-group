"use client";

import Header from "../components/layout/Header";
import styles from "./modular.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import {
    IconClock,
    IconPigMoney,
    IconFlame,
    IconTools,
    IconLeaf,
    IconMapPin
} from "@tabler/icons-react";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ModularPage() {
    const { t } = useLanguage();

    const advantages = [
        { icon: IconClock, text: t("modular_page.advantages.1") },
        { icon: IconPigMoney, text: t("modular_page.advantages.2") },
        { icon: IconFlame, text: t("modular_page.advantages.3") },
        { icon: IconTools, text: t("modular_page.advantages.4") },
        { icon: IconLeaf, text: t("modular_page.advantages.5") },
        { icon: IconMapPin, text: t("modular_page.advantages.6") },
    ];

    return (
        <main>
            <Header />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton style={{ color: 'white' }} />
                </div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>{t("modular_page.title")}</h1>
                    <p className={styles.heroText}>
                        {t("modular_page.subtitle")}
                    </p>
                    <Button href="/contacts" variant="primary">{t("modular_page.button")}</Button>
                </div>
            </section>

            {/* Преимущества */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t("modular_page.advantages.title")}</h2>
                    <div className={styles.advantagesGrid}>
                        {advantages.map((item, index) => (
                            <div key={index} className={styles.advantageCard}>
                                <item.icon className={styles.advantageIcon} stroke={1.5} />
                                <span className={styles.advantageText}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Устройство модуля */}
            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t("modular_page.specs.title")}</h2>
                    <div className={styles.specsGrid}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.subTitle}>{t("modular_page.structure.col1.title")}</h3>
                            <ul className={styles.list}>
                                <li>{t("modular_page.structure.col1.1")}</li>
                                <li>{t("modular_page.structure.col1.2")}</li>
                                <li>{t("modular_page.structure.col1.3")}</li>
                                <li>{t("modular_page.structure.col1.4")}</li>
                            </ul>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.subTitle}>{t("modular_page.structure.col2.title")}</h3>
                            <ul className={styles.list}>
                                <li>{t("modular_page.structure.col2.1")}</li>
                                <li>{t("modular_page.structure.col2.2")}</li>
                                <li>{t("modular_page.structure.col2.3")}</li>
                                <li>{t("modular_page.structure.col2.4")}</li>
                            </ul>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.subTitle}>{t("modular_page.specs.col3.title")}</h3>
                            <ul className={styles.list}>
                                <li><strong>{t("modular_page.design.panels")}</strong> {t("modular_page.design.panels.val")}</li>
                                <li><strong>{t("modular_page.design.colors")}</strong> {t("modular_page.design.colors.val")}</li>
                                <li><strong>{t("modular_page.design.frame")}</strong> {t("modular_page.design.frame.val")}</li>
                            </ul>
                        </div>
                        <div className={styles.infoCard}>
                            <h3 className={styles.subTitle}>{t("modular_page.specs.col4.title")}</h3>
                            <ul className={styles.list}>
                                <li>{t("where.i1")}</li>
                                <li>{t("where.i2")}</li>
                                <li>{t("where.i3")}</li>
                                <li>{t("where.i4")}</li>
                                <li>{t("where.i5")}</li>
                                <li>{t("where.i6")}</li>
                                <li>{t("where.i7")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTA />

            <Footer />
        </main>
    );
}
