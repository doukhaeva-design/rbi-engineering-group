"use client";

import styles from './CTA.module.css';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export default function CTA() {
    const { t } = useLanguage();
    return (
        <section className={`section ${styles.ctaSection}`} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('cta.title')}</h2>
                    <p className={styles.text}>
                        {t('cta.text')}
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <Button href="/contacts" variant="primary">
                            <span className={styles.desktopText}>{t('cta.button')}</span>
                            <span className={styles.mobileText}>{t('cta.button.mobile')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
