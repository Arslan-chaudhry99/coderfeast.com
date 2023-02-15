const express = require('express');
const app=express();
const router = express.Router();
const contact = require('./controllers/Contact')

router.post("/contact", contact)
router.get("/getcontact", contact)
router.post("/updateNotification", contact)
router.post("/contactQuery", contact)

module.exports = router