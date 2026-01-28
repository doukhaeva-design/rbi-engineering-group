
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
    return (
        <section className={`section ${styles.section}`} style={{ paddingBottom: 0 }} id="about">
            <div className={`container`}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        <span className={styles.companyName}>RBI Engineering Group</span> — строительная компания, специализирующаяся на строительстве, строительно-монтажных работах и возведении мобильных модульных сооружений в Казахстане.
                    </p>
                </div>
            </div>
        </section>
    );
}
