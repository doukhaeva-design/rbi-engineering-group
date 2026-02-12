"use client";

import Header from "../components/layout/Header";
import styles from "./modular.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import WhereUsed from "../components/sections/WhereUsed";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ModularPage() {
    const { t } = useLanguage();

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("modular_page.title")}</h1>
                    <p className={styles.heroText}>
                        {t("modular_page.subtitle")}
                    </p>
                    <Button href="/contacts" variant="primary">{t("modular_page.button")}</Button>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t("modular_page.advantages.title")}</h2>
                    <ul className={styles.advantagesList}>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.1")}</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.2")}</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.3")}</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.4")}</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.5")}</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{t("modular_page.advantages.6")}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--secondary-color)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t("modular_page.structure.title")}</h2>
                    <div className={styles.infoGrid}>
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
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t("modular_page.design.title")}</h2>
                    <div className={styles.textBlock}>
                        <p><strong>{t("modular_page.design.panels")}</strong> {t("modular_page.design.panels.val")}</p>
                        <p><strong>{t("modular_page.design.colors")}</strong> {t("modular_page.design.colors.val")}</p>
                        <p><strong>{t("modular_page.design.frame")}</strong> {t("modular_page.design.frame.val")}</p>
                    </div>
                </div>
            </section>

            <WhereUsed />

            <Footer />
        </main>
    );
}
