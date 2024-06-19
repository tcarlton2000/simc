// @ts-check

const fs = require('fs');
const gearset = require('../gearset');
const readline = require('readline');

/**
 * Loads a SimC file and returns a Gearset.
 *
 * @param {string} inputFilename
 * @returns {Promise<gearset.Gearset>}
 */
async function importSimc(inputFilename) {
    const fileStream = fs.createReadStream(inputFilename);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    const lines = [];

    for await (const line of rl) {
        lines.push(line);
    }

    return gearset.fromSimc(lines);
}

module.exports = { importSimc };
