"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./images/images"));
var routers = (0, express_1.default)();
routers.get('/', function (req, res) {
    res.send("hellow sir");
});
routers.use("/image", images_1.default);
exports.default = routers;