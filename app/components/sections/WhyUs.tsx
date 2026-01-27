import styles from './WhyUs.module.css';

export default function WhyUs() {
    const points = [
        "Собственный парк спецтехники и производственная база",
        "Аккредитованный поставщик для G2B и крупных недропользователей",
        "Партнерство с мировыми лидерами (Power China, KPO)",
        "EPC-подход: от проектирования до ввода в эксплуатацию",
        "Собственные складские резервы и отлаженная логистика"
    ];

    return (
        <section className={`section ${styles.whyUsSection}`}>
            <div className={`container ${styles.container}`}>
                <h2 style={{ marginBottom: '40px' }}>Ключевые компетенции</h2>
                <ul className={styles.list}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.item}>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
