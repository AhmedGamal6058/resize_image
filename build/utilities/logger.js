"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var sharp = require('sharp');
    sharp("src/images/".concat(req.query.filename, ".jpg"))
        .resize(parseInt("".concat(req.query.width)), parseInt("".concat(req.query.height)))
        .toFile("src/resize/filename=".concat(req.query.filename, "&width=").concat(req.query.width, "&height=").concat(req.query.height, ".jpg"), function (err, info) {
        console.log('yes', err, info);
    });
    next();
};
exports.default = logger;
