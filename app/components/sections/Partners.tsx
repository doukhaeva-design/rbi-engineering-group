import styles from './Partners.module.css';

export default function Partners() {
    return (
        <section className={`section ${styles.partnersSection}`}>
            <div className={`container`}>
                <h2 style={{ marginBottom: '40px' }}>Наши партнёры и заказчики</h2>
                <div className={styles.logos}>
                    {/* Placeholders for logos */}
                    <div className={styles.logoItem}>Logo 1</div>
                    <div className={styles.logoItem}>Logo 2</div>
                    <div className={styles.logoItem}>Logo 3</div>
                    <div className={styles.logoItem}>Logo 4</div>
                    <div className={styles.logoItem}>Logo 5</div>
                </div>
            </div>
        </section>
    );
}
