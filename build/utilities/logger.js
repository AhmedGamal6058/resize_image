"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var url = req.url;
    console.log("".concat(url, " is visited"));
    next();
};
var sharp = require('sharp');
sharp('../index.jpg')
    .resize(320, 240)
    .toFile('output.webp');
exports.default = logger;
