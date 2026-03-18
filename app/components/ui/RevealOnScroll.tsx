"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number; // In seconds
    threshold?: number;
}

export default function RevealOnScroll({
    children,
    className = '',
    delay = 0,
    threshold = 0.2 // Default strictly
}: RevealOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    const style = {
        transitionDelay: `${delay}s`,
    };

    return (
        <div
            ref={ref}
            className={`${styles.revealContainer} ${isVisible ? styles.visible : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}
