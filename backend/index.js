const express = require('express');
const app = express();
require("dotenv").config()
require("./DB/db")
const router = require('./routes');
app.use(express.json())
app.use(router)
let port = process.env.portNumber


app.post('/login', (req, res) => {
    res.send("ok")
})








app.listen(port, () => {
    console.log(`server runing on ${port}`)
})