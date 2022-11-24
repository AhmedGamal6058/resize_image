"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs');
var cacheed = false;
function cache(path) {
    try {
        if (fs.existsSync(path)) {
            cacheed = true;
        }
    }
    catch (err) {
        cacheed = false;
    }
    return cacheed;
}
exports.default = cache;
