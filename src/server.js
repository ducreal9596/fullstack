const express = require('express');
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRoutes = require('./routes/web');
require('dotenv').config();
const connectDb = require('../src/config/connectDb');
const app = express();

//config app
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
viewEngine(app);
initWebRoutes(app);

connectDb();

const port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log('BackEnd NodeJs is Running on port ' + port);
});
