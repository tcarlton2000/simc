const fs = require('fs');
const item = require('../item/item');
const readline = require('readline');
const Types = require('../types');

/** @typedef {number} FileState */
const FileState = {
    HEADER: 0,
    EQUIPPED_GEAR: 1,
    GEAR_IN_BAGS: 2,
    VAULT_GEAR: 3,
}

/**
 * Loads a SimC file and returns a Gearset.
 * 
 * @param {string} inputFilename 
 * @returns {Promise<Types.Gearset>}
 */
async function importSimc(inputFilename) {
    const fileStream = fs.createReadStream(inputFilename);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let fileState = FileState.HEADER;
    const headerLines = [];
    const equippedLines = []

    for await (const line of rl) {
        fileState = determineFileState(line, fileState);

        switch (fileState) {
            case FileState.HEADER:
                headerLines.push(line);
                break;
            case FileState.EQUIPPED_GEAR:
                equippedLines.push(line);
                break;
        }
    }

    return {
        header: headerLines,
        equipped: parseEquippedLines(equippedLines),
        inBag: [],
        inVault: [],
    };
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

/**
 * Converts the equipped item lines from a SimC input a list of Items.
 * 
 * @param {string[]} lines
 * @returns {Types.Item[]}
 */
function parseEquippedLines(lines) {
    const equipped = [];

    let descriptionLine = '';
    let statsLine = '';

    for (const line of lines) {
        if (item.isDescriptionLine(line)) {
            descriptionLine = line;
        } else if (item.isStatsLine(line)) {
            statsLine = line;
        }

        if (descriptionLine.length > 0 && statsLine.length > 0) {
            equipped.push(item.fromSimc(descriptionLine, statsLine));
            descriptionLine = '';
            statsLine = '';
        }
    }

    return equipped;
}

exports.importSimc = importSimc;