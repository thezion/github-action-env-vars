import core from '@actions/core';
import axios from 'axios';
import handler from './handler';
import io from './io';

try {
    const input = {
        'json-url': core.getInput('json-url'),
        'preset': core.getInput('preset') as 'basic' | 'vue',
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
