"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserSessionStorage = void 0;
var BrowserStorageService_1 = require("./BrowserStorageService");
var getBrowserSessionStorage = function () {
    if (typeof window !== 'undefined') {
        return new BrowserStorageService_1.BrowserStorageService(window.sessionStorage);
    }
};
exports.getBrowserSessionStorage = getBrowserSessionStorage;
//# sourceMappingURL=getBrowserSessionStorage.js.map