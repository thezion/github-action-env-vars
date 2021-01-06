import { EnvVars } from './types/EnvVars.interface';

export default {
    // default
    basic(obj: EnvVars): EnvVars {
        return obj;
    },

    // for Vue.js
    vue(obj: EnvVars): EnvVars {
        const result: EnvVars = {};
        for (const key in obj) {
            result[`VUE_APP_${key}`] = obj[key];
        }
        return result;
    }
};