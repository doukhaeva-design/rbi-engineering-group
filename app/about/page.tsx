
import Header from "../components/layout/Header";
import styles from "./about.module.css";
import KeyCompetencies from "../components/sections/KeyCompetencies";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";

export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <BackButton />
                    <h1 className={styles.heroTitle}>О компании</h1>
                    <p className={styles.heroText}>
                        RBI Engineering Group работает в Казахстане и выполняет строительство, СМР и модульные решения.
                    </p>
                </div>
            </section>

            <KeyCompetencies />

            <div className="section">
                <div className="container">
                    <div className={styles.block}>
                        <h2 className={styles.blockTitle}>Команда</h2>
                        <p className={styles.text}>
                            50+ сотрудников, регулярная аттестация и повышение квалификации.
                        </p>
                    </div>

                    <div className={styles.block} style={{ marginTop: '60px', textAlign: 'center' }}>
                        <Button href="/licenses" variant="outline">Посмотреть лицензии и документы</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
