const express = require('express')
const Router = express.Router();

const controller = require('../../controller/admin/postController')

const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },

    filename: function (req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const filefilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimeType)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

let upload = multer({ storage, filefilter })

Router.get('/', controller.index)
Router.post('/store', upload.array('photos', 10), controller.store)
Router.delete('/:id/delete', controller.delete)
Router.get('/:id/edit', controller.edit)
Router.put('/update/:id', upload.array('photos', 10), controller.update)

Router.get('/check', controller.check);

module.exports = Router;