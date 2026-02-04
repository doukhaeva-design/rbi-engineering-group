"use client";

import styles from './KeyProjects.module.css';
import Button from '../ui/Button';
import Link from 'next/link';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function KeyProjects() {
    // Top 4 curated projects for the homepage
    const projects = [
        {
            title: "ВЭС «Хромтау»",
            category: "Модульные сооружения",
            specs: { label: "Партнеры", value: "Sinohydro / Power China" }
        },
        {
            title: "Монтаж ветровых генераторов",
            category: "Монтаж / металлоконструкции",
            specs: { label: "Локация", value: "Петропавловск" }
        },
        {
            title: "Столовая для военной базы",
            category: "Модульные сооружения",
            specs: { label: "Заказчик", value: "АО «Əскери Құрылыс»" }
        },
        {
            title: "Монтаж конструкции ТРЦ «Хан Шатыр»",
            category: "Монтаж / металлоконструкции",
            specs: { label: "Объект", value: "Хан Шатыр" }
        },
        {
            title: "Штаб строительства",
            category: "Модульные сооружения",
            specs: { label: "Площадь", value: "850 м²" }
        },
        {
            title: "Вахтовый поселок",
            category: "Модульные сооружения",
            specs: { label: "Вместимость", value: "300 чел" }
        }
    ];

    return (
        <section className={`section-alt`} id="projects">
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '10px' }}>Проекты</h2>
                    <p style={{ marginBottom: '40px', fontSize: '18px', color: '#4b5563' }}>Примеры выполненных работ по модульным решениям и монтажным проектам.</p>
                </RevealOnScroll>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1} className={styles.projectWrapper}>
                            <Link
                                href={`/projects?filter=${project.category === "Модульные сооружения" ? 'modular' : 'metal'}`}
                                className={styles.card}
                                data-category={project.category === "Модульные сооружения" ? "modular" : "metal"}
                            >
                                <div className={styles.imagePlaceholder}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.2, color: '#4B5563' }}>
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                    </svg>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <p className={styles.type}>{project.category}</p>
                                        <h3 className={styles.title}>{project.title}</h3>
                                    </div>
                                    <div className={styles.specs}>
                                        <div className={styles.specItem}>
                                            <span className={styles.specLabel}>{project.specs.label}</span>
                                            <span className={styles.specValue}>{project.specs.value}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </RevealOnScroll>
                    ))}
                </div>
                <RevealOnScroll delay={0.4}>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <Button href="/projects" variant="filled">Смотреть все проекты</Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
