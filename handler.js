const handler = {
    // default
    basic(obj) {
        return obj;
    },

    // for Vue.js
    vue(obj) {
        const result = {};
        for(const key in obj) {
            result[`VUE_APP_${key}`] = obj[key];
        }
        return result;
    }
};


module.exports = handler;