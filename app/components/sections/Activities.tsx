import Image from 'next/image';
import styles from './Activities.module.css';
import Button from '../ui/Button';

export default function Activities() {
    const items = [
        {
            title: "Модульные сооружения",
            desc: "Оперативное возведение высокотехнологичных объектов «под ключ».",
            image: "/assets/drawings/modular_3d.png"
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Профессиональная реализация масштабных инфраструктурных и промышленных проектов.",
            image: "/assets/drawings/construction_3d.png"
        },
        {
            title: "Инженерные сети",
            desc: "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем.",
            image: "/assets/drawings/networks_3d.png"
        },
        {
            title: "Отделочные работы",
            desc: "Финальная отделка премиального уровня с использованием износостойких материалов.",
            image: "/assets/drawings/finishing_3d.png"
        },
        {
            title: "Проектирование и планирование",
            desc: "Разработка высокоточной проектной документации и генеральное планирование.",
            image: "/assets/drawings/planning_3d.png"
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба.",
            image: "/assets/drawings/mounting_3d.png"
        }
    ];

    return (
        <section className={`section ${styles.activitiesSection}`} id="services">
            <div className={`container`}>
                <h2 className={styles.sectionTitle}>Комплексные инженерные решения</h2>
                <p className={styles.sectionDescription}>Обеспечиваем безупречное качество исполнения на каждом этапе проекта.</p>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardNumber}>0{index + 1}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={styles.sketchImage}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Button href="/services" variant="filled">Все услуги</Button>
                </div>
            </div>
        </section>
    );
}
