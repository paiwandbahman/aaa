const express = require('express')
const Router = express.Router();

const controller = require('../../controller/admin/slideController')

Router.get('/', controller.index)
Router.post('/store', controller.store)
Router.delete('/:id/delete', controller.delete)


module.exports = Router;