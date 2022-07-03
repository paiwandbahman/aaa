const mongoose = require('mongoose')

const user = mongoose.Schema({
    email: String,
    password: String
})


const userModel = mongoose.model('users', user);

module.exports = userModel;