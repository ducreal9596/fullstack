const express = require('express');
const homeController = require('../controller/homeController');
const router = express.Router();

const initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/ducreal', (req, res) => {
        return res.send('hello world tao la ai');
    });
    return app.use('/', router);
};

module.exports = initWebRouter;
