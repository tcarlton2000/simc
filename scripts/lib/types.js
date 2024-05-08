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
 */

/**
 * @typedef {Object} Item
 * @property {string} name Name of the item
 * @property {string} slot Slot the item is used in
 * @property {number} id Wow item id
 * @property {ItemTypes} type Type of item, either CRAFTED or TRACK
 * @property {(TrackProps|CraftedProps)} properties Properties of the item type
 */

exports.Types = {};

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
