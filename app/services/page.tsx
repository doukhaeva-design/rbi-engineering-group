import Image from 'next/image';
import Header from "../components/layout/Header";
import styles from "./services.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
    const services = [
        {
            title: "Модульные сооружения",
            desc: "Оперативное возведение высокотехнологичных объектов «под ключ».",
            details: [
                "Сборно-разборные конструкции",
                "Полная внутренняя отделка и коммуникации",
                "Адаптация под климатические условия",
                "Дополнительная кровля, крыльцо и лестницы",
                "Инженерные системы: отопление, вентиляция, электрика"
            ],
            image: "/assets/drawings/modular_3d.png"
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Профессиональная реализация масштабных инфраструктурных и промышленных проектов.",
            details: [
                "Монтаж каркасов зданий и сооружений",
                "Устройство фундаментов любой сложности",
                "Кровельные и фасадные работы",
                "Монтаж сэндвич-панелей"
            ],
            image: "/assets/drawings/construction_3d.png"
        },
        {
            title: "Инженерные сети",
            desc: "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем.",
            details: [
                "Прокладка сетей водоснабжения и канализации",
                "Монтаж систем отопления и теплоснабжения",
                "Электромонтажные работы"
            ],
            image: "/assets/drawings/networks_3d.png"
        },
        {
            title: "Отделочные работы",
            desc: "Финальная отделка премиального уровня с использованием износостойких материалов.",
            details: [
                "Внутренняя отделка помещений",
                "Фасадные решения",
                "Укладка напольных покрытий"
            ],
            image: "/assets/drawings/finishing_3d.png"
        },
        {
            title: "Проектирование и планирование",
            desc: "Разработка высокоточной проектной документации и генеральное планирование.",
            details: [
                "Разработка эскизных и рабочих проектов",
                "Генеральное планирование территории",
                "Авторский надзор"
            ],
            image: "/assets/drawings/planning_3d.png"
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба.",
            details: [
                "Монтаж технологического оборудования",
                "Демонтаж зданий и сооружений",
                "Передислокация объектов"
            ],
            image: "/assets/drawings/mounting_3d.png"
        }
    ];

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <BackButton />
                    <h1 className={styles.heroTitle}>Наши услуги</h1>
                    <p className={styles.heroText}>
                        Мы выполняем строительные и инженерные работы, а также строим модульные сооружения под разные задачи.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardContent}>
                                    <span className={styles.cardNumber}>0{index + 1}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDesc}>{item.desc}</p>

                                    {/* Render details list if available */}
                                    {item.details && (
                                        <ul className={styles.detailsList}>
                                            {item.details.map((detail, idx) => (
                                                <li key={idx} className={styles.detailItem}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
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

                    <div style={{ marginTop: '60px', textAlign: 'center' }}>
                        <Button href="/contacts" variant="primary">Запросить расчёт стоимости</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
