import styles from './About.module.css';

export default function About() {
    return (
        <section className={`section ${styles.aboutSection}`} id="about">
            <div className={`container ${styles.container}`}>
                <p className={styles.text}>
                    RBI Engineering Group — генеральный подрядчик в сфере промышленного строительства.
                    Мы объединяем собственную техническую базу, международные стандарты и опыт работы
                    с недропользователями для реализации стратегических объектов.
                </p>
            </div>
        </section>
    );
}
