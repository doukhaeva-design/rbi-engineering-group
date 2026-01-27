import styles from './Hero.module.css';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <h1 className={styles.title}>
                    Промышленное строительство и инжиниринг
                </h1>
                <p className={styles.subtitle}>
                    Реализация инфраструктурных проектов полного цикла<br />
                    для бизнеса и государственного сектора
                </p>
                <div className={styles.buttonGroup}>
                    <Button href="#projects" variant="outline">Проекты</Button>
                    <Button href="#contacts" variant="primary">Рассчитать проект</Button>
                </div>
            </div>
        </section>
    );
}
