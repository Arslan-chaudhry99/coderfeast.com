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
        }
    });

    const mailOpctions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Contact`,
        html: `
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    font-family: sans-serif;
                }
            </style>
        </head>
        
        <body>
            <div>
                <div>
                    <p><strong>Name:</strong>${name} </p>
                    <p><strong>Email:</strong><a href=""></a> ${email}</p>
                    <p><strong>Phone:</strong>${phone} </p>
                    <p><strong>Message:</strong>
        ${message}
                    </p>
                </div>
            </div>
        </body>
        
        </html>
        `
    };
    const mailOpctionsToCustomer = {
        from: process.env.EMAIL,
        to: email,
        subject: `Coderfeast`,
        html: `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }

        .main-container {
            
            width: 100vw !important;
            height: 100vh;
            padding: 40px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;

        }

        .main_container_1 {
          
            box-shadow: 0 .125rem .25rem rgba(33,37,41,.075) !important;
            width: 50vw;
            border-radius: 10px;
            height: auto !important;
            border: 1px solid rgba(0, 0, 0, 0.175);
            padding: 50px 30px;
        }

        .name {
            margin-top: 20px !important;
        }

        .hr {
            font-size: 17px;
            color: #75bf0d;
            margin-top: 10px;
        }
.maringtop{
margin-top: 5px;
}
        @media (max-width: 575.98px) {
            .main_container_1 {
                width: 100vw;
            }

            .main-container {
                padding: 10px;
            }
        }
    </style>
</head>

<body>
    <div class="main-container">
        <div class="main_container_1">
            
            <br>
            <span >${name}</span>
         
            <p>Thank You for contacting us.</p>

            <p class="name"> This is confirmation that we have received your email. One of our representatives will
                contact you
                shortly.
            </p>
            <img src="https://res.cloudinary.com/dr4gwvcmz/image/upload/v1676535474/image001_vvnduh.jpg" alt="coderfeast" style="margin-top: 50px;">
            <p class="name">
                Regards
            </p>
            <p>,
                Team CoderFeast</p>
            <h5 class="hr">Fareed Fakhar | Human Resource Manager</h5>
            <p class="maringtop"><strong>Mobile</strong>:	+92 321 555 9510</p>
            <p class="maringtop"><strong>Email</strong>:	<a href="">	
                ffakhar@coderfeast.com</a></p>
        </div>
    </div>
</body>

</html>
        `
    };
    transpoter.sendMail(mailOpctions, (error, info) => {
        if (info.response) {
            transpoter.sendMail(mailOpctionsToCustomer, (error, info) => {
                if (info.response) {
                    return console.log("deliver to clients done!");
                }
                console.log(error);
            })
        }
        console.log(error);
    })
})
module.exports = router;
