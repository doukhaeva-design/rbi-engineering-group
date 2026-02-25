import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'filled' | 'blue';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    iconRight?: React.ReactNode;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    type = 'button',
    iconRight
}: ButtonProps) {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                <span className={styles.buttonText}>{children}</span>
                {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            <span className={styles.buttonText}>{children}</span>
            {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </button>
    );
}
