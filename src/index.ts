import * as core from '@actions/core';
import axios from 'axios';
import handler from './handler';
import io from './io';

import { EnvVars } from './types/EnvVars.interface';

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
        let varsToSave: EnvVars;
        switch (input.preset) {
            case 'vue': {
                varsToSave = handler.vue(downloadedJson);
                break;
            }
            default: {
                varsToSave = handler.basic(downloadedJson);
                break;
            }
        }
        io.saveFile(varsToSave, input.filename);
        core.setOutput("count", Object.keys(varsToSave).length);
    })

} catch (error) {
    core.setFailed(error.message);
}
