"use client";

import styles from './Hero.module.css';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Glass Background Panel - Absolute */}
            <div className={styles.glassPanel}></div>

            {/* Content Container - Aligned with Global Layout */}
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    RBI Engineering Group
                </h1>
                <p className={styles.subtitle}>
                    Строительство и модульные сооружения в Казахстане
                </p>
                <p className={styles.description}>
                    Выполняем строительно-монтажные работы любой сложности и строим мобильные модульные сооружения. Ставим на технологии, качество и оперативность.
                </p>
                <div className={styles.buttonGroup}>
                    <Button href="/contacts" variant="primary">Запросить предложение</Button>
                    <Button href="/projects" variant="outline">Смотреть проекты</Button>
                </div>
                <div className={styles.trustLine}>
                    13+ лет • 62+ проектов • лицензия 1 категории
                </div>
            </div>
        </section>
    );
}
