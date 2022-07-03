const mongoose  = require('mongoose')

const socialModel = mongoose.Schema({
    title: String,
    description: String,
    link: String,
    photo: [{
        type:String
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Social = mongoose.model('socials', socialModel)

module.exports = Social;