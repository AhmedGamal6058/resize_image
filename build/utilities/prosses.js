"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var prosses = function (filename, width, height) {
    var sharp = require('sharp');
    var Width = parseInt("".concat(width));
    var Height = parseInt("".concat(height));
    sharp("".concat(process.cwd(), "/src/images/").concat(filename, ".jpg"))
        .resize(Width, Height)
        .toFile("".concat(process.cwd(), "/src/resize/filename=").concat(filename, "&width=").concat(width, "&height=").concat(height, ".jpg"));
    return Width * Height;
};
exports.default = prosses;
