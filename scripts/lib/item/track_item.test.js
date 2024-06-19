// @ts-check

const trackItem = require('./track_item');
const { it } = require('node:test');
const assert = require('assert');

it('should return valid TrackProps', () => {
    const itemLevel = 460;
    const bonusIds = [10315, 1491];
    const expectedTrackProps = {
        baseItemLevel: 441,
        trackInfo: {
            track: 'Champion',
            trackNumber: 3,
        },
    };

    const output = trackItem.getTrackPropertiesFromStatsLine(
        itemLevel,
        bonusIds,
    );
    assert.deepStrictEqual(output, expectedTrackProps);
});
