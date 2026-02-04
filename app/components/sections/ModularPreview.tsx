
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
                    <div className={styles.benefitsBlock}>
                        <h3 className={styles.subtitle}>Почему это выгодно?</h3>
                        <p className={styles.detailText}>
                            Экономия времени и бюджета: здания собираются как конструктор прямо на объекте. Полная заводская готовность, включая отделку и инженерные системы.
                        </p>

                        <div className={styles.cardsGrid}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h4 className={styles.cardTitle}>Быстро</h4>
                                <p className={styles.cardText}>Сборка за несколько дней</p>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L3 7V12C3 17.52 7.5 22 12 22C16.5 22 21 17.52 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className={styles.cardTitle}>Надежно</h4>
                                <p className={styles.cardText}>Работает в любых погодных условиях</p>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H9C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19V17H5V19ZM13 17V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V17H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 5H21V17H3V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 5V3H17V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className={styles.cardTitle}>Мобильно</h4>
                                <p className={styles.cardText}>Легко перевезти на новое место</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Button href="/modular" variant="filled">Подробнее о модульных решениях</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
