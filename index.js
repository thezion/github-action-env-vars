const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');
const axios = require('axios');
const handler = require('./handler.js');

try {
    const input = {
        'json-url': core.getInput('json-url'),
        'preset': core.getInput('preset'),
        'filename': core.getInput('filename'),
    };

    axios.get(input['json-url']).then(function (res) {
        const downloadedJson = res.data;
        if (!downloadedJson || typeof downloadedJson != 'object') {
            throw new Error('Http client did not receive an object from url');
        }
        const varsToSave = input.preset && handler[input.preset] ? handler[input.preset](downloadedJson) : handler.basic(downloadedJson);
        saveFile(varsToSave, input.filename);
        core.setOutput("count", Object.keys(varsToSave).length);
    })
    
} catch (error) {
    core.setFailed(error.message);
}


function saveFile(data, filename) {
    let text = '';
    for(const key in data) {
        text += "\n" + key + '=' + data[key];
    }
    fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/${filename}`, text);
    console.info(`Content saved, filename: ${filename}`);
    console.info(JSON.stringify(data));
}
