"use client";

import Header from "../components/layout/Header";
import styles from "./policy.module.css";
import Footer from "../components/layout/Footer";
import BackButton from "../components/ui/BackButton";
import { useLanguage } from '../context/LanguageContext';

export default function PrivacyPolicyPage() {
    const { t } = useLanguage();

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <BackButton />
                    </div>
                </div>
                <div className="container">
                    <h1 className={styles.title}>{t('policy.title')}</h1>
                    <p className={styles.subtitle}>
                        {t('policy.subtitle')}
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.1.title')}</h2>
                            <p style={{ whiteSpace: 'pre-line' }}>
                                {t('policy.1.text')}
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.2.title')}</h2>
                            <p>{t('policy.2.text')}</p>
                            <ul>
                                <li>{t('policy.2.l1')}</li>
                                <li>{t('policy.2.l2')}</li>
                                <li>{t('policy.2.l3')}</li>
                                <li>{t('policy.2.l4')}</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.3.title')}</h2>
                            <p>{t('policy.3.text')}</p>
                            <ul>
                                <li>{t('policy.3.l1')}</li>
                                <li>{t('policy.3.l2')}</li>
                                <li>{t('policy.3.l3')}</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.4.title')}</h2>
                            <p>
                                {t('policy.4.text')}
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.5.title')}</h2>
                            <p>
                                {t('policy.5.text')}
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>{t('policy.6.title')}</h2>
                            <p>
                                {t('policy.6.text')}<a href="/contacts" className={styles.link}>{t('policy.6.link')}</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
