"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAuthTokenInterceptor = void 0;
var authTokenInterceptor_1 = require("./authTokenInterceptor");
/**
 *
 * @param {Axios} axios - Axios instance to apply the interceptor to
 * @param {IAuthTokenInterceptorConfig} config - Configuration for the interceptor
 */
var applyAuthTokenInterceptor = function (axios, config) {
    if (!axios.interceptors)
        throw new Error("invalid axios instance: ".concat(axios));
    axios.interceptors.request.use((0, authTokenInterceptor_1.authTokenInterceptor)(config));
};
exports.applyAuthTokenInterceptor = applyAuthTokenInterceptor;
//# sourceMappingURL=applyAuthTokenInterceptor.js.map