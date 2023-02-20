const express = require('express');
const route = express.Router();


route.post("/login", async (req, res) => {
    console.log("i want to login ");
})



module.exports = route;
