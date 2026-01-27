import styles from './CTA.module.css';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <section className={`section ${styles.ctaSection}`} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Начните сотрудничество</h2>
                    <Button variant="primary">Запросить коммерческое предложение</Button>
                </div>
                <div className={styles.right}>
                    <p className={styles.contactText}>Казахстан, г. Астана</p>
                    <p className={styles.contactText} style={{ fontWeight: 'bold' }}>+7 702 555 51 69</p>
                    <p className={styles.contactText}>info@rbi.asia</p>
                </div>
            </div>
        </section>
    );
}
