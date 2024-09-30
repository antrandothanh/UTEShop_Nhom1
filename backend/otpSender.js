import nodemailer from 'nodemailer'
import crypto from 'crypto'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trandothanhan04@gmail.com',
        pass: 'oztt fiis tzii xwge'
    }
});

export function sendOTP(email, otp) {
    const mailOptions = {
        from: 'trandothanhan04@gmail.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is ${otp}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export function generateOTP() {
    return crypto.randomInt(100000, 999999); // 6-digit OTP
}