"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './KeyFigures.module.css';

const AnimatedCounter = ({ value, suffix, label }: { value: number, suffix: string, label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cancel any existing animation when state changes
                if (frameRef.current) cancelAnimationFrame(frameRef.current);

                if (entry.isIntersecting) {
                    let startTime: number | null = null;
                    const duration = 2000;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);
                        const ease = 1 - Math.pow(1 - percentage, 3); // Cubic ease out

                        setCount(Math.floor(ease * value));

                        if (progress < duration) {
                            frameRef.current = requestAnimationFrame(animate);
                        } else {
                            setCount(value);
                        }
                    };
                    frameRef.current = requestAnimationFrame(animate);
                } else {
                    // Reset to 0 when scrolled out of view to allow re-animation
                    setCount(0);
                }
            },
            { threshold: 0.2 } // Lower threshold slightly so it triggers earlier/keeps easier
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            observer.disconnect();
        };
    }, [value]);

    return (
        <div className={styles.item} ref={ref}>
            <div className={styles.number}>
                {count}<span className={styles.suffix}>{suffix}</span>
            </div>
            <div className={styles.label}>{label}</div>
        </div>
    );
};

export default function KeyFigures() {
    const figures = [
        { value: 13, suffix: "+", label: "лет на рынке Казахстана" },
        { value: 62, suffix: "+", label: "реализованных проектов" },
        { value: 50, suffix: "+", label: "сотрудников" },
        { value: 53, suffix: "+", label: "единицы строительной техники" },
        { value: 68, suffix: "+", label: "рекомендательных писем" },
        { value: 1, suffix: " кат.", label: "лицензия на СМР" },
    ];

    return (
        <section className={`section-alt ${styles.figuresSection}`}>
            <div className={`container ${styles.grid}`}>
                {figures.map((item, index) => (
                    <AnimatedCounter
                        key={index}
                        value={item.value}
                        suffix={item.suffix}
                        label={item.label}
                    />
                ))}
            </div>
        </section>
    );
}
