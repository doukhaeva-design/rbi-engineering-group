import styles from './Partners.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import Image from 'next/image';

export default function Partners() {
    return (
        <section className={`section ${styles.partnersSection}`}>
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '10px' }}>Партнёры и заказчики</h2>
                    <p style={{ marginBottom: '40px', fontSize: '18px' }}>Сотрудничаем с крупными партнёрами и выполняем проекты для организаций на постоянной основе.</p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                    <h3 className={styles.subheading}>Партнёры</h3>
                    <div className={styles.logos}>
                        {[
                            { name: 'DoorHan', src: '/partners/doorhan.png?v=2' },
                            { name: 'Power China', src: '/partners/powerchina.png?v=2' },
                            { name: 'Ryterna', src: '/partners/ryterna.png?v=2' },
                            { name: 'GMCS', src: '/partners/gmcs.png?v=2' },
                            { name: 'Krovelniy Centr', src: '/partners/krovelniycentr.png?v=2' },
                            { name: 'Maskom', src: '/partners/maskom.png?v=2' },
                            { name: 'Reksoft', src: '/partners/reksoft.png?v=2' },
                            { name: 'Tehnosoft', src: '/partners/tehnosoft.png?v=2' }
                        ].map((partner, index) => (
                            <div key={index} className={styles.logoWrapper}>
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.4}>
                    <h3 className={styles.subheading} style={{ marginTop: '40px' }}>Постоянные заказчики</h3>
                    <div className={styles.logos}>
                        <div className={styles.logoItem}>Национальный ЖД оператор РК</div>
                        <div className={styles.logoItem}>Медицинские страховые организации РК</div>
                        <div className={styles.logoItem}>Акимат города Нур-Султан</div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
