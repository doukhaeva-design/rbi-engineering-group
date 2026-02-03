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
                    RBI Engineering<br /> Group
                </h1>
                <p className={styles.subtitle}>
                    Строительство и модульные сооружения в&nbsp;Казахстане
                </p>
                <p className={styles.description}>
                    Выполняем строительно-монтажные работы любой сложности и строим мобильные модульные сооружения. Ставим на технологии, качество и оперативность.
                </p>
                <div className={styles.buttonGroup}>
                    <Button href="/contacts" variant="primary">Запросить предложение</Button>
                    <Button href="/projects" variant="outline">Смотреть проекты</Button>
                </div>
                <div className={styles.trustLine}>
                    <span>• 13+ лет • 62+ проекта </span>
                    <span className={styles.trustBreak}>• Лицензия 1 категории</span>
                </div>
            </div>
        </section>
    );
}
