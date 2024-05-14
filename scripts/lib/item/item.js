const Types = require('../types');
const idsAndLevels = require('../ids_and_levels');

const SHARD_CRAFTED_ITEMS = [

];

const NON_SHARD_CRAFTED_ITEMS = [

];

/**
 * Converts an Item into simc lines.
 * 
 * @param {Types.Item} item 
 * @returns {string[]}
 */
function toSimc(item) {
    const descriptionLine = `# ${item.name} ()`
}

/**
 * Converts simc lines into an Item.
 * 
 * @param {string} descriptionLine 
 * @param {string} statsLine
 * @returns {Types.Item}
 */
function fromSimc(descriptionLine, statsLine) {
    const descriptionMatches = getDescriptionMatches(descriptionLine);
    const statsMatches = getAllStatsMatches(statsLine);

    const itemId = convertMatchToNumber(findFieldValueInSimcMatches(statsMatches, 'id'));
    const itemLevel = parseInt(descriptionMatches[2], 10);
    const bonusIds = findFieldValueInSimcMatches(statsMatches, 'bonus_id').split('/').map(id => parseInt(id, 10));

    const item = {
        name: descriptionMatches[1],
        slot: getSlotFromSimcMatches(statsMatches),
        id: itemId,
        type: getItemTypeFromItemId(itemId),
        properties: idsAndLevels.getTrackPropertiesFromStatsLine(itemLevel, bonusIds)
    }

    const enchantId = convertMatchToNumber(findFieldValueInSimcMatches(statsMatches, 'enchant_id'));
    if (!!enchantId) {
        item.enchantId = enchantId;
    }

    return item;
}

/**
 * Returns true if a simc line is an item description, false if not.
 * 
 * @param {string} line
 * @returns {boolean}
 */
function isDescriptionLine(line) {
    const matches = getDescriptionMatches(line);
    return matches !== null && matches.length > 0;
}

/**
 * Returns the regex matches for the description line.
 * 
 * @param {string} line
 * @returns {RegExpExecArray|null}
 */
function getDescriptionMatches(line) {
    const regex = new RegExp(/#\s+([\s\w',-]+)\s+\((\d+)\)/g);
    return regex.exec(line);   
}

/**
 * Returns true if a simc line is item stats, false if not.
 * 
 * @param {string} line
 * @returns {boolean}
 */
function isStatsLine(line) {
    const matches = getStatsMatches(line);
    return matches !== null && matches.length > 0;
}

/**
 * Returns the regex matches for the stats line.
 * 
 * @param {string} line
 * @returns {RegExpExecArray|null}
 */
function getStatsMatches(line) {
    const regex = new RegExp(/(\w+=[\d\\/]*)+/g);
    return regex.exec(line);
}

/**
 * 
 * @param {string} line
 * @returns {string[][]} 
 */
function getAllStatsMatches(line) {
    const regex = new RegExp(/(\w+=[\d\\/]*)+/g);
    let match;
    const values = [];

    do {
        match = regex.exec(line);
        if (match) {
            values.push(match[1].split('='));
        }
    } while (match);

    return values;
}

/**
 * 
 * @param {string[][]} matches
 * @returns {string}
 */
function getSlotFromSimcMatches(matches) {
    return matches[0][0];
}

/**
 * 
 * @param {string[][]} matches 
 * @param {string} fieldName
 * @returns {string|undefined} 
 */
function findFieldValueInSimcMatches(matches, fieldName) {
    const match = matches.find(item => item[0] === fieldName);
    if (!!match) {
        return match[1];
    }
}

/**
 * 
 * @param {string} [match]
 * @returns {number|undefined}
 */
function convertMatchToNumber(match) {
    if (!!match) {
        return parseInt(match, 10);
    }
}

/**
 * 
 * @param {string} [match]
 * @returns {number[]|undefined}
 */
function convertMatchToNumbers(match) {
    if (!!match) {
        return match.split('/').map(item => parseInt(item, 10));
    }
}

/**
 * Returns the ItemTypes for an item based on its item id.
 * 
 * @param {number} itemId 
 * @returns {Types.ItemTypes}
 */
function getItemTypeFromItemId(itemId) {
    if (SHARD_CRAFTED_ITEMS.includes(itemId) || NON_SHARD_CRAFTED_ITEMS.includes(itemId)) {
        return Types.ItemTypes.CRAFTED;
    }

    return Types.ItemTypes.TRACK;
}

exports.fromSimc = fromSimc;
exports.isDescriptionLine = isDescriptionLine;
exports.isStatsLine = isStatsLine;
