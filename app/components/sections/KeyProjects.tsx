import styles from './KeyProjects.module.css';

export default function KeyProjects() {
    // Creating 4 placeholder projects based on the example to fill the 2x2 grid
    const projects = [
        {
            title: "ВЭС «Хромтау»",
            type: "Монтаж конструкций",
            specs: [
                { label: "Заказчик", value: "Power China" },
                { label: "Год", value: "2023-2024" },
                { label: "Объем", value: "150 МВт" }
            ]
        },
        {
            title: "Проект Алматы",
            type: "Модульное здание",
            specs: [
                { label: "Заказчик", value: "KPO" },
                { label: "Год", value: "2023" },
                { label: "Площадь", value: "1200 м²" }
            ]
        },
        {
            title: "Завод Астана",
            type: "Инженерные сети",
            specs: [
                { label: "Статус", value: "Генподряд" },
                { label: "Год", value: "2024" },
                { label: "Тип", value: "Реконструкция" }
            ]
        },
        {
            title: "Вахтовый поселок",
            type: "Строительство «под ключ»",
            specs: [
                { label: "Заказчик", value: "ТенгизШевройл" },
                { label: "Год", value: "2022" },
                { label: "Мест", value: "500 чел" }
            ]
        }
    ];

    return (
        <section className={`section`} id="projects">
            <div className={`container`}>
                <h2 style={{ marginBottom: '40px' }}>Ключевые проекты</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imagePlaceholder}></div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <p className={styles.type}>{project.type}</p>
                                    <h3 className={styles.title}>{project.title}</h3>
                                </div>
                                <div className={styles.specs}>
                                    {project.specs.map((spec, i) => (
                                        <div key={i} className={styles.specItem}>
                                            <span className={styles.specLabel}>{spec.label}</span>
                                            <span className={styles.specValue}>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
