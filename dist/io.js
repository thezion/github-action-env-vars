"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function saveFile(data, filename) {
    var text = '';
    for (var key in data) {
        text += "\n" + key + '=' + data[key];
    }
    fs_1.default.writeFileSync(process.env.GITHUB_WORKSPACE + "/" + filename, text);
    console.info("Content saved, filename: " + filename);
    console.info(JSON.stringify(data));
}
exports.default = {
    saveFile: saveFile,
};
