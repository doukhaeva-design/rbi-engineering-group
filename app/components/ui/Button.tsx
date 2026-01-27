import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
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
            <a href={href} className={buttonClass}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
