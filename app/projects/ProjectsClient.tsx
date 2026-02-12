"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "../components/layout/Header";
import styles from "./projects.module.css";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";

export default function ProjectsClient() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter');

    // Map URL param text to exact filter text if needed, or use direct value
    // URL param: "modular" -> Filter: "Модульные сооружения"
    // URL param: "metal" -> Filter: "Монтаж / металлоконструкции"

    const [filter, setFilter] = useState("Все");

    useEffect(() => {
        const param = searchParams.get('filter');
        if (param === 'modular') {
            setFilter("Модульные сооружения");
        } else if (param === 'metal') {
            setFilter("Монтаж / металлоконструкции");
        }
    }, [searchParams]);

    const projects = [
        // Modular
        {
            id: "khromtau",
            category: "Модульные сооружения",
            title: "ВЭС «Хромтау»",
            detail: "Партнёры: Sinohydro / Power China"
        },
        {
            id: "canteen",
            category: "Модульные сооружения",
            title: "Столовая для военной базы",
            detail: "Заказчик: АО «Əскери Құрылыс»"
        },
        {
            id: "conference",
            category: "Модульные сооружения",
            title: "Конференц-зал (Алматы)",
            detail: "Локация: г. Алматы"
        },
        {
            id: "lab",
            category: "Модульные сооружения",
            title: "Лаборатория ПЦР (Аксай)",
            detail: "Локация: г. Аксай"
        },
        {
            id: "pavilion",
            category: "Модульные сооружения",
            title: "Остановочный павильон",
            detail: "Заказчик: Акимат города"
        },
        {
            id: "terminal",
            category: "Модульные сооружения",
            title: "Таможенный терминал",
            detail: "Тип: Инфраструктурный объект"
        },
        {
            id: "factory",
            category: "Модульные сооружения",
            title: "Заводы и складские помещения",
            detail: "Заказчик: ТОО «ВМП Казахстан»"
        },
        // Installation
        {
            id: "wind",
            category: "Монтаж / металлоконструкции",
            title: "Монтаж ветровых генераторов (750 кВт)",
            detail: "Локация: Петропавловск"
        },
        {
            id: "khan",
            category: "Монтаж / металлоконструкции",
            title: "Монтаж конструкций ТРЦ «Хан Шатыр»",
            detail: "Объект: ТРЦ «Хан Шатыр»"
        },
        {
            id: "crane",
            category: "Монтаж / металлоконструкции",
            title: "Демонтаж башенного крана",
            detail: "Объект: ЖК «Триумф Астаны»"
        },
        {
            id: "velotrek",
            category: "Монтаж / металлоконструкции",
            title: "Монтаж металлоконструкций на СК «Велотрек»",
            detail: "Локация: г. Нур-Султан"
        }
    ];

    // Helper for visual dialect class
    const getCardClass = (category: string) => {
        return category === "Модульные сооружения" ? styles.modularCard : styles.steelCard;
    };

    // Helper for cover gradient
    const getCoverClass = (category: string) => {
        return category === "Модульные сооружения" ? styles.coverModular : styles.coverSteel;
    };

    const filters = ["Все", "Модульные сооружения", "Монтаж / металлоконструкции"];

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>Проекты</h1>
                    <p className={styles.heroText}>
                        Примеры выполненных работ: модульные сооружения и монтажные проекты.
                    </p>
                </div>
            </section>

            <section className={`section ${styles.section}`}>
                <div className="container">

                    {/* Control Panel */}
                    <div className={styles.controls}>
                        <div className={styles.tabs}>
                            {filters.map(f => (
                                <button
                                    key={f}
                                    className={`${styles.tab} ${filter === f ? styles.active : ''}`}
                                    onClick={() => setFilter(f)}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Combined Grid with Sorting Logic */}
                    <div className={styles.grid}>
                        {(() => {
                            // 1. Filter projects based on selected tab
                            const filtered = filter === "Все"
                                ? projects
                                : projects.filter(p => p.category === filter);

                            // 2. Define priority IDs for each category
                            const priorityIds = {
                                "modular": ["khromtau", "canteen"],
                                "metal": ["wind", "khan"]
                            };

                            // 3. Sort logic: Priority items first
                            const sortedProjects = [...filtered].sort((a, b) => {
                                let aPriority = false;
                                let bPriority = false;

                                if (filter === "Модульные сооружения" || filter === "Все") {
                                    if (priorityIds.modular.includes(a.id)) aPriority = true;
                                    if (priorityIds.modular.includes(b.id)) bPriority = true;
                                }
                                if (filter === "Монтаж / металлоконструкции" || filter === "Все") {
                                    if (priorityIds.metal.includes(a.id)) aPriority = true;
                                    if (priorityIds.metal.includes(b.id)) bPriority = true;
                                }

                                if (aPriority && !bPriority) return -1;
                                if (!aPriority && bPriority) return 1;
                                return 0;
                            });

                            return sortedProjects.map((project) => (
                                <div key={project.id} id={project.id} className={`${styles.card} ${getCardClass(project.category)}`}>
                                    <div className={`${styles.cardCover} ${getCoverClass(project.category)}`}></div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.categoryLabel}>{project.category}</div>
                                        <h3 className={styles.cardTitle}>{project.title}</h3>

                                        <div className={styles.metaRow}>
                                            <span>
                                                <span className={styles.metaLabel}>{project.detail?.split(':')[0]}:</span>
                                                {project.detail?.split(':')[1]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ));
                        })()}
                    </div>

                </div>
            </section>
            <Footer />
        </main >
    );
}
