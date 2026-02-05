import Link from 'next/link';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Button from "./components/ui/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.content}>
                <h1 className={styles.title}>Страница не найдена</h1>
                <p className={styles.text}>
                    К сожалению, запрашиваемая страница была удалена, перемещена или указан неверный адрес.
                </p>
                <div className={styles.actions}>
                    <Button href="/">Вернуться на главную</Button>
                    <Button href="/contacts" variant="outline">Получить консультацию</Button>
                </div>
            </main>
            <Footer />
        </div>
    )
}
