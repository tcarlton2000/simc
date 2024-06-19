// @ts-check

const item = require('../item');

/**
 * @typedef {Object} Gearset
 * @property {string[]} header
 * @property {item.Item[]} equipped List of items that are equipped.
 * @property {item.Item[]} inBag List of items that are in bag.
 * @property {item.Item[]} inVault List of items in Great Vault.
 */

/** @typedef {number} FileState */
const FileState = {
    HEADER: 0,
    EQUIPPED_GEAR: 1,
    GEAR_IN_BAGS: 2,
    VAULT_GEAR: 3,
};

/**
 * Loads a SimC file and returns a Gearset.
 *
 * @param {string[]} simcLines
 * @returns {Gearset}
 */
function fromSimc(simcLines) {
    let fileState = FileState.HEADER;
    const headerLines = [];
    const equippedLines = [];
    const bagLines = [];
    const vaultLines = [];

    for (const line of simcLines) {
        fileState = determineFileState(line, fileState);

        switch (fileState) {
            case FileState.HEADER:
                headerLines.push(line);
                break;
            case FileState.EQUIPPED_GEAR:
                equippedLines.push(line);
                break;
            case FileState.GEAR_IN_BAGS:
                bagLines.push(line);
                break;
            case FileState.VAULT_GEAR:
                vaultLines.push(line);
                break;
        }
    }

    return {
        header: headerLines,
        equipped: parseGearLines(equippedLines),
        inBag: parseGearLines(bagLines),
        inVault: parseGearLines(vaultLines),
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
 * Converts the gear item lines from a SimC input a list of Items.
 *
 * @param {string[]} lines
 * @returns {item.Item[]}
 */
function parseGearLines(lines) {
    const items = [];

    let descriptionLine = '';
    let statsLine = '';

    for (const line of lines) {
        if (item.isDescriptionLine(line)) {
            descriptionLine = line;
        } else if (item.isStatsLine(line)) {
            statsLine = line;
        }

        if (descriptionLine.length > 0 && statsLine.length > 0) {
            items.push(item.fromSimc(descriptionLine, statsLine));
            descriptionLine = '';
            statsLine = '';
        }
    }

    return items;
}

module.exports = { fromSimc };
