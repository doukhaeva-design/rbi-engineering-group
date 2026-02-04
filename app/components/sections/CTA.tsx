import styles from './CTA.module.css';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <section className={`section-alt ${styles.ctaSection}`} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Начните сотрудничество</h2>
                    <p className={styles.text}>
                        Опишите задачу и сроки, и мы свяжемся с вами для уточнения деталей и подготовки предложения.
                    </p>
                    <div style={{ marginTop: '30px' }}>
                        <Button href="/contacts" variant="primary">
                            <span className={styles.desktopText}>Запросить коммерческое предложение</span>
                            <span className={styles.mobileText}>Запросить предложение</span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
