"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyStorage = void 0;
var StorageProxy_1 = require("./StorageProxy");
var applyStorage = function (storage) {
    if (storage) {
        StorageProxy_1.StorageProxy.Storage = storage;
    }
};
exports.applyStorage = applyStorage;
//# sourceMappingURL=applyStorage.js.map