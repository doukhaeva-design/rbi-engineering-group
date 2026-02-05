
import Header from "../components/layout/Header";
import styles from "./modular.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import WhereUsed from "../components/sections/WhereUsed";
import Footer from "../components/layout/Footer";

export default function ModularPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div>
                    <BackButton />
                </div>

                <div className="container">
                    <h1 className={styles.heroTitle}>Модульные сооружения</h1>
                    <p className={styles.heroText}>
                        Это быстрый способ построить нужное помещение: офис, КПП, медпункт и другие форматы.
                    </p>
                    <Button href="/contacts" variant="primary">Рассчитать стоимость модуля</Button>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Преимущества</h2>
                    <ul className={styles.advantagesList}>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Быстро строится</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Меньше затрат</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Огнестойкость</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Долговечность и простота сборки</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Энергоэффективность</span>
                        </li>
                        <li className={styles.advantageItem}>
                            <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Можно строить в удалённых локациях</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--secondary-color)' }}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Конструкция и комплектация</h2>
                    <div className={styles.infoGrid}>
                        <div>
                            <h3 className={styles.subTitle}>Конструкция модуля</h3>
                            <ul className={styles.list}>
                                <li>Профлист</li>
                                <li>Сэндвич-панели</li>
                                <li>Рамы, утепление</li>
                                <li>Плиты, ЛДСП и линолеум</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={styles.subTitle}>Комплектация</h3>
                            <ul className={styles.list}>
                                <li>Кровля</li>
                                <li>Крыльцо, лестница</li>
                                <li>Металлоконструкции</li>
                                <li>Инженерные сети</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className={styles.sectionTitle}>Дизайн</h2>
                    <div className={styles.textBlock}>
                        <p><strong>Типы панелей:</strong> гладкая / волна / трапеция</p>
                        <p><strong>Цвета:</strong> RAL 9003 (белый), по RAL-карте. Можно “под дерево”</p>
                        <p><strong>Каркас:</strong> RAL 7004 (серый) или варианты</p>
                    </div>
                </div>
            </section>

            <WhereUsed />

            <Footer />
        </main>
    );
}
