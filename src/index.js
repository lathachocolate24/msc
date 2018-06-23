import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middlewares';
import apiRoutes from './modules';

const PORT = 3000;
const app = express();
app.server = http.createServer(app);

middlewareConfig(app);

app.get('/', (req, res) => {
    res.json({
        hello: 'Hello'
    });
});

apiRoutes(app);

app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`Server is running on Port : ${constants.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        ENJOY Your LIFE....
        `);
    }
});
