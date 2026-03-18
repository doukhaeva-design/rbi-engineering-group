"use client";

import Header from "../components/layout/Header";
import styles from "./about.module.css";
import KeyCompetencies from "../components/sections/KeyCompetencies";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("about_page.title")}</h1>
                    <p className={styles.heroText}>
                        {t("about_page.subtitle")}
                    </p>
                </div>
            </section>

            <KeyCompetencies />

            <div className="section">
                <div className="container">
                    <div className={styles.block}>
                        <h2 className={styles.blockTitle}>{t("about_page.team.title")}</h2>
                        <p className={styles.text}>
                            {t("about_page.team.desc")}
                        </p>
                    </div>

                    <div className={styles.block} style={{ marginTop: '60px', textAlign: 'center' }}>
                        <Button href="/licenses" variant="outline">{t("about_page.button")}</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
