const express = require('express')
const Router = express.Router();

const controller = require('../../controller/admin/slideController')

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
Router.post('/store', upload.single('photo'), controller.store)
Router.delete('/:id/delete', controller.delete)


module.exports = Router;