
import styles from './ModularPreview.module.css';
import Button from '../ui/Button';

export default function ModularPreview() {
    return (
        <section className={`section ${styles.section}`} id="modular">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Модульные сооружения</h2>
                    <p className={styles.text}>
                        Модульные сооружения — это быстрый и практичный способ получить готовое помещение.<br />
                        Подходит для удалённых локаций и разных типов объектов.
                    </p>

                    {/* Simplified for Home Page to reduce redundancy */}
                    <div className={styles.detailsGrid}>
                        <div className={styles.detailBlock}>
                            <h3 className={styles.subtitle}>Почему это выгодно?</h3>
                            <p className={styles.detailText}>
                                Экономия времени и бюджета: здания собираются как конструктор прямо на объекте.
                                Полная заводская готовность, включая отделку и инженерные системы.
                            </p>
                            <ul className={styles.list} style={{ marginTop: '20px' }}>
                                <li>• Сборка за несколько дней</li>
                                <li>• Работает в любых погодных условиях</li>
                                <li>• Легко перевезти на новое место</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Button href="/modular" variant="outline">Подробнее о модульных решениях</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
