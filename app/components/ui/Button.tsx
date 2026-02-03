import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'filled';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    type = 'button'
}: ButtonProps) {
    const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
