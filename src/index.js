const core = require('@actions/core');
// const github = require('@actions/github');
const fs = require('fs');
const axios = require('axios');
const handler = require('./handler.js');
const io = require('./io.js');

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
        io.saveFile(varsToSave, input.filename);
        core.setOutput("count", Object.keys(varsToSave).length);
    })

} catch (error) {
    core.setFailed(error.message);
}
