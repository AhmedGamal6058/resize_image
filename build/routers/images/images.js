"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var prosses_1 = __importDefault(require("../../utilities/prosses"));
var image = (0, express_1.default)();
image.get('/', function (req, res) {
    (0, prosses_1.default)("".concat(req.query.filename), "".concat(req.query.width), "".concat(req.query.height));
    setTimeout(function () {
        res.sendFile("/src/resize/filename=".concat(req.query.filename, "&width=").concat(req.query.width, "&height=").concat(req.query.height, ".jpg"), { root: process.cwd() });
    }, 1000);
});
exports.default = image;
