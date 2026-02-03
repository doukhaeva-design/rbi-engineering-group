import Image from 'next/image';
import styles from './KeyCompetencies.module.css';

export default function KeyCompetencies({ limited = false }: { limited?: boolean }) {
    const fullCompetencies = [
        {
            title: "Опыт и масштаб",
            desc: "13+ лет на рынке Казахстана, 62+ реализованных проектов.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-8a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v8" stroke="#2F5D9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="10" y="9" width="4" height="4" fill="#EAA52F" />
                </svg>
            )
        },
        {
            title: "Профессиональная команда",
            desc: "50+ сотрудников, регулярная аттестация и повышение квалификации.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="7" r="4" stroke="#2F5D9F" strokeWidth="2" />
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#2F5D9F" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="7" r="2" fill="#EAA52F" />
                </svg>
            )
        },
        {
            title: "Техническая база",
            desc: "Собственный парк 53+ единиц строительной техники и сервисная служба.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M15 6h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" stroke="#2F5D9F" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" stroke="#EAA52F" strokeWidth="2" />
                    <path d="M12 2v4M12 18v4" stroke="#2F5D9F" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "Специализация на модулях",
            desc: "Знаем особенности модульных сооружений и комплектаций.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#2F5D9F" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05" stroke="#2F5D9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22.08V12" stroke="#EAA52F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Партнёрская сеть",
            desc: "Сотрудничество с крупными производителями и компаниями (DoorHan, Power China и др.).",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="18" cy="5" r="3" stroke="#2F5D9F" strokeWidth="2" />
                    <circle cx="6" cy="12" r="3" stroke="#2F5D9F" strokeWidth="2" />
                    <circle cx="18" cy="19" r="3" stroke="#2F5D9F" strokeWidth="2" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="#EAA52F" strokeWidth="2" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="#EAA52F" strokeWidth="2" />
                </svg>
            )
        },
        {
            title: "Документы и подтверждения",
            desc: "Лицензия 1 категории и 68+ рекомендательных писем.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#2F5D9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="14 2 14 8 20 8" stroke="#2F5D9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="#EAA52F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="#EAA52F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="10 9 9 9 8 9" stroke="#EAA52F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    // Show only 3 items if limited is true, BUT actually for the "Why Choose Us" look user might want more text or specific layout. 
    // The previous code had slice(0,3). I will keep logic but if layout changes, sticking to 3 might leave big empty space if image is tall.
    // However, usually "Why Choose Us" has 3-4 points. Let's keep existing logic.
    const competencies = limited ? fullCompetencies.slice(0, 3) : fullCompetencies;

    return (
        <section className={`section ${styles.section}`}>
            <div className={`container`}>
                <h2 className={styles.title}>{limited ? 'Почему выбирают нас' : 'Ключевые компетенции'}</h2>

                <div className={limited ? styles.splitLayout : ''}>
                    {limited && (
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/PochemuNasVibirayut.png"
                                alt="Почему выбирают RBI Engineering Group"
                                fill
                                className={styles.image}
                            />
                        </div>
                    )}

                    <div className={styles.grid}>
                        {competencies.map((comp, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    {comp.icon}
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.compTitle}>{comp.title}</h3>
                                    <p className={styles.compDesc}>{comp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
