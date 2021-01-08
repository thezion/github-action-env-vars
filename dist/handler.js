"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // default
    basic(obj) {
        return obj;
    },
    // for Vue.js
    vue(obj) {
        const result = {};
        for (const key in obj) {
            result[`VUE_APP_${key}`] = obj[key];
        }
        return result;
    }
};
