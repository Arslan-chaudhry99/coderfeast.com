const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');



router.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(email);
    const transpoter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORDS, // generated ethereal password
        },
    });

    const mailOpctions = {
        from: process.env.EMAIL,
        to: email,
        subject: `
        Arslna Chaudhry`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <title>Welcome Email</title>
        </head>
        <body>
        
          <p>We're glad to have you on board at {{company}}. </p>
        </body>
        </html>
        `,
    };
    transpoter.sendMail(mailOpctions, (error, info) => {
        if (info.response) {
            return console.log("Done!");
        }
        console.log(error);
    })
})
module.exports = router;