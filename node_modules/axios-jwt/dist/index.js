"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuthTokenInterceptor = void 0;
var applyAuthTokenInterceptor_1 = require("./src/applyAuthTokenInterceptor");
// EXPORTS
/**
 * @deprecated This method has been renamed to applyAuthTokenInterceptor and will be removed in a future release.
 */
exports.useAuthTokenInterceptor = applyAuthTokenInterceptor_1.applyAuthTokenInterceptor;
__exportStar(require("./src/tokensUtils"), exports);
__exportStar(require("./src/authTokenInterceptor"), exports);
__exportStar(require("./src/setAuthTokens"), exports);
__exportStar(require("./src/applyAuthTokenInterceptor"), exports);
__exportStar(require("./src/getBrowserSessionStorage"), exports);
__exportStar(require("./src/getBrowserLocalStorage"), exports);
__exportStar(require("./src/IAuthTokens"), exports);
__exportStar(require("./src/TokenRefreshRequest"), exports);
__exportStar(require("./src/setAuthTokens"), exports);
__exportStar(require("./src/StorageType"), exports);
//# sourceMappingURL=index.js.map