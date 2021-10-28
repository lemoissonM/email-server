const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const { NODEMAILER_USER, NODEMAILER_PASSWORD, NODEMAILER_PORT,
       SENDER_EMAIL, NODEMAILER_HOST } = process.env

const transporter = nodemailer.createTransport({
    host: NODEMAILER_HOST,
    port: NODEMAILER_PORT,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASSWORD
    }
});

async function sendEmail(email) {
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Fred Foo 👻" <${SENDER_EMAIL}>`, // sender address
        to: email,
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    return info;
}

exports.sendEmail = sendEmail;