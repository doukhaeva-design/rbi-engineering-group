"use client";

import styles from './KeyProjects.module.css';
import Button from '../ui/Button';
import Link from 'next/link';

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
        }
    ];

    return (
        <section className={`section-alt`} id="projects">
            <div className={`container`}>
                <h2 style={{ marginBottom: '10px' }}>Проекты</h2>
                <p style={{ marginBottom: '40px', fontSize: '18px', color: '#4b5563' }}>Примеры выполненных работ по модульным решениям и монтажным проектам.</p>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <Link
                            href={`/projects?filter=${project.category === "Модульные сооружения" ? 'modular' : 'metal'}`}
                            key={index}
                            className={styles.card}
                            data-category={project.category === "Модульные сооружения" ? "modular" : "metal"}
                        >
                            <div className={styles.imagePlaceholder}></div>
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
                    ))}
                </div>
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                    <Button href="/projects" variant="filled">Смотреть все проекты</Button>
                </div>
            </div>
        </section>
    );
}
