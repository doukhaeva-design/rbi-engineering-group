import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, phone, purpose, message } = await request.json();

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

        const mailOptions = {
            from: `"RBI Engineering Site" <${user}>`,
            to: user, // Send to self
            replyTo: email,
            subject: `New Contact Request: ${purpose || 'General Inquiry'}`,
            text: `
        New contact request received:

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Purpose: ${purpose}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New contact request received from the website</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Purpose:</strong> ${purpose}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
