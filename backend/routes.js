const express = require('express');
const app = express();
const router = express.Router();
const contact = require('./controllers/Contact')
const mailer = require('./services/mail')

router.post("/contact", mailer)
router.get("/getcontact", contact)
router.post("/updateNotification", contact)
router.post("/contactQuery", contact)

module.exports = router