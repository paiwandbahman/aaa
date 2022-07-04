const express = require('express')

const Router = express.Router();

Router.get('/get', (req, res) => {
    return res.json({ csrfToken: req.csrfToken() });
});


module.exports = Router;