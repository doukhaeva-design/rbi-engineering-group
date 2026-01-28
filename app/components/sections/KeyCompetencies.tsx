
import styles from './KeyCompetencies.module.css';

export default function KeyCompetencies({ limited = false }: { limited?: boolean }) {
    const fullCompetencies = [
        {
            title: "Опыт и масштаб",
            desc: "13+ лет на рынке Казахстана, 62+ реализованных проектов."
        },
        {
            title: "Профессиональная команда",
            desc: "50+ сотрудников, регулярная аттестация и повышение квалификации."
        },
        {
            title: "Техническая база",
            desc: "Собственный парк 53+ единиц строительной техники и сервисная служба."
        },
        {
            title: "Специализация на модулях",
            desc: "Знаем особенности модульных сооружений и комплектаций."
        },
        {
            title: "Партнёрская сеть",
            desc: "Сотрудничество с крупными производителями и компаниями (DoorHan, Power China и др.)."
        },
        {
            title: "Документы и подтверждения",
            desc: "Лицензия 1 категории и 68+ рекомендательных писем."
        }
    ];

    // Show only 3 items if limited is true
    const competencies = limited ? fullCompetencies.slice(0, 3) : fullCompetencies;

    return (
        <section className={`section-alt ${styles.section}`}>
            <div className={`container`}>
                <h2 className={styles.title}>{limited ? 'Почему выбирают нас' : 'Ключевые компетенции'}</h2>
                <div className={styles.grid}>
                    {competencies.map((comp, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.marker}></div>
                            <div>
                                <h3 className={styles.compTitle}>{comp.title}</h3>
                                <p className={styles.compDesc}>{comp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
