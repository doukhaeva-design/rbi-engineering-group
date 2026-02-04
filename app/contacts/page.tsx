
import Header from "../components/layout/Header";
import styles from "./contacts.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты RBI Engineering Group: адрес, телефон, email | Астана',
    description: 'Свяжитесь с нами для расчета стоимости проекта. Адрес: г. Астана, ул. Проезд 69, зд. 1А. Телефон: +7 702 555 51 69.',
};

export default function ContactsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <BackButton />
                    <h1 className={styles.heroTitle}>Контакты</h1>
                    <div className={styles.info}>
                        <p><strong>Адрес:</strong> Казахстан, г. Астана, ул. Проезд 69, зд. 1А</p>
                        <p><strong>Телефон:</strong> +7 702 555 51 69</p>
                        <p><strong>Email:</strong> info@rbi.asia</p>
                        <p><strong>Вебсайт:</strong> www.rbi.asia</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.formContainer}`}>
                    <h2 className={styles.formTitle}>Напишите нам</h2>
                    <p className={styles.formDesc}>
                        Напишите, что вам нужно: модуль, монтаж, сети или отделка. Мы ответим и подскажем решение.
                    </p>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Что вам нужно?</label>
                            <select className={styles.select} defaultValue="">
                                <option value="" disabled hidden>Выберите вариант</option>
                                <option value="modular">Модульные сооружения</option>
                                <option value="smr">СМР</option>
                                <option value="engineering">Инженерные сети</option>
                                <option value="finishing">Отделочные работы</option>
                                <option value="projecting">Проектирование и планирование</option>
                                <option value="mounting">Монтаж и демонтаж</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Имя и компания" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="tel" placeholder="Телефон" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email" className={styles.input} required />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea placeholder="Опишите ваш запрос" className={styles.textarea} rows={5}></textarea>
                        </div>
                        <Button type="submit" variant="primary">Отправить запрос</Button>
                        <p className={styles.disclaimer}>
                            Нажимая «Отправить запрос», вы соглашаетесь на обработку персональных данных в соответствии с <a href="/policy" style={{ textDecoration: 'underline', color: 'inherit' }}>Политикой конфиденциальности</a>.
                        </p>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}
