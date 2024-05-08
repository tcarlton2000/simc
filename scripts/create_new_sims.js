const Types = require('./lib/types');
const items = require('./lib/items').items;

const ItemTypes = Types.ItemTypes;
const CraftedTypes = Types.CraftedTypes;
const Embellishments = Types.Embellishments;

/**
 * Returns the item level for a given track item.
 * 
 * @param {Types.TrackProps} trackProperties
 * @returns {number}
 */
const getTrackItemLevel = (trackProperties) => {
    const trackBaseItemLevels = {
        Explorer: 454,
        Adventurer: 467,
        Veteran: 480,
        Champion: 493,
        Hero: 506,
        Myth: 519,
        Awakened: 493,
    };

    const itemLevelBump = (trackProperties.trackNumber - 1) * 3;
    const extraItemLevelBumps = Math.floor((trackProperties.trackNumber - 1) / 4);
    return trackBaseItemLevels[trackProperties.track] + itemLevelBump + extraItemLevelBumps;
}

/**
 * Returns the item level for a given crafted item.
 * 
 * @param {Types.CraftedProps} craftedProperties
 * @returns {number}
 */
const getCraftedItemLevel = (craftedProperties) => {
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

    return startingItemLevel + (craftedProperties.quality - 1) * 3 + extraItemLevelBump;
}

/**
 * Returns the item level for a given item.
 * 
 * @param {Types.Item} item
 * @returns {number}
 */
 const getItemLevel = (item) => {
    if (item.type === ItemTypes.TRACK) {
        return getTrackItemLevel(item.properties);
    }
    if (item.type === ItemTypes.CRAFTED) {
        return getCraftedItemLevel(item.properties);
    }

    throw new Error("Invalid item type");
 }

/**
 * Returns the list of bonus ids for a track item.
 * 
 * @param {Types.TrackProps} trackProperties 
 * @returns {number[]}
 */
const bonusIdsForTrackGear = (trackProperties) => {
    const itemLevelBonusModifierStart = 1472;

    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    }

    const trackNameBonusIds = {
        Explorer: range(10321, 10328),
        Adventurer: range(10305, 10312),
        Veteran: range(10341, 10348),
        Champion: range(10313, 10320),
        Hero: range(10329, 10334),
        Myth: [],
        Awakened: range(10407, 10418),
    }

    const bonusIds = [];
    bonusIds.push(trackNameBonusIds[trackProperties.track][trackProperties.trackNumber - 1]);
    const bonusItemLevel = getTrackItemLevel(trackProperties) - trackProperties.baseItemLevel;
    if (bonusItemLevel > 0) {
        bonusIds.push(itemLevelBonusModifierStart + bonusItemLevel)
    }

    return bonusIds;
};

/**
 * Returns the list of bonus ids for a crafted item.
 * 
 * @param {Types.CraftedProps} craftedProperties 
 * @returns {number[]}
 */
const bonusIdsForCraftedGear = (craftedProperties) => {
    const embellishments = {
        [Embellishments.SHADOWFLAME]: 9379,
        [Embellishments.BLUE_SILKEN_LINING]: 8932,
    }
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
 * Returns the list of bonus ids for an item.
 * 
 * @param {Types.Item} item 
 * @returns {number[]}
 */
const getBonusIds = (item) => {
    if (item.type === ItemTypes.TRACK) {
        return bonusIdsForTrackGear(item.properties);
    }
    if (item.type === ItemTypes.CRAFTED) {
        return bonusIdsForCraftedGear(item.properties);
    }
    
    throw new Error("Invalid item type");
};

for (const item of items) {
    const line1 = `# ${item.name} (${getItemLevel(item)})`;
    const line2_template = `# ${item.slot}=,id=${item.id},bonus_id=${getBonusIds(item).join('/')}`;

    if (item.type === ItemTypes.CRAFTED) {
        const craftedStatIds = [32, 36, 40, 49];
        for (i = 0; i < craftedStatIds.length; i++) {
            const stat1 = craftedStatIds[i];
            for (j = i + 1; j < craftedStatIds.length; j++) {
                const stat2 = craftedStatIds[j]
                const line2 = `${line2_template},crafted_stats=${stat1}/${stat2},crafting_quality=${item.properties.quality}`;
        
                console.log(line1);
                console.log(line2);
            }
        }
    } else {
        console.log(line1)
        console.log(line2_template)
    }
    console.log('#');
}