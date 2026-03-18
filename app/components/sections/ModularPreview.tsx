
"use client";

import styles from './ModularPreview.module.css';
import Button from '../ui/Button';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';

export default function ModularPreview() {
    const { t } = useLanguage();
    return (
        <section className={`section ${styles.section}`} id="modular">
            <div className={styles.bgPhoto} />
            <div className={styles.bgOverlay} />
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <RevealOnScroll>
                        <h2 className={styles.title}>{t('modular.title')}</h2>
                        <p className={styles.text} dangerouslySetInnerHTML={{ __html: t('modular.text').replace(/\. /g, '.<br />') }}></p>
                    </RevealOnScroll>

                    {/* Simplified for Home Page to reduce redundancy */}
                    <div className={styles.benefitsBlock}>
                        <RevealOnScroll delay={0.2}>
                            <h3 className={styles.subtitle}>{t('modular.subtitle')}</h3>
                            <p className={styles.detailText}>
                                {t('modular.detail')}
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll delay={0.3}>
                            <div className={styles.cardsGrid}>
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className={styles.cardTextWrapper}>
                                        <h4 className={styles.cardTitle}>{t('modular.benefit1.title')}</h4>
                                        <p className={styles.cardText}>{t('modular.benefit1.desc')}</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L3 7V12C3 17.52 7.5 22 12 22C16.5 22 21 17.52 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={styles.cardTextWrapper}>
                                        <h4 className={styles.cardTitle}>{t('modular.benefit2.title')}</h4>
                                        <p className={styles.cardText}>{t('modular.benefit2.desc')}</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.iconWrapper}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H9C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19V17H5V19ZM13 17V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V17H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 5H21V17H3V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 5V3H17V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={styles.cardTextWrapper}>
                                        <h4 className={styles.cardTitle}>{t('modular.benefit3.title')}</h4>
                                        <p className={styles.cardText}>{t('modular.benefit3.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <RevealOnScroll delay={0.4}>
                        <div style={{ marginTop: '40px' }}>
                            <Button href="/modular" variant="filled">{t('modular.button')}</Button>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
