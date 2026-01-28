import styles from './Activities.module.css';
import Button from '../ui/Button';

export default function Activities() {
    const items = [
        {
            title: "Модульные сооружения",
            desc: "Оперативное возведение высокотехнологичных объектов «под ключ»."
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Профессиональная реализация масштабных инфраструктурных и промышленных проектов."
        },
        {
            title: "Инженерные сети",
            desc: "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем."
        },
        {
            title: "Отделочные работы",
            desc: "Финальная отделка премиального уровня с использованием износостойких материалов."
        },
        {
            title: "Проектирование и планирование",
            desc: "Разработка высокоточной проектной документации и генеральное планирование."
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба."
        }
    ];

    return (
        <section className={`section`} id="services">
            <div className={`container`}>
                <h2 style={{ marginBottom: '10px' }}>Комплексные инженерные решения</h2>
                <p style={{ marginBottom: '40px', fontSize: '18px', color: '#ccc' }}>Обеспечиваем безупречное качество исполнения на каждом этапе проекта.</p>
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
