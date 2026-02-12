"use client";

import styles from './KeyProjects.module.css';
import Button from '../ui/Button';
import Link from 'next/link';
import RevealOnScroll from '../ui/RevealOnScroll';
import { useLanguage } from '../../context/LanguageContext';

export default function KeyProjects() {
    const { t } = useLanguage();
    // Top 4 curated projects for the homepage
    const projects = [
        {
            title: t("projects.p1.title"),
            category: t("projects.cat.modular"),
            specs: { label: t("projects.p1.label"), value: "Sinohydro / Power China" },
            isModular: true
        },
        {
            title: t("projects.p2.title"),
            category: t("projects.cat.metal"),
            specs: { label: t("projects.p2.label"), value: t("projects.p2.value") },
            isModular: false
        },
        {
            title: t("projects.p3.title"),
            category: t("projects.cat.modular"),
            specs: { label: t("projects.p3.label"), value: t("projects.p3.value") },
            isModular: true
        },
        {
            title: t("projects.p4.title"),
            category: t("projects.cat.metal"),
            specs: { label: t("projects.p4.label"), value: t("projects.p4.value") },
            isModular: false
        },
        {
            title: t("projects.p5.title"),
            category: t("projects.cat.modular"),
            specs: { label: t("projects.p5.label"), value: "850 м²" },
            isModular: true
        },
        {
            title: t("projects.p6.title"),
            category: t("projects.cat.modular"),
            specs: { label: t("projects.p6.label"), value: t("projects.p6.value") },
            isModular: true
        }
    ];

    return (
        <section className={`section-alt`} id="projects">
            <div className={`container`}>
                <RevealOnScroll>
                    <h2 style={{ marginBottom: '10px' }}>{t('projects.title')}</h2>
                    <p style={{ marginBottom: '40px', fontSize: '18px', color: '#4b5563' }}>{t('projects.desc')}</p>
                </RevealOnScroll>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1} className={styles.projectWrapper}>
                            <Link
                                href={`/projects?filter=${project.isModular ? 'modular' : 'metal'}`}
                                className={styles.card}
                                data-category={project.isModular ? "modular" : "metal"}
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
                        </RevealOnScroll>
                    ))}
                </div>
                <RevealOnScroll delay={0.4}>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <Button href="/projects" variant="filled">{t('projects.button')}</Button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
