import Image from 'next/image';
import styles from './Activities.module.css';
import Button from '../ui/Button';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Activities() {
    const items = [
        {
            title: "МОДУЛЬНЫЕ СООРУЖЕНИЯ",
            desc: "Оперативное возведение высокотехнологичных объектов «под ключ».",
            detail: "Для промышленных, инфраструктурных и удалённых объектов.",
            stamp: "RBI / MODULAR SYSTEM",
            image: "/assets/drawings/modular_3d.png"
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Профессиональная реализация масштабных инфраструктурных и промышленных проектов.",
            stamp: "СМР / I КАТЕГОРИЯ",
            image: "/assets/drawings/construction_3d.png"
        },
        {
            title: "Инженерные сети",
            desc: "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем.",
            stamp: "СЕТИ / ГЕНПЛАН",
            image: "/assets/drawings/networks_3d.png"
        },
        {
            title: "Отделочные работы",
            desc: "Финальная отделка премиального уровня с использованием износостойких материалов.",
            stamp: "ОТДЕЛКА / ПРЕМИУМ",
            image: "/assets/drawings/finishing_3d.png"
        },
        {
            title: "Проектирование и планирование",
            desc: "Разработка высокоточной проектной документации и генеральное планирование.",
            stamp: "ПРОЕКТ / BIM",
            image: "/assets/drawings/planning_3d.png"
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба.",
            stamp: "ТЕХ / МОНТАЖ",
            image: "/assets/drawings/mounting_3d.png"
        }
    ];

    return (
        <section className={`section ${styles.activitiesSection}`} id="services">
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 className={styles.sectionTitle}>Комплексные инженерные решения</h2>
                    <p className={styles.sectionDescription}>Обеспечиваем безупречное качество исполнения на каждом этапе проекта.</p>
                </RevealOnScroll>
                <div className={styles.contentLayout}>
                    {/* Main Direction */}
                    <div className={styles.groupWrapper}>
                        <h3 className={styles.groupTitle}>Основное направление</h3>
                        <div className={styles.mainCard}>
                            <RevealOnScroll className={styles.mainCardInner}>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardNumber}>01</span>
                                    <h3 className={styles.cardTitle}>{items[0].title}</h3>
                                    <p className={styles.cardDesc}>{items[0].desc}</p>
                                    <p className={styles.cardDetail}>{items[0].detail}</p>
                                    <div className={styles.mainCtaWrapper}>
                                        <Button href="/modular" variant="outline" className={styles.cardCta}>
                                            Рассчитать проект
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.stamp}>{items[0].stamp}</div>
                                    <Image
                                        src={items[0].image}
                                        alt={items[0].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={styles.sketchImage}
                                    />
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>

                    {/* Related Works */}
                    <div className={styles.groupWrapper}>
                        <h3 className={styles.groupTitle}>Сопутствующие работы</h3>
                        <div className={styles.grid}>
                            {items.slice(1).map((item, index) => (
                                <RevealOnScroll key={index} delay={index * 0.1} className={styles.cardWrapper}>
                                    <div className={styles.card}>
                                        <div className={styles.cardContent}>
                                            <span className={styles.cardNumber}>0{index + 2}</span>
                                            <h3 className={styles.cardTitle}>{item.title}</h3>
                                            <p className={styles.cardDesc}>{item.desc}</p>
                                        </div>
                                        <div className={styles.imageWrapper}>
                                            <div className={styles.stamp}>{item.stamp}</div>
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className={styles.sketchImage}
                                            />
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
                <RevealOnScroll delay={0.4}>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <Button href="/services" variant="filled">Все услуги</Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
