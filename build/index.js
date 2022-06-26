"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
var cookieSession = require('cookie-session');
const AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfasdf'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, () => {
    console.log('listening on port 3000');
});
