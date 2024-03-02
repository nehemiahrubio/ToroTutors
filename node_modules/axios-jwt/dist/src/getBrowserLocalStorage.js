"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserLocalStorage = void 0;
var BrowserStorageService_1 = require("./BrowserStorageService");
var getBrowserLocalStorage = function () {
    if (typeof window !== 'undefined') {
        return new BrowserStorageService_1.BrowserStorageService(window.localStorage);
    }
};
exports.getBrowserLocalStorage = getBrowserLocalStorage;
//# sourceMappingURL=getBrowserLocalStorage.js.map