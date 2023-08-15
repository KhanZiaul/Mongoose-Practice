const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    upassword: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    }
})

module.exports = userSchema