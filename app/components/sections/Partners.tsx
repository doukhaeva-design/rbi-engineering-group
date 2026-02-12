"use client";

import styles from './Partners.module.css';
import RevealOnScroll from '../ui/RevealOnScroll';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function Partners() {
    const { t } = useLanguage();
    return (
        <section className={`section ${styles.partnersSection}`}>
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 className={styles.mainTitle}>{t('partners.title')}</h2>
                    <p className={styles.mainDesc}>{t('partners.desc')}</p>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                    <h3 className={styles.subheading}>{t('partners.subtitle1')}</h3>
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
                    <h3 className={styles.subheading} style={{ marginTop: '60px' }}>{t('partners.subtitle2')}</h3>
                    <div className={styles.customerGrid}>
                        {[
                            t('partners.c1'),
                            t('partners.c2'),
                            t('partners.c3')
                        ].map((customer, index) => (
                            <div key={index} className={styles.customerCard}>
                                <div className={styles.customerDecoration}></div>
                                <span className={styles.customerName}>{customer}</span>
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
