
"use client";

import styles from './LicensesPreview.module.css';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export default function LicensesPreview() {
    const { t } = useLanguage();
    return (
        <section className={`section ${styles.section}`} id="licenses">
            <div className={`container`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{t('licenses.title')}</h2>
                    <p className={styles.text}>
                        {t('licenses.text')}
                    </p>
                    <Button href="/licenses" variant="outline">{t('licenses.button')}</Button>
                </div>
            </div>
        </section>
    );
}
