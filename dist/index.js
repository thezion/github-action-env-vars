"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __importDefault(require("@actions/core"));
var axios_1 = __importDefault(require("axios"));
var handler_1 = __importDefault(require("./handler"));
var io_1 = __importDefault(require("./io"));
try {
    var input_1 = {
        'json-url': core_1.default.getInput('json-url'),
        'preset': core_1.default.getInput('preset'),
        'filename': core_1.default.getInput('filename'),
    };
    axios_1.default.get(input_1['json-url']).then(function (res) {
        var downloadedJson = res.data;
        if (!downloadedJson || typeof downloadedJson != 'object') {
            throw new Error('Http client did not receive an object from url');
        }
        var varsToSave = input_1.preset && handler_1.default[input_1.preset] ? handler_1.default[input_1.preset](downloadedJson) : handler_1.default.basic(downloadedJson);
        io_1.default.saveFile(varsToSave, input_1.filename);
        core_1.default.setOutput("count", Object.keys(varsToSave).length);
    });
}
catch (error) {
    core_1.default.setFailed(error.message);
}
