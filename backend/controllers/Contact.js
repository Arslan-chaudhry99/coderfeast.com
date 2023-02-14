const express = require('express');
require('../DB/db')
const Contact = require('../Models/Contact');
const router = express.Router();


router.post("/contact", async (req, res) => {
    const { name, email, phone, message } = req.body
    try {
        const conReq = new Contact({ name, email, phone, message, readingStatus: true })
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
        let data = await Contact.find();
        if (data) {
            return res.status(200).json(data)
        }
    } catch (error) {
        return res.status(500).json({message:"Error 505"})
    }


})
module.exports = router;