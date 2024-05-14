const fs = require('fs');
const item = require('./lib/item');
const readline = require('readline');
const Types = require('./lib/types');

/** @typedef {number} FileState */
const FileState = {
    HEADER: 0,
    EQUIPPED_GEAR: 1,
    GEAR_IN_BAGS: 2,
    VAULT_GEAR: 3,
}

/**
 * Read simc file and output Gearset object.
 * 
 * @param {string} inputFile Input simc file.
 * @returns {Types.Gearset}
 */
async function processLineByLine(inputFile) {
    const fileStream = fs.createReadStream(inputFile);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    const gearset = {
        header: [],
        equipped: [],
        inBag: [],
        inVault: [],
    }

    let fileState = FileState.HEADER;
    let itemDescriptionLine = '';
    let itemStatsLine = '';

    for await (const line of rl) {
        fileState = determineFileState(line, fileState);

        if (fileState === FileState.HEADER) {
            gearset.header.push(line);
            continue;
        }

        if (fileState !== FileState.EQUIPPED_GEAR) {
            break;
        }

        if (item.isDescriptionLine(line)) {
            itemDescriptionLine = line;
        } else if (item.isStatsLine(line)) {
            itemStatsLine = line;
        }

        if (itemDescriptionLine.length > 0 && itemStatsLine.length > 0) {
            gearset.equipped.push(item.fromSimc(itemDescriptionLine, itemStatsLine));
            itemDescriptionLine = '';
            itemStatsLine = '';
        }
    }

    return gearset;
}

/**
 * Returns the current file state based on current line.
 * 
 * @param {string} line 
 * @param {FileState} currentState 
 * @returns {FileState}
 */
function determineFileState(line, currentState) {
    if (currentState === FileState.HEADER && item.isDescriptionLine(line)) {
        return FileState.EQUIPPED_GEAR;
    }

    if (line === '### Gear from Bags') {
        return FileState.GEAR_IN_BAGS;
    }

    if (line === '### Weekly Reward Choices') {
        return FileState.VAULT_GEAR;
    }

    return currentState;
}

if (process.argv.length != 4) {
    console.error('Invalid format. Should be of format: "node import_simc.js <input.simc> <output.json>"');
    process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

processLineByLine(inputFile).then(gearset => {
    console.log(gearset);
    try {
        fs.writeFileSync(outputFile, JSON.stringify(gearset));
        // file written successfully
    } catch (err) {
        console.error(err);
    }
})



