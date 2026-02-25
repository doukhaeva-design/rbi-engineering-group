"use client";

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';
import { useLanguage } from '../../context/LanguageContext';

interface BackButtonProps {
    label?: string;
    style?: React.CSSProperties;
}

export default function BackButton({ label, style }: BackButtonProps) {
    const router = useRouter();
    const { t } = useLanguage();

    return (
        <button
            onClick={() => router.back()}
            className={styles.backBtn}
            style={style}
        >
            ← {label || t("button.back")}
        </button>
    );
}
