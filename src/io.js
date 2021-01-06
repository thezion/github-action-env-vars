function saveFile(data, filename) {
    let text = '';
    for (const key in data) {
        text += "\n" + key + '=' + data[key];
    }
    fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/${filename}`, text);
    console.info(`Content saved, filename: ${filename}`);
    console.info(JSON.stringify(data));
}

module.exports = {
    saveFile,
};