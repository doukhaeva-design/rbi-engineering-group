import styles from './Activities.module.css';
import Button from '../ui/Button';

export default function Activities() {
    const items = [
        {
            title: "Модульные сооружения",
            desc: "Быстрое строительство модульных объектов под разные задачи."
        },
        {
            title: "Строительно-монтажные работы (СМР)",
            desc: "Выполняем СМР любой сложности."
        },
        {
            title: "Инженерные сети",
            desc: "Прокладка инженерных сетей и сопровождение работ на объекте."
        },
        {
            title: "Отделочные работы",
            desc: "Внутренние и внешние отделочные работы в рамках проекта."
        },
        {
            title: "Проектирование и планирование",
            desc: "Градостроительное проектирование и планирование."
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Монтаж и демонтаж конструкций любой сложности."
        }
    ];

    return (
        <section className={`section`} id="services">
            <div className={`container`}>
                <h2 style={{ marginBottom: '10px' }}>Услуги</h2>
                <p style={{ marginBottom: '40px', fontSize: '18px', color: '#ccc' }}>Берём на себя отдельные этапы или полный комплекс работ.</p>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Button href="/services" variant="outline">Все услуги</Button>
                </div>
            </div>
        </section>
    );
}
