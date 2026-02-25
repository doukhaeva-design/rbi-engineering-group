"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "../components/layout/Header";
import styles from "./projects.module.css";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsClient() {
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get('filter');
    const { t } = useLanguage();

    // Map URL param text to exact filter text if needed, or use direct value
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const param = searchParams.get('filter');
        if (param === 'modular') {
            setFilter("modular");
        } else if (param === 'metal') {
            setFilter("metal");
        }
    }, [searchParams]);

    const projects = [
        // Modular
        {
            id: "khromtau",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p1.title"),
            detail: `${t("projects.p1.label")}: Sinohydro / Power China`
        },
        {
            id: "canteen",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p3.title"),
            detail: `${t("projects.p3.label")}: ${t("projects.p3.value")}`
        },
        {
            id: "conference",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p_conf.title"),
            detail: `${t("projects.p_conf.label")}: ${t("projects.p_conf.value")}`
        },
        {
            id: "lab",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p_lab.title"),
            detail: `${t("projects.p_lab.label")}: ${t("projects.p_lab.value")}`
        },
        {
            id: "pavilion",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p_pavilion.title"),
            detail: `${t("projects.p_pavilion.label")}: ${t("projects.p_pavilion.value")}`
        },
        {
            id: "terminal",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p_terminal.title"),
            detail: `${t("projects.p_terminal.label")}: ${t("projects.p_terminal.value")}`
        },
        {
            id: "factory",
            category: "modular",
            categoryLabel: t("projects.cat.modular"),
            title: t("projects.p_factory.title"),
            detail: `${t("projects.p_factory.label")}: ${t("projects.p_factory.value")}`
        },
        // Installation
        {
            id: "wind",
            category: "metal",
            categoryLabel: t("projects.cat.metal"),
            title: t("projects.p2.title"),
            detail: `${t("projects.p2.label")}: ${t("projects.p2.value")}`
        },
        {
            id: "khan",
            category: "metal",
            categoryLabel: t("projects.cat.metal"),
            title: t("projects.p4.title"),
            detail: `${t("projects.p4.label")}: ${t("projects.p4.value")}`
        },
        {
            id: "crane",
            category: "metal",
            categoryLabel: t("projects.cat.metal"),
            title: t("projects.p_crane.title"),
            detail: `${t("projects.p_crane.label")}: ${t("projects.p_crane.value")}`
        },
        {
            id: "velotrek",
            category: "metal",
            categoryLabel: t("projects.cat.metal"),
            title: t("projects.p_velo.title"),
            detail: `${t("projects.p_velo.label")}: ${t("projects.p_velo.value")}`
        }
    ];

    // Helper for visual dialect class
    const getCardClass = (category: string) => {
        return category === "modular" ? styles.modularCard : styles.steelCard;
    };

    // Helper for cover gradient
    const getCoverClass = (category: string) => {
        return category === "modular" ? styles.coverModular : styles.coverSteel;
    };

    const filters = [
        { id: "all", label: t("projects.filter.all") },
        { id: "modular", label: t("projects.cat.modular") },
        { id: "metal", label: t("projects.cat.metal") }
    ];

    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("projects.title")}</h1>
                    <p className={styles.heroText}>
                        {t("projects.desc")}
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
                                    key={f.id}
                                    className={`${styles.tab} ${filter === f.id ? styles.active : ''}`}
                                    onClick={() => setFilter(f.id)}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Combined Grid with Sorting Logic */}
                    <div className={styles.grid}>
                        {(() => {
                            // 1. Filter projects based on selected tab
                            const filtered = filter === "all"
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

                                if (filter === "modular" || filter === "all") {
                                    if (priorityIds.modular.includes(a.id)) aPriority = true;
                                    if (priorityIds.modular.includes(b.id)) bPriority = true;
                                }
                                if (filter === "metal" || filter === "all") {
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
                                        <div className={styles.categoryLabel}>{project.categoryLabel}</div>
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
