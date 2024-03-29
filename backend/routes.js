const express = require('express');
const app = express();
const router = express.Router();
const contact = require('./controllers/Contact')
const signup = require('./controllers/Admin')

const mailer = require('./services/mail')
const login = require('./controllers/Login')

router.post("/contact", mailer)
router.get("/getcontact", contact)
router.post("/updateNotification", contact)
router.post("/contactQuery", contact)
router.post("/addNewAdmin", signup)
router.post("/login", login)

module.exports = router