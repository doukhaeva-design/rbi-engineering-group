"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ru' | 'en';

type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    ru: {
        "nav.home": "Главная",
        "nav.services": "Услуги",
        "nav.modular": "Модульные",
        "nav.projects": "Проекты",
        "nav.about": "О компании",
        "nav.licenses": "Лицензии",
        "nav.contacts": "Контакты",
        "nav.consultation": "Получить консультацию",
        "hero.subtitle": "Строительство и модульные сооружения в Казахстане",
        "hero.description": "Выполняем строительно-монтажные работы любой сложности и строим мобильные модульные сооружения. Ставим на технологии, качество и оперативность.",
        "hero.request": "Запросить предложение",
        "hero.projects": "Смотреть проекты",
        "hero.trust": "• 13+ лет • 62+ проекта",
        "hero.license": "• Лицензия 1 категории",
    },
    en: {
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.modular": "Modular",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.licenses": "Licenses",
        "nav.contacts": "Contacts",
        "nav.consultation": "Get Consultation",
        "hero.subtitle": "Construction and modular structures in Kazakhstan",
        "hero.description": "We perform construction and installation works of any complexity and build mobile modular structures. We rely on technology, quality and efficiency.",
        "hero.request": "Request a Proposal",
        "hero.projects": "View Projects",
        "hero.trust": "• 13+ years • 62+ projects",
        "hero.license": "• Category 1 License",
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ru');

    // Load saved language from localStorage if available
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
