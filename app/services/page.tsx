
import Header from "../components/layout/Header";
import styles from "./services.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";

export default function ServicesPage() {
    const services = [
        {
            title: "Модульные сооружения",
            desc: "Быстрые здания из модулей, которые можно собрать на объекте.",
            details: [
                "Дополнительная кровля",
                "Крыльцо с козырьком",
                "Наружная лестница",
                "Дополнительные металлоконструкции",
                "Инженерные системы: электричество, отопление, вентиляция"
            ],
            button: "Обсудить модуль",
            link: "/modular"
        },
        {
            title: "Строительно-монтажные работы (СМР)",
            desc: "Выполняем СМР любой сложности.",
            button: "Запросить расчёт",
            link: "/contacts"
        },
        {
            title: "Инженерные сети",
            desc: "Прокладываем инженерные сети.",
            button: "Запросить расчёт",
            link: "/contacts"
        },
        {
            title: "Отделочные работы",
            desc: "Выполняем отделку помещений.",
            button: "Запросить расчёт",
            link: "/contacts"
        },
        {
            title: "Проектирование и планирование",
            desc: "Градостроительное проектирование и планирование.",
            button: "Запросить расчёт",
            link: "/contacts"
        },
        {
            title: "Монтаж и демонтаж",
            desc: "Монтаж и демонтаж любой сложности.",
            button: "Запросить расчёт",
            link: "/contacts"
        }
    ];

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <BackButton />
                    <h1 className={styles.heroTitle}>Услуги RBI Engineering Group</h1>
                    <p className={styles.heroText}>
                        Мы выполняем строительные и инженерные работы, а также строим модульные сооружения под разные задачи.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Primary Services */}
                    <div className={styles.primaryGrid}>
                        {/* Modular */}
                        <div className={`${styles.primaryCard} ${styles.accentModular}`}>
                            <h2 className={styles.primaryTitle}>Модульные сооружения</h2>
                            <p className={styles.primaryDesc}>
                                Комплексные решения «под ключ»: от производства до монтажа на объекте.
                                Быстровозводимые здания для вахтовых поселков, офисов и технических нужд.
                            </p>
                            <ul className={styles.detailList} style={{ color: '#bbb', lineHeight: '1.8' }}>
                                <li>• Сборно-разборные конструкции</li>
                                <li>• Полная внутренняя отделка и коммуникации</li>
                                <li>• Адаптация под климатические условия</li>
                            </ul>
                        </div>

                        {/* SMR */}
                        <div className={`${styles.primaryCard} ${styles.accentSMR}`}>
                            <h2 className={styles.primaryTitle}>Строительно-монтажные работы</h2>
                            <p className={styles.primaryDesc}>
                                Профессиональный монтаж металлоконструкций любой сложности,
                                строительство промышленных и гражданских объектов.
                            </p>
                            <ul className={styles.detailList} style={{ color: '#bbb', lineHeight: '1.8' }}>
                                <li>• Монтаж каркасов зданий и сооружений</li>
                                <li>• Устройство фундаментов</li>
                                <li>• Кровельные и фасадные работы</li>
                            </ul>
                        </div>
                    </div>

                    {/* Secondary Services Header */}
                    <h3 className={styles.sectionTitle}>Дополнительные услуги</h3>

                    {/* Secondary Services Grid */}
                    <div className={styles.secondaryGrid}>
                        {services.slice(2).map((service, index) => (
                            <div key={index} className={styles.secondaryCard}>
                                <h4 className={styles.secondaryTitle}>{service.title}</h4>
                                <p className={styles.secondaryDesc}>{service.desc}</p>
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
    );
}
