
import Header from "../components/layout/Header";
import styles from "./policy.module.css";
import Footer from "../components/layout/Footer";
import BackButton from "../components/ui/BackButton";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <div style={{ marginBottom: '20px' }}>
                        <BackButton />
                    </div>
                    <h1 className={styles.title}>Политика конфиденциальности</h1>
                    <p className={styles.subtitle}>
                        Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта RBI Engineering Group.
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.block}>
                            <h2 className={styles.heading}>1. Оператор персональных данных</h2>
                            <p>
                                Оператором персональных данных является<br />
                                Товарищество с ограниченной ответственностью «RBI Engineering Group»,<br />
                                БИН: [вставь БИН из лицензии],<br />
                                Республика Казахстан.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>2. Какие персональные данные собираются</h2>
                            <p>При использовании форм обратной связи на сайте компания может собирать следующие персональные данные:</p>
                            <ul>
                                <li>имя;</li>
                                <li>номер телефона;</li>
                                <li>адрес электронной почты;</li>
                                <li>информация, указанная пользователем в тексте обращения.</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>3. Цели обработки персональных данных</h2>
                            <p>Персональные данные используются исключительно для:</p>
                            <ul>
                                <li>обработки входящих запросов;</li>
                                <li>обратной связи с пользователем;</li>
                                <li>предоставления информации о услугах компании.</li>
                            </ul>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>4. Передача персональных данных третьим лицам</h2>
                            <p>
                                Персональные данные пользователей не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>5. Хранение и защита персональных данных</h2>
                            <p>
                                Персональные данные хранятся в течение времени, необходимого для обработки запроса.
                                Компания принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, утраты или раскрытия.
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h2 className={styles.heading}>6. Контактная информация</h2>
                            <p>
                                По вопросам, связанным с обработкой персональных данных, вы можете обратиться через форму обратной связи на сайте или по контактным данным, указанным в разделе <a href="/contacts" className={styles.link}>«Контакты»</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
