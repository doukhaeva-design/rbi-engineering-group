import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, phone, purpose, message, language } = await request.json();

        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASS;

        if (!user || !pass) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass,
            },
        });

        const purposeTranslations: Record<string, string> = {
            'modular': 'Модульные здания',
            'smr': 'Строительно-монтажные работы',
            'engineering': 'Инженерные сети',
            'finishing': 'Отделочные работы',
            'projecting': 'Проектирование',
            'mounting': 'Монтаж оборудования',
        };
        const translatedPurpose = purpose ? (purposeTranslations[purpose] || purpose) : 'Без указания темы';

        const mailOptions = {
            from: `"RBI Engineering Site" <${user}>`,
            to: user, // Send to self
            replyTo: email,
            subject: `Новая заявка с сайта: ${translatedPurpose}`,
            text: `
        Получена новая заявка с сайта:

        Имя / Компания: ${name}
        Телефон: ${phone}
        Email: ${email}
        Интересующая услуга: ${translatedPurpose}
        
        Сообщение или запрос:
        ${message}
      `,
            html: `
        <h3>Получена новая заявка с сайта</h3>
        <ul>
            <li><strong>Имя / Компания:</strong> ${name}</li>
            <li><strong>Телефон:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Интересующая услуга:</strong> ${translatedPurpose}</li>
        </ul>
        <h3>Сообщение или запрос:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        if (email) {
            const isEnglish = language === 'en';

            const autoReplySubject = isEnglish
                ? "Your request has been received - RBI Engineering Group"
                : "Ваша заявка получена - RBI Engineering Group";

            const autoReplyText = isEnglish
                ? `Dear ${name},\n\nThank you for reaching out to RBI Engineering Group. We have received your request and our engineers will get back to you shortly to discuss your task and prepare the best solution.\n\nBest regards,\nRBI Engineering Group Team`
                : `Здравствуйте, ${name}!\n\nСпасибо за обращение в RBI Engineering Group. Мы получили вашу заявку. Наш специалист свяжется с вами в ближайшее время для обсуждения задачи и подготовки оптимального решения.\n\nС уважением,\nКоманда RBI Engineering Group`;

            const autoReplyHtml = isEnglish
                ? `<p>Dear <strong>${name}</strong>,</p><p>Thank you for reaching out to RBI Engineering Group. We have received your request and our engineers will get back to you shortly to discuss your task and prepare the best solution.</p><p>Best regards,<br><strong>RBI Engineering Group Team</strong></p>`
                : `<p>Здравствуйте, <strong>${name}</strong>!</p><p>Спасибо за обращение в RBI Engineering Group. Мы получили вашу заявку. Наш специалист свяжется с вами в ближайшее время для обсуждения задачи и подготовки оптимального решения.</p><p>С уважением,<br><strong>Команда RBI Engineering Group</strong></p>`;

            const autoReplyOptions = {
                from: `"RBI Engineering Group" <${user}>`,
                to: email,
                subject: autoReplySubject,
                text: autoReplyText,
                html: autoReplyHtml,
            };

            await transporter.sendMail(autoReplyOptions);
        }

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
