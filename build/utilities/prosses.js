"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var prosses = function (filename, width, height) {
    var sharp = require('sharp');
    sharp("".concat(process.cwd(), "/src/images/").concat(filename, ".jpg"))
        .resize(parseInt("".concat(width)), parseInt("".concat(height)))
        .toFile("".concat(process.cwd(), "/src/resize/filename=").concat(filename, "&width=").concat(width, "&height=").concat(height, ".jpg"), function (err, info) {
        console.log('yes', err, info);
    });
};
exports.default = prosses;
