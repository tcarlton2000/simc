// @ts-check

const craftedItem = require('./crafted_item');
const trackItem = require('./track_item');

/**
 * @typedef {Object} Item
 * @property {string} name Name of the item
 * @property {string} slot Slot the item is used in
 * @property {number} id Wow item id
 * @property {number} [enchantId]
 * @property {number[]} [gemIds]
 * @property {ItemTypes} type Type of item, either CRAFTED or TRACK
 * @property {trackItem.TrackProps} [trackProperties] Properties of TRACK items.
 * @property {craftedItem.CraftedProps} [craftedProperties] Properties of CRAFTED items.
 */

/** @typedef {number} ItemTypes */
const ItemTypes = {
    CRAFTED: 0,
    TRACK: 1,
};

/**
 * Converts simc lines into an Item.
 *
 * @param {string} descriptionLine
 * @param {string} statsLine
 * @returns {Item}
 */
function fromSimc(descriptionLine, statsLine) {
    console.log(descriptionLine);
    const descriptionMatches = getDescriptionMatches(descriptionLine);
    if (descriptionMatches === null || descriptionMatches.length != 3) {
        throw new Error(`Invalid description line: ${descriptionLine}`);
    }

    const statsMatches = getAllStatsMatches(statsLine);

    const itemId = parseInt(
        findFieldValueInSimcMatches(statsMatches, 'id'),
        10,
    );
    const itemLevel = parseInt(descriptionMatches[2], 10);
    const bonusIds = convertMatchToNumbers(
        findOptionalFieldValueInSimcMatches(statsMatches, 'bonus_id'),
    );
    const type = getItemTypeFromItemId(itemId);

    /** @type {Item} */
    const item = {
        name: descriptionMatches[1],
        slot: getSlotFromSimcMatches(statsMatches),
        id: itemId,
        type: type,
    };

    if (type === ItemTypes.TRACK) {
        item.trackProperties = trackItem.getTrackPropertiesFromStatsLine(
            itemLevel,
            bonusIds,
        );
    }

    if (type === ItemTypes.CRAFTED) {
        const craftedStats = convertMatchToNumbers(
            findOptionalFieldValueInSimcMatches(statsMatches, 'crafted_stats'),
        );
        item.craftedProperties =
            craftedItem.getCraftedPropertiesFromStatsLine(bonusIds);
    }

    const enchantId = convertMatchToNumber(
        findOptionalFieldValueInSimcMatches(statsMatches, 'enchant_id'),
    );
    if (!!enchantId) {
        item.enchantId = enchantId;
    }

    const gemIds = convertMatchToNumbers(
        findOptionalFieldValueInSimcMatches(statsMatches, 'gem_id'),
    );
    if (gemIds.length > 0) {
        item.gemIds = gemIds;
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
 * @returns {string}
 */
function findFieldValueInSimcMatches(matches, fieldName) {
    const value = findOptionalFieldValueInSimcMatches(matches, fieldName);
    if (!value) {
        throw new Error(`No value found for "${fieldName}"`);
    }

    return value;
}

/**
 *
 * @param {string[][]} matches
 * @param {string} fieldName
 * @returns {string|undefined}
 */
function findOptionalFieldValueInSimcMatches(matches, fieldName) {
    const match = matches.find((item) => item[0] === fieldName);
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
 * @returns {number[]}
 */
function convertMatchToNumbers(match) {
    if (!!match) {
        return match.split('/').map((item) => parseInt(item, 10));
    }

    return [];
}

/**
 * Returns the ItemTypes for an item based on its item id.
 *
 * @param {number} itemId
 * @returns {ItemTypes}
 */
function getItemTypeFromItemId(itemId) {
    if (
        craftedItem.SHARD_CRAFTED_ITEMS.includes(itemId) ||
        craftedItem.NON_SHARD_CRAFTED_ITEMS.includes(itemId)
    ) {
        return ItemTypes.CRAFTED;
    }

    return ItemTypes.TRACK;
}

/**
 * Returns the item level for a given item.
 *
 * @param {Item} item
 * @returns {number}
 */
const getItemLevel = (item) => {
    if (item.trackProperties) {
        return trackItem.getTrackItemLevel(item.trackProperties);
    }
    if (item.craftedProperties) {
        return craftedItem.getCraftedItemLevel(item.craftedProperties);
    }

    throw new Error('Invalid item type');
};

/**
 * Returns the list of bonus ids for an item.
 *
 * @param {Item} item
 * @returns {number[]}
 */
const getBonusIds = (item) => {
    if (item.trackProperties) {
        return trackItem.bonusIdsForTrackGear(item.trackProperties);
    }
    if (item.craftedProperties) {
        return craftedItem.bonusIdsForCraftedGear(item.craftedProperties);
    }

    throw new Error('Invalid item type');
};

module.exports = {
    ItemTypes,
    fromSimc,
    isDescriptionLine,
    isStatsLine,
    getItemLevel,
    getBonusIds,
};
