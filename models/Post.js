const mongoose = require('mongoose')

const post = mongoose.Schema({
    title: String,
    description: String,
    time: String,
    link: String,
    photo: [{
        type:String
    }],
    createdAt: {
        type: Date,
        default: new Date()
    }
})


const postModel = mongoose.model('posts', post);

module.exports = postModel;