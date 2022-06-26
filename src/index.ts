import express, { Request, Response } from 'express';
import bodyParser, { BodyParser } from 'body-parser';
var cookieSession = require('cookie-session');
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfasdf'] }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('listening on port 3000');
})