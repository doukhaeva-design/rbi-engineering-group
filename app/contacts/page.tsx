"use client";

import { useState } from 'react';
import Header from "../components/layout/Header";
import styles from "./contacts.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ContactsPage() {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        purpose: '',
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, language }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ purpose: '', name: '', phone: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <main>
            <Header />
            <section className={`section ${styles.contactSection}`}>
                <div className="container" style={{ position: 'relative' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <BackButton />
                    </div>
                    <div className={styles.gridContainer}>
                        {/* Sidebar Information */}
                        <div className={styles.infoSidebar}>
                            <h1 className={styles.pageTitle}>{t("contacts_page.title")}</h1>
                            <p className={styles.sidebarDesc}>
                                Мы всегда открыты для новых проектов и партнерства. Оставьте заявку или свяжитесь с нами напрямую, и наши инженеры предложат оптимальное решение для вашей задачи.
                            </p>

                            <div className={styles.contactItems}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
                                            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.itemLabel}>{t("contacts_page.address.label")}</span>
                                        <span className={styles.itemValue}>{t("contacts_page.address.val")}</span>
                                    </div>
                                </div>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
                                            <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.4735 21.8266 20.7259C21.7092 20.9783 21.536 21.2023 21.3195 21.3813C21.1029 21.5604 20.84 21.6908 20.5513 21.7644C20.2627 21.838 19.9675 21.8546 19.68 21.81C16.5368 21.4682 13.5677 20.4435 11.01 18.81C8.61483 17.3061 6.64333 15.3346 5.13944 12.9395C3.50294 10.3703 2.47895 7.38883 2.14 4.23999C2.09559 3.95368 2.1121 3.65961 2.18538 3.37227C2.25866 3.08493 2.38851 2.82294 2.56686 2.60749C2.74521 2.39204 2.96887 2.2201 3.22061 2.10427C3.47236 1.98844 3.74665 1.93175 4.02 1.93999H7.02C7.50257 1.9358 7.97157 2.11026 8.3377 2.42938C8.70384 2.74851 8.94054 3.19033 9 3.67999C9.05333 4.63953 9.21366 5.58626 9.48 6.50999C9.58557 6.87321 9.59371 7.26252 9.50346 7.63009C9.41321 7.99767 9.22822 8.3273 8.97 8.58999L7.7 9.85999C9.12328 12.3686 11.2314 14.4767 13.74 15.9L15.01 14.63C15.2727 14.3718 15.6023 14.1868 15.9699 14.0965C16.3375 14.0063 16.7268 14.0144 17.09 14.12C18.0137 14.3863 18.9605 14.5467 19.92 14.6C20.4137 14.6606 20.8595 14.9011 21.18 15.2713C21.5005 15.6414 21.6748 16.1156 21.67 16.6V16.92H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.itemLabel}>{t("contacts_page.phone.label")}</span>
                                        <span className={styles.itemValue}>+7 702 555 51 69</span>
                                    </div>
                                </div>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconWrapper}>
                                        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
                                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className={styles.itemLabel}>Email:</span>
                                        <span className={styles.itemValue}>info@rbi.asia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className={styles.formArea}>
                            <h2 className={styles.formTitle}>{t("contacts_page.form.title")}</h2>
                            <p className={styles.formDesc}>
                                {t("contacts_page.form.desc")}
                            </p>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>{t("contacts_page.form.purpose.label")}</label>
                                    <select
                                        name="purpose"
                                        className={styles.select}
                                        value={formData.purpose}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled hidden>{t("contacts_page.form.purpose.placeholder")}</option>
                                        <option value="modular">{t("nav.modular")}</option>
                                        <option value="smr">{t("activities.construction.title")}</option>
                                        <option value="engineering">{t("activities.networks.title")}</option>
                                        <option value="finishing">{t("activities.finishing.title")}</option>
                                        <option value="projecting">{t("activities.planning.title")}</option>
                                        <option value="mounting">{t("activities.mounting.title")}</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Имя</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t("contacts_page.form.name.placeholder")}
                                        className={styles.input}
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>{t("contacts_page.phone.label")}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={t("contacts_page.form.phone.placeholder")}
                                        className={styles.input}
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={styles.input}
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Сообщение</label>
                                    <textarea
                                        name="message"
                                        placeholder={t("contacts_page.form.message.placeholder")}
                                        className={styles.textarea}
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div style={{ marginTop: '10px' }}>
                                    <Button type="submit" variant="primary">
                                        {status === 'loading' ? t("contacts_page.form.sending") : t("contacts_page.form.submit")}
                                    </Button>

                                    {status === 'success' && (
                                        <div className={styles.successMessage}>
                                            <svg viewBox="0 0 24 24" fill="none" className={styles.successIcon}>
                                                <path d="M22 11.08V12C21.9988 14.1564 21.3001 16.2547 20.0093 17.9818C18.7185 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {t("contacts_page.form.success")}
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className={styles.errorMessage}>
                                            <svg viewBox="0 0 24 24" fill="none" className={styles.errorIcon}>
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {t("contacts_page.form.error")}
                                        </div>
                                    )}
                                </div>

                                <p className={styles.disclaimer}>
                                    {t("contacts_page.form.consent")} <a href="/policy" style={{ textDecoration: 'underline', color: 'inherit' }}>{t("footer.policy")}</a>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

