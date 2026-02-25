"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const { t, language } = useLanguage();
    const [showMapSelector, setShowMapSelector] = useState(false);
    return (
        <footer id="contacts" className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>RBI Engineering Group</Link>
                        <p className={styles.desc}>
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div className={styles.nav}>
                        <div className={styles.navColumn}>
                            <Link href="/services" className={styles.link}>{t('nav.services')}</Link>
                            <Link href="/modular" className={styles.link}>{t('nav.modular')}</Link>
                            <Link href="/projects" className={styles.link}>{t('nav.projects')}</Link>
                        </div>
                        <div className={styles.navColumn}>
                            <Link href="/about" className={styles.link}>{t('nav.about')}</Link>
                            <Link href="/licenses" className={styles.link}>{t('nav.licenses')}</Link>
                            <Link href="/policy" className={styles.link}>{t('footer.policy')}</Link>
                            <Link href="/contacts" className={styles.link}>{t('nav.contacts')}</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.contactRow}>
                            <span className={styles.contactItem}><a href="tel:+77025555169" style={{ textDecoration: 'none', color: 'inherit' }}>+7 702 555 51 69</a></span>
                            <span className={styles.contactItem}><a href="mailto:info@rbi.asia" style={{ textDecoration: 'none', color: 'inherit' }}>info@rbi.asia</a></span>
                            <span
                                className={`${styles.contactItem} ${styles.clickableAddress}`}
                                style={{ marginTop: '10px', display: 'block' }}
                                onClick={() => setShowMapSelector(true)}
                            >
                                {t('footer.address')}
                            </span>
                            <span className={styles.bin}>{t("footer.bin")}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>© 2026 RBI Engineering Group. {t('footer.rights')}</div>
                </div>
            </div>

            {/* Map Selector Modal */}
            {showMapSelector && (
                <div className={styles.mapOverlay} onClick={() => setShowMapSelector(false)}>
                    <div className={styles.mapModal} onClick={e => e.stopPropagation()}>
                        <h3 className={styles.mapModalTitle}>
                            {language === 'ru' ? 'Выберите карту' : 'Select Maps'}
                        </h3>
                        <div className={styles.mapOptions}>
                            <a
                                href="https://2gis.kz/astana/search/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%2C+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C+%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4+69%2C+%D0%B7%D0%B4.+1%D0%90"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapOption}
                            >
                                <img src="https://2gis.kz/favicon.ico" alt="" className={styles.mapOptionIcon} />
                                <span>2GIS</span>
                            </a>
                            <a
                                href="https://yandex.kz/maps/?text=%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%2C+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C+%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4+69%2C+%D0%B7%D0%B4.+1%D0%90"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapOption}
                            >
                                <img src="https://yastatic.net/icon-static/maps/favicon.ico" alt="" className={styles.mapOptionIcon} />
                                <span>Yandex Maps</span>
                            </a>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD%2C+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%2C+%D0%9F%D1%80%D0%BE%D0%B5%D0%B7%D0%B4+69%2C+1%D0%90"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mapOption}
                            >
                                <img src="https://www.google.com/s2/favicons?sz=64&domain=google.com/maps" alt="" className={styles.mapOptionIcon} />
                                <span>Google Maps</span>
                            </a>
                        </div>
                        <button className={styles.closeButton} onClick={() => setShowMapSelector(false)}>
                            {language === 'ru' ? 'Закрыть' : 'Close'}
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
}
