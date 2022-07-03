const Post = require('../../models/Post.js')
const Social = require('../../models/Social.js')
const Slide = require('../../models/Slide.js')

exports.get = async (req, res) => {
    const posts = await Post.find()
    res.json({
        data: posts
    })
};

exports.getSocial = async (req, res) => {
    try {
        const social = await Social.find()
        res.json({
            data: social
        })
    } catch (err) {
        res.json({
            err: 'err'
        })
    }

};


exports.getById = async (req, res) => {
    try {
        let data = await Post.findById(req.params.id)
        res.json({
            "data": data
        })
    } catch (err) {
        console.log('ops something went wrong')
    }

};



exports.getByIdSocial = async (req, res) => {
    try {
        let data = await Social.findById(req.params.id)
        res.json({
            "data": data
        })
    } catch (err) {
        console.log('ops something went wrong')
    }

};


exports.getSlide = async (req, res) => {
    const slides = await Slide.find();
    res.json({
        data: slides
    })
};
