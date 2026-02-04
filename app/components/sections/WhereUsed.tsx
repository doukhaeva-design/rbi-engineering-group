
import styles from './WhereUsed.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function WhereUsed() {
    const items = [
        {
            text: "Посты охраны / КПП",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7V12C3 17.52 6.84 22.74 12 24C17.16 22.74 21 17.52 21 12V7L12 2Z" fill="#2F5D9F" />
                    <path d="M12 6L13.1 9.3H16.6L13.8 11.4L14.9 14.7L12 12.6L9.1 14.7L10.2 11.4L7.4 9.3H10.9L12 6Z" fill="#EAA52F" />
                </svg>
            )
        },
        {
            text: "Диспетчерские и технические помещения",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="15" rx="2" fill="#2F5D9F" />
                    <rect x="4" y="6" width="16" height="11" rx="1" fill="#EBF0F5" />
                    <path d="M12 18V22" stroke="#EAA52F" strokeWidth="3" strokeLinecap="round" />
                    <path d="M8 22H16" stroke="#EAA52F" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="12" cy="11.5" r="2.5" fill="#EAA52F" />
                    <path d="M6 9H8M6 11H8M6 13H8" stroke="#2F5D9F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            text: "Заводы",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 21H2V8L8 12V8L14 12V4L22 9V21Z" fill="#2F5D9F" />
                    <rect x="5" y="14" width="4" height="4" fill="#EAA52F" />
                    <rect x="11" y="14" width="4" height="4" fill="#EAA52F" />
                    <rect x="17" y="14" width="3" height="4" fill="#EAA52F" />
                    <path d="M14 4L22 9V5L14 0V4Z" fill="#EAA52F" fillOpacity="0.5" />
                    <path d="M17 2C17.5 1.5 18 1 19 1C20.5 1 20.5 2.5 22 3" stroke="#EAA52F" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            text: "Ветровые электростанции",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="11" y="9" width="2" height="13" fill="#2F5D9F" />
                    <path d="M12 9C12 9 8 3 5 5C2 7 8 9 12 9Z" fill="#EAA52F" />
                    <path d="M12 9C12 9 18 4 20 7C22 10 12 9 12 9Z" fill="#EAA52F" />
                    <path d="M12 9C12 9 13 16 10 18C7 20 12 9 12 9Z" fill="#EAA52F" />
                    <circle cx="12" cy="9" r="1.5" fill="#FFFFFF" />
                </svg>
            )
        },
        {
            text: "Мобильные офисы и школы",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="6" width="20" height="14" rx="2" fill="#2F5D9F" />
                    <path d="M22 6L2 6L4 3H20L22 6Z" fill="#EAA52F" />
                    <rect x="5" y="10" width="5" height="5" rx="0.5" fill="#EAA52F" />
                    <rect x="14" y="10" width="5" height="5" rx="0.5" fill="#EAA52F" />
                    <rect x="5" y="10" width="5" height="5" stroke="white" strokeWidth="1" />
                    <rect x="14" y="10" width="5" height="5" stroke="white" strokeWidth="1" />
                </svg>
            )
        },
        {
            text: "Военное строительство",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M19 5L5 5L2 9L5 20H19L22 9L19 5Z" fill="#2F5D9F" />
                    <path d="M12 9L14.12 13.5H19L15.34 16.59L16.44 21.5L12 18.77L7.56 21.5L8.66 16.59L5 13.5H9.88L12 9Z" fill="#EAA52F" />
                    <path d="M5 5L7 2H17L19 5" stroke="#EAA52F" strokeWidth="2" />
                </svg>
            )
        },
        {
            text: "Жилые и медицинские объекты",
            icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L2 12H5V21H19V12H22L12 3Z" fill="#2F5D9F" />
                    <rect x="9" y="14" width="6" height="7" fill="white" />
                    <rect x="10" y="7" width="4" height="4" fill="#EAA52F" />
                    <path d="M11 6V10M9 8H13" stroke="white" strokeWidth="1.5" />
                </svg>
            )
        }
    ];

    return (
        <section className={`section-alt ${styles.section}`}>
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 className={styles.title}>Сферы применения</h2>
                </RevealOnScroll>
                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <p className={styles.text}>{item.text}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
