const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const Admin = require("../Models/Signup");
require('../DB/db')
router.post('/addNewAdmin', async (req, res) => {
    let { username, Password, email } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(Password, salt)
    const addAdmin = new Admin({ name: username, password: hashedPass, email })
    const response = await addAdmin.save()

});

module.exports = router