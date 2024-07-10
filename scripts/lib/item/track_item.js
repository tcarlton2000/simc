// @ts-check

const track_info = require('./track_info');

/**
 * @typedef {Object} TrackProps
 * @property {number} baseItemLevel Base item level for a give item, used to calculate bonus_id for item
 * @property {track_info.TrackInfo} trackInfo
 */

/**
 * Returns the item level for a given track item.
 *
 * @param {TrackProps} trackProperties
 * @returns {number}
 */
function getTrackItemLevel(trackProperties) {
    const trackBaseItemLevels = {
        Explorer: 454,
        Adventurer: 467,
        Veteran: 480,
        Champion: 493,
        Hero: 506,
        Myth: 519,
        Awakened: 493,
    };

    const itemLevelBump = (trackProperties.trackInfo.trackNumber - 1) * 3;
    const extraItemLevelBumps = Math.floor(
        (trackProperties.trackInfo.trackNumber - 1) / 4,
    );
    return (
        trackBaseItemLevels[trackProperties.trackInfo.track] +
        itemLevelBump +
        extraItemLevelBumps
    );
}

/**
 * Returns the list of bonus ids for a track item.
 *
 * @param {TrackProps} trackProperties
 * @returns {number[]}
 */
function bonusIdsForTrackGear(trackProperties) {
    const itemLevelBonusModifierStart = 1472;

    const range = (start, end) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, i) => start + i);
    };

    const trackNameBonusIds = {
        Explorer: range(10321, 10328),
        Adventurer: range(10305, 10312),
        Veteran: range(10341, 10348),
        Champion: range(10313, 10320),
        Hero: range(10329, 10334),
        Myth: [],
        Awakened: range(10407, 10418),
    };

    const bonusIds = [];
    bonusIds.push(
        trackNameBonusIds[trackProperties.trackInfo.track][
            trackProperties.trackInfo.trackNumber - 1
        ],
    );
    const bonusItemLevel =
        getTrackItemLevel(trackProperties) - trackProperties.baseItemLevel;
    if (bonusItemLevel > 0) {
        bonusIds.push(itemLevelBonusModifierStart + bonusItemLevel);
    }

    return bonusIds;
}

/**
 *
 * @param {number} itemLevel
 * @param {number[]} bonusIds
 * @returns {TrackProps}
 */
function getTrackPropertiesFromStatsLine(itemLevel, bonusIds) {
    const trackInfo = track_info.fromSimc(bonusIds);
    if (!trackInfo) {
        throw new Error('Cannot determine track for item');
    }

    return {
        baseItemLevel: getBaseItemLevelFromStatsLine(itemLevel, bonusIds),
        trackInfo,
    };
}

/**
 *
 * @param {number} itemLevel
 * @param {number[]} bonusIds
 * @returns {number}
 */
function getBaseItemLevelFromStatsLine(itemLevel, bonusIds) {
    let additionalItemLevel = 0;
    for (const bonusId of bonusIds) {
        if (bonusId >= 1472 && bonusId <= 1672) {
            additionalItemLevel = bonusId - 1472;
            break;
        }
    }

    return itemLevel - additionalItemLevel;
}

module.exports = {
    getTrackItemLevel,
    bonusIdsForTrackGear,
    getTrackPropertiesFromStatsLine,
};
