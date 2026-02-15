"use client";

import Link from "next/link";
import styles from "./not-found.module.css";
import Button from "./components/ui/Button";
import { useLanguage } from "./context/LanguageContext";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('notfound.title')}</h1>
                <h2 className={styles.subtitle}>{t('notfound.subtitle')}</h2>
                <p className={styles.text}>{t('notfound.text')}</p>
                <Button href="/" variant="primary">
                    {t('notfound.button')}
                </Button>
            </div>
        </div>
    );
}
