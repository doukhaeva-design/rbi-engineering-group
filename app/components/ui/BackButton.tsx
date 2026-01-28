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
        <button
            onClick={() => router.back()}
            className={styles.backBtn}
            style={style}
        >
            ← {label}
        </button>
    );
}
