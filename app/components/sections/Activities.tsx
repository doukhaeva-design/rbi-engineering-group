import styles from './Activities.module.css';

export default function Activities() {
    const items = [
        {
            title: "Модульные сооружения",
            desc: "Строительство вахтовых городков, штабов и общежитий под ключ с полной инфраструктурой"
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Капитальное строительство промышленных объектов, ангаров и технических сооружений"
        },
        {
            title: "Инженерные сети",
            desc: "Комплексная инженерная инфраструктура: водоснабжение, электрификация, канализация"
        },
        {
            title: "Монтаж конструкций",
            desc: "Монтаж сложных металлоконструкций, резервуаров и технологического оборудования"
        }
    ];

    return (
        <section className={`section`} id="directions">
            <div className={`container`}>
                <h2 style={{ marginBottom: '40px' }}>Направления деятельности</h2>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
