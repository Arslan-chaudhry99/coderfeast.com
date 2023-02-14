const mongoose = require('mongoose');
let contactSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    }
    ,
    phone: {
        type: Number,
        required: true
    }
    ,
    message: {
        type: 'string',
        required: true
    },
    readingStatus: {
        type: Boolean,
        require: true
    }
})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact