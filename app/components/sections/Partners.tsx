import styles from './Partners.module.css';

export default function Partners() {
    return (
        <section className={`section ${styles.partnersSection}`}>
            <div className={`container`}>
                <h2 style={{ marginBottom: '10px' }}>Партнёры и заказчики</h2>
                <p style={{ marginBottom: '40px', fontSize: '18px', color: '#ccc' }}>Сотрудничаем с крупными партнёрами и выполняем проекты для организаций на постоянной основе.</p>

                <h3 className={styles.subheading}>Партнёры</h3>
                <div className={styles.logos}>
                    <div className={styles.logoItem}>DoorHan</div>
                    <div className={styles.logoItem}>Power China</div>
                    <div className={styles.logoItem}>Smart Group</div>
                    <div className={styles.logoItem}>Ryterna</div>
                </div>

                <h3 className={styles.subheading} style={{ marginTop: '40px' }}>Постоянные заказчики</h3>
                <div className={styles.logos}>
                    <div className={styles.logoItem}>Национальный ЖД оператор РК</div>
                    <div className={styles.logoItem}>Медицинские страховые организации РК</div>
                    <div className={styles.logoItem}>Акимат города Нур-Султан</div>
                </div>
            </div>
        </section>
    );
}
