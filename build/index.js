"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/ahmed', logger_1.default, function (_req, res) {
    res.send('Hello, ahmed!');
});
app.get('/gamal', logger_1.default, function (_req, res) {
    res.send('Hello, gamal!');
});
app.get('/ragab', logger_1.default, function (_req, res) {
    res.send('Hello, ragab!');
});
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
