const express = require('express')
const Router = express.Router();

const postController = require("../../controller/public/postController")
Router.get('/post/get', postController.get);
Router.get('/post/get/:id', postController.getById);
Router.get('/slide/get', postController.getSlide);

Router.get('/social/get', postController.getSocial);
Router.get('/social/get/:id', postController.getByIdSocial);


module.exports = Router;