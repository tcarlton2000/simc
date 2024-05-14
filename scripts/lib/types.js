/** @typedef {string} CraftedStats */
const CraftedStats = {
    CRIT_HASTE: '32/36',
    CRIT_MASTERY: '32/49',
    CRIT_VERS: '32/40',
    HASTE_MASTERY: '36/49',
    HASTE_VERS: '36/40',
    VERS_MASTERY: '40/49',
};

/**
 * @typedef {Object} TrackProps
 * @property {number} baseItemLevel Base item level for a give item, used to calculate bonus_id for item
 * @property {string} track Used for labeling the track
 * @property {number} trackNumber Used for labeling the track number
 */

/**
 * @typedef {Object} CraftedProps
 * @property {CraftedTypes} type Type of craft used for the item
 * @property {Embellishments} [embellishment] Embellishment used on item, if any
 * @property {number} quality Expected quality of crafted item
 * @property {CraftedStats} [craftedStats] Crafted stats of the item 
 */

/**
 * @typedef {Object} Item
 * @property {string} name Name of the item
 * @property {string} slot Slot the item is used in
 * @property {number} id Wow item id
 * @property {number} enchantId
 * @property {number[]} gemIds
 * @property {ItemTypes} type Type of item, either CRAFTED or TRACK
 * @property {(TrackProps|CraftedProps)} properties Properties of the item type
 */

/**
 * @typedef {Object} Gearset
 * @property {string[]} header
 * @property {Item[]} equipped List of items that are equipped.
 * @property {Item[]} inBag List of items that are in bag.
 * @property {Item[]} inVault List of items in Great Vault.
 */

exports.Types = {};
exports.CraftedStats = CraftedStats;

/** @typedef {number} ItemTypes */
exports.ItemTypes = {
    CRAFTED: 0,
    TRACK: 1,
};

/** @typedef {number} CraftedTypes */
exports.CraftedTypes = {
    WHELPLING_CRAFTED: 0,
    SPARK_CRAFTED: 1,
}

/** @typedef {number} Embellishments */
exports.Embellishments = {
    SHADOWFLAME: 0,
    BLUE_SILKEN_LINING: 1,
}
