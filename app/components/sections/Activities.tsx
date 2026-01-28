import styles from './Activities.module.css';
import Button from '../ui/Button';

export default function Activities() {
    const items = [
        {
            title: "Модульные сооружения",
            desc: "Оперативное возведение высокотехнологичных объектов «под ключ».",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                    <rect x="8" y="3" width="7" height="7" rx="1" />
                    <path d="M10 7h4M7 14l3-4M14 10l3 4" strokeDasharray="2 2" />
                </svg>
            )
        },
        {
            title: "Строительно-монтажные работы",
            desc: "Профессиональная реализация масштабных инфраструктурных и промышленных проектов.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 21h18M5 21V7l8-4v18M13 21l8-5V7" />
                    <path d="M9 9h0M9 12h0M9 15h0M17 10h0M17 13h0" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Инженерные сети",
            desc: "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 12H15M9 12H3M12 3v6M12 15v6" />
                    <path d="M10 9a2 2 0 114 0c0 4-4 4-4 8" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            title: "Отделочные работы",
            desc: "Финальная отделка премиального уровня с использованием износостойких материалов.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 14.5l5-5m0 0l5 5m-5-5V22M12 14.5l5-5m0 0l5 5m-5-5V22" />
                    <path d="M2 2h20" />
                </svg>
            )
        },
        {
            title: "Проектирование и планирование",
            desc: "Разработка высокоточной проектной документации и генеральное планирование.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4" />
                    <path d="M13 3h4a2 2 0 012 2v12a4 4 0 01-4 4" />
                    <path d="M2 11h20M7 3v18M17 3v18" />
                </svg>
            )
        },
        {
            title: "Монтаж / демонтаж",
            desc: "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v8l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path d="M12 7l-2 2h4l-2-2z" />
                </svg>
            )
        }
    ];

    return (
        <section className={`section-alt`} id="services">
            <div className={`container`}>
                <h2 style={{ marginBottom: '10px' }}>Комплексные инженерные решения</h2>
                <p style={{ marginBottom: '40px', fontSize: '18px', color: '#ccc' }}>Обеспечиваем безупречное качество исполнения на каждом этапе проекта.</p>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <span className={styles.cardNumber}>0{index + 1}</span>
                                <div className={styles.iconContainer}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Button href="/services" variant="outline">Все услуги</Button>
                </div>
            </div>
        </section>
    );
}
