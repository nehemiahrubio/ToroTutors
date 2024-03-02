"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyStorage_1 = require("./src/applyStorage");
var index_1 = require("./index");
beforeAll(function () {
    (0, applyStorage_1.applyStorage)((0, index_1.getBrowserLocalStorage)());
});
//# sourceMappingURL=jest.setup.js.map