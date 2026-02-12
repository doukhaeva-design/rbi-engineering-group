"use client";

import { useState } from 'react';
import Header from "../components/layout/Header";
import styles from "./contacts.module.css";
import Button from "../components/ui/Button";
import BackButton from "../components/ui/BackButton";
import Footer from "../components/layout/Footer";
import { useLanguage } from '../context/LanguageContext';

export default function ContactsPage() {
    const { t } = useLanguage();
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
                body: JSON.stringify(formData),
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
            <section className={styles.hero}>
                <div className={`container ${styles.wrapper}`} style={{ position: 'relative' }}>
                    <BackButton />
                </div>
                <div className="container">
                    <h1 className={styles.heroTitle}>{t("contacts_page.title")}</h1>
                    <div className={styles.info}>
                        <p><strong>{t("contacts_page.address.label")}</strong> {t("contacts_page.address.val")}</p>
                        <p><strong>{t("contacts_page.phone.label")}</strong> +7 702 555 51 69</p>
                        <p><strong>Email:</strong> info@rbi.asia</p>
                        <p><strong>{t("contacts_page.website.label")}</strong> www.rbi.asia</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className={`container ${styles.formContainer}`}>
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
                            <textarea
                                name="message"
                                placeholder={t("contacts_page.form.message.placeholder")}
                                className={styles.textarea}
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary">
                            {status === 'loading' ? 'Sending...' : t("contacts_page.form.submit")}
                        </Button>

                        {status === 'success' && (
                            <p style={{ color: 'green', marginTop: '10px' }}>Email sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p style={{ color: 'red', marginTop: '10px' }}>Failed to send email. Please try again.</p>
                        )}

                        <p className={styles.disclaimer}>
                            {t("contacts_page.form.consent")} <a href="/policy" style={{ textDecoration: 'underline', color: 'inherit' }}>{t("footer.policy")}</a>.
                        </p>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}

