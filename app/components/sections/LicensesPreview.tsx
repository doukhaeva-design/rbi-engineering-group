
import styles from './LicensesPreview.module.css';
import Button from '../ui/Button';

export default function LicensesPreview() {
    return (
        <section className={`section ${styles.section}`} id="licenses">
            <div className={`container`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Лицензии и документы</h2>
                    <p className={styles.text}>
                        Компания имеет лицензию на строительно-монтажные работы 1 категории и приложения к лицензии (перечень работ).
                    </p>
                    <Button href="/licenses" variant="outline">Смотреть документы</Button>
                </div>
            </div>
        </section>
    );
}
