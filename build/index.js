"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./routers/api"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send("<div style=\"font-size:20px;text-align: center;font-family: sans-serif;font-weight: 600;letter-spacing: 1px;\">\n    example of path :\n    <br> http://localhost:3000/api/image?filename=fjord&width=100&height=100\n    </div>\n    ");
});
app.use('/api', api_1.default);
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
