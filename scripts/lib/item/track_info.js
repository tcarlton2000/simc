// @ts-check

/**
 * @typedef {Object} TrackInfo
 * @property {string} track
 * @property {number} trackNumber
 */

const BONUS_ID_TO_TRACK_INFO = {
    10313: {
        track: 'Champion',
        trackNumber: 1,
    },
    10314: {
        track: 'Champion',
        trackNumber: 2,
    },
    10315: {
        track: 'Champion',
        trackNumber: 3,
    },
    10316: {
        track: 'Champion',
        trackNumber: 4,
    },
    10317: {
        track: 'Champion',
        trackNumber: 5,
    },
    10318: {
        track: 'Champion',
        trackNumber: 6,
    },
    10319: {
        track: 'Champion',
        trackNumber: 7,
    },
    10320: {
        track: 'Champion',
        trackNumber: 8,
    },
    10329: {
        track: 'Hero',
        trackNumber: 1,
    },
    10330: {
        track: 'Hero',
        trackNumber: 2,
    },
    10331: {
        track: 'Hero',
        trackNumber: 3,
    },
    10332: {
        track: 'Hero',
        trackNumber: 4,
    },
    10333: {
        track: 'Hero',
        trackNumber: 5,
    },
    10334: {
        track: 'Hero',
        trackNumber: 6,
    },
    10335: {
        track: 'Myth',
        trackNumber: 1,
    },
    10336: {
        track: 'Myth',
        trackNumber: 2,
    },
    10337: {
        track: 'Myth',
        trackNumber: 3,
    },
    10338: {
        track: 'Myth',
        trackNumber: 4,
    },
    10341: {
        track: 'Veteran',
        trackNumber: 1,
    },
    10342: {
        track: 'Veteran',
        trackNumber: 2,
    },
    10343: {
        track: 'Veteran',
        trackNumber: 3,
    },
    10344: {
        track: 'Veteran',
        trackNumber: 4,
    },
    10345: {
        track: 'Veteran',
        trackNumber: 5,
    },
    10346: {
        track: 'Veteran',
        trackNumber: 6,
    },
    10347: {
        track: 'Veteran',
        trackNumber: 7,
    },
    10348: {
        track: 'Veteran',
        trackNumber: 8,
    },
    10407: {
        track: 'Awakened',
        trackNumber: 1,
    },
    10408: {
        track: 'Awakened',
        trackNumber: 2,
    },
    10409: {
        track: 'Awakened',
        trackNumber: 3,
    },
    10410: {
        track: 'Awakened',
        trackNumber: 4,
    },
    10411: {
        track: 'Awakened',
        trackNumber: 5,
    },
    10412: {
        track: 'Awakened',
        trackNumber: 6,
    },
    10413: {
        track: 'Awakened',
        trackNumber: 7,
    },
    10414: {
        track: 'Awakened',
        trackNumber: 8,
    },
    10415: {
        track: 'Awakened',
        trackNumber: 9,
    },
    10416: {
        track: 'Awakened',
        trackNumber: 10,
    },
    10417: {
        track: 'Awakened',
        trackNumber: 11,
    },
    10418: {
        track: 'Awakened',
        trackNumber: 12,
    },
};

/**
 * Converts list of bonus ids to track info.
 *
 * @param {number[]} bonusIds
 * @returns {TrackInfo|undefined}
 */
function fromSimc(bonusIds) {
    for (const bonusId of bonusIds) {
        if (!!BONUS_ID_TO_TRACK_INFO[bonusId]) {
            return BONUS_ID_TO_TRACK_INFO[bonusId];
        }
    }
}

module.exports = { fromSimc };
