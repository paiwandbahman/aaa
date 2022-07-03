const express = require('express')
const Router = express.Router();

const controller = require('../../controller/auth/loginController')

Router.post('/login', controller.login)

module.exports = Router;
