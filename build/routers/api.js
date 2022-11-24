"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = __importDefault(require("./images/images"));
var express_1 = __importDefault(require("express"));
var routers = (0, express_1.default)();
routers.get('/', function (req, res) {
    res.send('hellow sir');
});
routers.use('/image', images_1.default);
exports.default = routers;
