
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
                        <a href="/docs/licenziya.pdf" target="_blank" rel="noopener noreferrer" className={styles.item}>
                            <div className={styles.icon}>📄</div>
                            <div className={styles.textWrapper}>
                                <h3 className={styles.itemTitle}>Государственная лицензия на строительно-монтажные работы (I категория)</h3>
                                <span className={styles.openLink}>Открыть PDF &rarr;</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
