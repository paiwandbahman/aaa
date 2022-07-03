const mongoose  = require('mongoose')

const slideModel = mongoose.Schema({
    photo: String,
})

const Social = mongoose.model('slides', slideModel)

module.exports = Social;