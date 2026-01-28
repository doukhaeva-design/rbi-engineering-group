
import Header from "../components/layout/Header";
import styles from "./licenses.module.css";
import Footer from "../components/layout/Footer";

export default function LicensesPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Лицензии и документы</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.licenseList}>
                        <div className={styles.item}>
                            <div className={styles.icon}>📄</div>
                            <h3 className={styles.itemTitle}>Лицензия на строительно-монтажные работы 1 категории</h3>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.icon}>📄</div>
                            <h3 className={styles.itemTitle}>Приложения к лицензии (перечень работ)</h3>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
