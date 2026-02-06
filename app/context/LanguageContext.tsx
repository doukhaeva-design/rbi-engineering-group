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

        "about.title": "Профиль компании",
        "about.desc": "RBI Engineering Group — строительная организация полного цикла, специализирующаяся на сложных строительно-монтажные работах и проектировании высокотехнологичных модульных сооружений.",
        "about.subdesc": "Мы реализуем индустриальные и инфраструктурные проекты по всему Казахстану, обеспечивая высокую культуру инжиниринга и соблюдение строгих технологических стандартов.",
        "about.stat.years": "ЛЕТ НА РЫНКЕ",
        "about.stat.projects": "РЕАЛИЗОВАННЫХ ОБЪЕКТОВ",
        "about.stat.employees": "СОТРУДНИКОВ",
        "about.stat.machinery": "ЕДИНИЦЫ ТЕХНИКИ",
        "about.stat.license": "ЛИЦЕНЗИЯ НА СМР",
        "about.stat.license.suffix": " КАТ.",

        "activities.title": "Комплексные инженерные решения",
        "activities.desc": "Обеспечиваем безупречное качество исполнения на каждом этапе проекта.",
        "activities.modular.title": "Модульные сооружения",
        "activities.modular.desc": "Оперативное возведение высокотехнологичных объектов «под ключ».",
        "activities.construction.title": "Строительно-монтажные работы",
        "activities.construction.desc": "Профессиональная реализация масштабных инфраструктурных и промышленных проектов.",
        "activities.networks.title": "Инженерные сети",
        "activities.networks.desc": "Проектирование и инсталляция сложных внутренних и внешних коммуникационных систем.",
        "activities.finishing.title": "Отделочные работы",
        "activities.finishing.desc": "Финальная отделка премиального уровня с использованием износостойких материалов.",
        "activities.planning.title": "Проектирование и планирование",
        "activities.planning.desc": "Разработка высокоточной проектной документации и генеральное планирование.",
        "activities.mounting.title": "Монтаж / демонтаж",
        "activities.mounting.desc": "Сложный монтаж технологического оборудования и металлоконструкций любого масштаба.",
        "activities.button": "Все услуги",

        "modular.title": "Модульные сооружения",
        "modular.text": "Модульные сооружения — это быстрый и практичный способ получить готовое помещение. Подходит для удалённых локаций и разных типов объектов.",
        "modular.subtitle": "Почему это выгодно?",
        "modular.detail": "Экономия времени и бюджета: здания собираются как конструктор прямо на объекте. Полная заводская готовность, включая отделку и инженерные системы.",
        "modular.benefit1.title": "Быстро",
        "modular.benefit1.desc": "Сборка за несколько дней",
        "modular.benefit2.title": "Надежно",
        "modular.benefit2.desc": "Работает в любых погодных условиях",
        "modular.benefit3.title": "Мобильно",
        "modular.benefit3.desc": "Легко перевезти на новое место",
        "modular.button": "Подробнее о модульных решениях",

        "competencies.title": "Ключевые компетенции",
        "competencies.title_alt": "Почему выбирают нас",
        "competencies.c1.title": "Опыт и масштаб",
        "competencies.c1.desc": "13+ лет на рынке Казахстана, 62+ реализованных проектов.",
        "competencies.c2.title": "Профессиональная команда",
        "competencies.c2.desc": "50+ сотрудников, регулярная аттестация и повышение квалификации.",
        "competencies.c3.title": "Техническая база",
        "competencies.c3.desc": "Собственный парк 53+ единиц строительной техники и сервисная служба.",
        "competencies.c4.title": "Специализация на модулях",
        "competencies.c4.desc": "Знаем особенности модульных сооружений и комплектаций.",
        "competencies.c5.title": "Партнёрская сеть",
        "competencies.c5.desc": "Сотрудничество с крупными производителями и компаниями (DoorHan, Power China и др.).",
        "competencies.c6.title": "Документы и подтверждения",
        "competencies.c6.desc": "Лицензия 1 категории и 68+ рекомендательных писем.",

        "where.title": "Сферы применения",
        "where.i1": "Посты охраны / КПП",
        "where.i2": "Диспетчерские и технические помещения",
        "where.i3": "Заводы",
        "where.i4": "Ветровые электростанции",
        "where.i5": "Мобильные офисы и школы",
        "where.i6": "Военное строительство",
        "where.i7": "Жилые и медицинские объекты",

        "projects.title": "Проекты",
        "projects.desc": "Примеры выполненных работ по модульным решениям и монтажным проектам.",
        "projects.cat.modular": "Модульные сооружения",
        "projects.cat.metal": "Монтаж / металлоконструкции",
        "projects.p1.title": "ВЭС «Хромтау»",
        "projects.p1.label": "Партнеры",
        "projects.p2.title": "Монтаж ветровых генераторов",
        "projects.p2.label": "Локация",
        "projects.p2.value": "Петропавловск",
        "projects.p3.title": "Столовая для военной базы",
        "projects.p3.label": "Заказчик",
        "projects.p3.value": "АО «Əскери Құрылыс»",
        "projects.p4.title": "Монтаж конструкции ТРЦ «Хан Шатыр»",
        "projects.p4.label": "Объект",
        "projects.p4.value": "Хан Шатыр",
        "projects.p5.title": "Штаб строительства",
        "projects.p5.label": "Площадь",
        "projects.p6.title": "Вахтовый поселок",
        "projects.p6.label": "Вместимость",
        "projects.p6.value": "300 чел",
        "projects.button": "Смотреть все проекты",

        "partners.title": "Партнёры и заказчики",
        "partners.desc": "Сотрудничаем с ведущими компаниями и выполняем сложные инженерные проекты по всему Казахстану.",
        "partners.subtitle1": "Партнёры",
        "partners.subtitle2": "Постоянные заказчики",
        "partners.c1": "Национальный ЖД оператор РК",
        "partners.c2": "Медицинские страховые организации РК",
        "partners.c3": "Акимат города Нур-Султан",

        "licenses.title": "Лицензии и документы",
        "licenses.text": "Компания имеет лицензию на строительно-монтажные работы 1 категории и приложения к лицензии (перечень работ).",
        "licenses.button": "Смотреть документы",

        "cta.title": "Начните сотрудничество",
        "cta.text": "Опишите задачу и сроки, и мы свяжемся с вами для уточнения деталей и подготовки предложения.",
        "cta.button": "Запросить коммерческое предложение",
        "cta.button.mobile": "Запросить предложение",

        "footer.desc": "RBI Engineering Group работает в Казахстане и выполняет строительство, СМР и модульные решения.",
        "footer.policy": "Политика конфиденциальности",
        "footer.address": "г. Астана, ул. Проезд 69, зд. 1А",
        "footer.rights": "Все права защищены.",
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

        "about.title": "Company Profile",
        "about.desc": "RBI Engineering Group is a full-cycle construction organization specializing in complex construction and installation works and the design of high-tech modular structures.",
        "about.subdesc": "We implement industrial and infrastructure projects throughout Kazakhstan, ensuring a high culture of engineering and compliance with strict technological standards.",
        "about.stat.years": "YEARS ON MARKET",
        "about.stat.projects": "COMPLETED PROJECTS",
        "about.stat.employees": "EMPLOYEES",
        "about.stat.machinery": "UNITS OF MACHINERY",
        "about.stat.license": "CONSTRUCTION LICENSE",
        "about.stat.license.suffix": " CAT.",

        "activities.title": "Comprehensive Engineering Solutions",
        "activities.desc": "We ensure impeccable execution quality at every stage of the project.",
        "activities.modular.title": "Modular Structures",
        "activities.modular.desc": "Rapid construction of high-tech turnkey facilities.",
        "activities.construction.title": "Construction Works",
        "activities.construction.desc": "Professional implementation of large-scale infrastructure and industrial projects.",
        "activities.networks.title": "Engineering Networks",
        "activities.networks.desc": "Design and installation of complex internal and external communication systems.",
        "activities.finishing.title": "Finishing Works",
        "activities.finishing.desc": "Premium-level finishing using wear-resistant materials.",
        "activities.planning.title": "Design and Planning",
        "activities.planning.desc": "Development of high-precision design documentation and general planning.",
        "activities.mounting.title": "Installation / Dismantling",
        "activities.mounting.desc": "Complex installation of technological equipment and metal structures of any scale.",
        "activities.button": "All Services",

        "modular.title": "Modular Structures",
        "modular.text": "Modular structures are a fast and practical way to get a ready-made facility. Suitable for remote locations and various types of objects.",
        "modular.subtitle": "Why is it profitable?",
        "modular.detail": "Time and budget savings: buildings are assembled locally directly on site. Full factory readiness, including finishing and engineering systems.",
        "modular.benefit1.title": "Fast",
        "modular.benefit1.desc": "Assembly in a few days",
        "modular.benefit2.title": "Reliable",
        "modular.benefit2.desc": "Works in any weather conditions",
        "modular.benefit3.title": "Mobile",
        "modular.benefit3.desc": "Easy to transport to a new location",
        "modular.button": "More about modular solutions",

        "competencies.title": "Key Competencies",
        "competencies.title_alt": "Why Choose Us",
        "competencies.c1.title": "Experience and Scale",
        "competencies.c1.desc": "13+ years on the Kazakhstan market, 62+ completed projects.",
        "competencies.c2.title": "Professional Team",
        "competencies.c2.desc": "50+ employees, regular certification and advanced training.",
        "competencies.c3.title": "Technical Base",
        "competencies.c3.desc": "Own fleet of 53+ units of construction machinery and service department.",
        "competencies.c4.title": "Specialization in Modules",
        "competencies.c4.desc": "We know the features of modular structures and configurations.",
        "competencies.c5.title": "Partner Network",
        "competencies.c5.desc": "Cooperation with major manufacturers and companies (DoorHan, Power China, etc.).",
        "competencies.c6.title": "Documents and Confirmations",
        "competencies.c6.desc": "Category 1 license and 68+ letters of recommendation.",

        "where.title": "Areas of Application",
        "where.i1": "Security Posts / Checkpoints",
        "where.i2": "Control Rooms and Technical Premises",
        "where.i3": "Factories",
        "where.i4": "Wind Power Plants",
        "where.i5": "Mobile Offices and Schools",
        "where.i6": "Military Construction",
        "where.i7": "Residential and Medical Facilities",

        "projects.title": "Projects",
        "projects.desc": "Examples of completed works on modular solutions and installation projects.",
        "projects.cat.modular": "Modular Structures",
        "projects.cat.metal": "Installation / Metal Structures",
        "projects.p1.title": "Khromtau WPP",
        "projects.p1.label": "Partners",
        "projects.p2.title": "Wind Turbine Installation",
        "projects.p2.label": "Location",
        "projects.p2.value": "Petropavlovsk",
        "projects.p3.title": "Canteen for Military Base",
        "projects.p3.label": "Client",
        "projects.p3.value": "JSC \"Askeri Kurylys\"",
        "projects.p4.title": "Khan Shatyr Structure Montage",
        "projects.p4.label": "Object",
        "projects.p4.value": "Khan Shatyr",
        "projects.p5.title": "Construction Headquarters",
        "projects.p5.label": "Area",
        "projects.p6.title": "Shift Camp",
        "projects.p6.label": "Capacity",
        "projects.p6.value": "300 people",
        "projects.button": "View All Projects",

        "partners.title": "Partners and Clients",
        "partners.desc": "We cooperate with leading companies and perform complex engineering projects throughout Kazakhstan.",
        "partners.subtitle1": "Partners",
        "partners.subtitle2": "Regular Clients",
        "partners.c1": "National Railway Operator of Kazakhstan",
        "partners.c2": "Medical Insurance Organizations of Kazakhstan",
        "partners.c3": "Akimat of Nur-Sultan City",

        "licenses.title": "Licenses and Documents",
        "licenses.text": "The company has a license for construction and installation works of the 1st category and appendices to the license (list of works).",
        "licenses.button": "View Documents",

        "cta.title": "Start Cooperation",
        "cta.text": "Describe the task and deadlines, and we will contact you to clarify details and prepare a proposal.",
        "cta.button": "Request a Commercial Proposal",
        "cta.button.mobile": "Request Proposal",

        "footer.desc": "RBI Engineering Group operates in Kazakhstan and performs construction, installation works, and modular solutions.",
        "footer.policy": "Privacy Policy",
        "footer.address": "Astana, Proyezd 69 st., bldg. 1A",
        "footer.rights": "All rights reserved.",
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
