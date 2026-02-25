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

    const handleWhatsAppShare = () => {
        let translatedPurpose = formData.purpose;
        if (language === 'ru') {
            const purposeTranslations: Record<string, string> = {
                'modular': 'Модульные здания',
                'smr': 'Строительно-монтажные работы',
                'engineering': 'Инженерные сети',
                'finishing': 'Отделочные работы',
                'projecting': 'Проектирование',
                'mounting': 'Монтаж оборудования',
            };
            translatedPurpose = purposeTranslations[formData.purpose] || formData.purpose;
        }

        // We use || '-' to ensure empty fields are represented
        const text = `Здравствуйте! Хочу оставить заявку с сайта:\n\nИмя: ${formData.name || '-'}\nТелефон: ${formData.phone || '-'}\nEmail: ${formData.email || '-'}\nУслуга: ${translatedPurpose || 'Не указана'}\n\nСообщение:\n${formData.message || '-'}`;

        const encodedText = encodeURIComponent(text);
        // Note: Temporarily using test number +33768770697
        const url = `https://wa.me/33768770697?text=${encodedText}`;
        window.open(url, '_blank');
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
                                {t("contacts_page.intro")}
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
                                    <label className={styles.label}>{t("contacts_page.form.name.label")}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t("contacts_page.form.name.placeholder")}
                                        className={styles.input}
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        {t("contacts_page.phone.label")} <span style={{ textTransform: 'none', color: '#9CA3AF', fontWeight: 400 }}>{t("contacts_page.form.phone.optional")}</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={t("contacts_page.form.phone.placeholder")}
                                        className={styles.input}
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>
                                        Email <span style={{ textTransform: 'none', color: '#9CA3AF', fontWeight: 400 }}>{t("contacts_page.form.email.required")}</span>
                                    </label>
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
                                    <label className={styles.label}>{t("contacts_page.form.message.label")}</label>
                                    <textarea
                                        name="message"
                                        placeholder={t("contacts_page.form.message.placeholder")}
                                        className={styles.textarea}
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className={styles.submitGroup}>
                                    <Button type="submit" variant="outline">
                                        {status === 'loading' ? t("contacts_page.form.sending") : t("contacts_page.form.submit.email")}
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="blue"
                                        onClick={handleWhatsAppShare}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                            </svg>
                                            <span>{t("contacts_page.form.submit.whatsapp")}</span>
                                        </div>
                                    </Button>
                                </div>
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

