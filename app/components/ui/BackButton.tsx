"use client";

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

interface BackButtonProps {
    label?: string;
    style?: React.CSSProperties;
}

export default function BackButton({ label = "Назад", style }: BackButtonProps) {
    const router = useRouter();

    return (
        <div className={styles.containerWrapper}>
            <button
                onClick={() => router.back()}
                className={styles.backBtn}
                style={style}
            >
                ← {label}
            </button>
        </div>
    );
}
