// @ts-check

/** @typedef {string} CraftedTypes */
const CraftedTypes = {
    WHELPLING_CRAFTED: 'WHELPLING_CRAFTED',
    SPARK_CRAFTED: 'SPARK_CRAFTED',
};

/** @typedef {string} Embellishments */
const Embellishments = {
    SHADOWFLAME: 'SHADOWFLAME',
    BLUE_SILKEN_LINING: 'BLUE_SILKEN_LINING',
};

/** @typedef {string} CraftedStats */
const CraftedStats = {
    CRIT_HASTE: '32/36',
    CRIT_MASTERY: '32/49',
    CRIT_VERS: '32/40',
    HASTE_MASTERY: '36/49',
    HASTE_VERS: '36/40',
    VERS_MASTERY: '40/49',
};

/** @typedef {number} CraftedStatsBonusIds */
const CraftedStatsBonusIds = {
    [CraftedStats.CRIT_HASTE]: 8851,
    [CraftedStats.CRIT_MASTERY]: 8791,
    [CraftedStats.CRIT_VERS]: 8795,
    [CraftedStats.HASTE_MASTERY]: 8793,
    [CraftedStats.HASTE_VERS]: 8792,
    [CraftedStats.VERS_MASTERY]: 8794,
}

/**
 * @typedef {Object} CraftedProps
 * @property {CraftedTypes} type Type of craft used for the item
 * @property {Embellishments} [embellishment] Embellishment used on item, if any
 * @property {number} quality Expected quality of crafted item
 * @property {CraftedStats} [craftedStats] Crafted stats of the item
 */

const SHARD_CRAFTED_ITEMS = [
    193519, // Vibrant Wildercloth Slippers
    192999, // Signet of Titanic Insight
];

const NON_SHARD_CRAFTED_ITEMS = [
    192996, // Pendant of Impending Perils
    194082, // Band of New Beginnings
];

/**
 * Returns the item level for a given crafted item.
 *
 * @param {CraftedProps} craftedProperties
 * @returns {number}
 */
function getCraftedItemLevel(craftedProperties) {
    let startingItemLevel = 0;
    let extraItemLevelBump = 0;

    if (craftedProperties.type === CraftedTypes.SPARK_CRAFTED) {
        startingItemLevel = 489;
        if (craftedProperties.quality > 1) {
            extraItemLevelBump = 1;
        }
    }

    if (craftedProperties.type === CraftedTypes.WHELPLING_CRAFTED) {
        startingItemLevel = 473;
        if (craftedProperties.quality > 2) {
            extraItemLevelBump = 1;
        }
    }

    return (
        startingItemLevel +
        (craftedProperties.quality - 1) * 3 +
        extraItemLevelBump
    );
}

/**
 * Returns the list of bonus ids for a crafted item.
 *
 * @param {CraftedProps} craftedProperties
 * @returns {number[]}
 */
function bonusIdsForCraftedGear(craftedProperties) {
    const embellishments = {
        [Embellishments.SHADOWFLAME]: 9379,
        [Embellishments.BLUE_SILKEN_LINING]: 8932,
    };
    const bonusIds = [];

    if (craftedProperties.type === CraftedTypes.SPARK_CRAFTED) {
        bonusIds.push(10249);
        if (craftedProperties.embellishment) {
            bonusIds.push(8960);
            bonusIds.push(embellishments[craftedProperties.embellishment]);
        }
    }

    if (craftedProperties.type === CraftedTypes.WHELPLING_CRAFTED) {
        bonusIds.push(10357);
    }

    if (craftedProperties.quality > 1) {
        bonusIds.push(9400 + craftedProperties.quality);
    }

    return bonusIds;
}

/**
 *
 * @param {number[]} bonusIds
 * @param {CraftedStats} [craftedStats]
 * @returns {CraftedProps}
 */
function getCraftedPropertiesFromStatsLine(bonusIds, craftedStats) {
    // type
    const type = bonusIds.includes(10357)
        ? CraftedTypes.WHELPLING_CRAFTED
        : CraftedTypes.SPARK_CRAFTED;

    // embellishments
    /** @type {Embellishments|undefined} */
    let embellishment;
    if (bonusIds.includes(9379)) {
        embellishment = Embellishments.SHADOWFLAME;
    } else if (bonusIds.includes(8932)) {
        embellishment = Embellishments.BLUE_SILKEN_LINING;
    }

    // quality

    /** @type {CraftedProps} */
    const properties = {
        type,
        quality: 5,
    };

    if (!!craftedStats) {
        properties.craftedStats = craftedStats;
    }

    if (!!embellishment) {
        properties.embellishment = embellishment;
    }

    return properties;
}

/**
 *
 * @param {number[]} craftedStatValues
 * @returns {CraftedStats|undefined}
 */
function getCraftedStatsFromValues(craftedStatValues) {
    if (craftedStatValues.length !== 2) {
        return;
    }

    return craftedStatValues.sort().join('/');
}

module.exports = {
    SHARD_CRAFTED_ITEMS,
    NON_SHARD_CRAFTED_ITEMS,
    CraftedTypes,
    CraftedStats,
    Embellishments,
    getCraftedItemLevel,
    bonusIdsForCraftedGear,
    getCraftedPropertiesFromStatsLine,
    getCraftedStatsFromValues,
};
