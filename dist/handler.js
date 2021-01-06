"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // default
    basic: function (obj) {
        return obj;
    },
    // for Vue.js
    vue: function (obj) {
        var result = {};
        for (var key in obj) {
            result["VUE_APP_" + key] = obj[key];
        }
        return result;
    }
};
