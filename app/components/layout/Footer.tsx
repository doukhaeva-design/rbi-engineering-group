"use client";

import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
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
                            <span className={styles.contactItem}>+7 702 555 51 69</span>
                            <span className={styles.contactItem}>info@rbi.asia</span>
                            <span>{t('footer.address')}</span>
                            <span className={styles.bin}>{t("footer.bin")}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>© 2026 RBI Engineering Group. {t('footer.rights')}</div>
                </div>
            </div>
        </footer>
    );
}
