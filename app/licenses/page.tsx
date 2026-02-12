"use client";

import Header from "../components/layout/Header";
import styles from "./licenses.module.css";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function LicensesPage() {
    const { t } = useLanguage();

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("licenses_page.title")}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.licenseList}>
                        <a href="/docs/licenziya.pdf" target="_blank" rel="noopener noreferrer" className={styles.item}>
                            <div className={styles.icon}>📄</div>
                            <div className={styles.textWrapper}>
                                <h3 className={styles.itemTitle}>{t("licenses_page.doc.title")}</h3>
                                <span className={styles.openLink}>{t("licenses_page.doc.link")}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
