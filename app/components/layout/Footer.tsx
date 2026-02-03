import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.logo}>RBI Engineering Group</Link>
                        <p className={styles.desc}>
                            RBI Engineering Group работает в Казахстане и выполняет строительство, СМР и модульные решения.
                        </p>
                    </div>

                    <div className={styles.nav}>
                        <div className={styles.navColumn}>
                            <Link href="/services" className={styles.link}>Услуги</Link>
                            <Link href="/modular" className={styles.link}>Модульные сооружения</Link>
                            <Link href="/projects" className={styles.link}>Проекты</Link>
                        </div>
                        <div className={styles.navColumn}>
                            <Link href="/about" className={styles.link}>О компании</Link>
                            <Link href="/licenses" className={styles.link}>Лицензии</Link>
                            <Link href="/#contacts" className={styles.link}>Контакты</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.contactRow}>
                            <span className={styles.contactItem}>+7 702 555 51 69</span>
                            <span className={styles.contactItem}>info@rbi.asia</span>
                            <span>г. Астана, ул. Проезд 69, зд. 1А</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>© 2026 RBI Engineering Group. Все права защищены.</div>
                </div>
            </div>
        </footer>
    );
}
