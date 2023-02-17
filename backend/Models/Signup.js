const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    }
})
const Admin = new mongoose.model("Admin", signupSchema);
module.exports = Admin