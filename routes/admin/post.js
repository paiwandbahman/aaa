const express = require('express')
const Router = express.Router();

const controller = require('../../controller/admin/postController')


Router.get('/', controller.index)
Router.post('/store', controller.store)
Router.delete('/:id/delete', controller.delete)
Router.get('/:id/edit', controller.edit)
Router.put('/update/:id', controller.update)

Router.get('/check', controller.check);

module.exports = Router;