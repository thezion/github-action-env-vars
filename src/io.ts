import fs from 'fs';
import { EnvVars } from './types/EnvVars.interface';

function saveFile(data: EnvVars, filename: string) {
    let text = '';
    for (const key in data) {
        text += "\n" + key + '=' + data[key];
    }
    fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/${filename}`, text);
    console.info(`Content saved, filename: ${filename}`);
    console.info(JSON.stringify(data));
}

export default {
    saveFile,
};