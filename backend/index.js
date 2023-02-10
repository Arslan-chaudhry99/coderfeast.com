const express = require('express');
const app = express();
require("dotenv").config()
require("./DB/db")
const router = require('./routes');
app.use(router)
let port = process.env.portNumber











app.listen(port, () => {
    console.log(`server runing on ${port}`)
})