const express = require('express');
require('../DB/db')
const Contact = require('../Models/Contact');
const router = express.Router();


router.post("/contact", async (req, res) => {
    const { name, email, phone, message } = req.body
    try {
        const conReq = new Contact({
            name,
            email,
            phone,
            message,
            readingStatus: true
        })
        let response = await conReq.save()
        if (response) {
            return res.status(200).json({ message: "Your form has been submited successfuly." })
        }
        return res.status(405).json({ message: "An error has been oucored." })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error 505!" })
    }
})

router.get("/getcontact", async (req, res) => {
    try {
        let data = await Contact.find({ readingStatus: true });
        if (data) {
            return res.status(200).json(data)
        }
    } catch (error) {
        return res.status(500).json({ message: "Error 505" })
    }
})

router.post("/updateNotification", async (req, res) => {
    const { _id } = req.body;
    try {
        let response = await Contact.findByIdAndUpdate({
            _id: _id
        }, {
            $set: {
                readingStatus: false
            }
        })
        if (response) {
            return res.status(200).json({ message: "Done!" })
        }

    } catch (error) {
        return res.status(500).json({ message: "error 505!" })
    }
})
router.post("/contactQuery", async (req, res) => {
    let response = await Contact.find(req.body)
    console.log(response);
})
module.exports = router;
