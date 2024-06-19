// @ts-check

const carftedItem = require('./crafted_item');
const { it, describe } = require('node:test');
const assert = require('assert');

describe('crafted_item', () => {
    describe('getCraftedStatsFromValues', () => {
        it('should return CraftedStat for valid array', () => {
            const craftedStatsValues = [32, 49];
            const output =
                carftedItem.getCraftedStatsFromValues(craftedStatsValues);
            assert.strictEqual(output, carftedItem.CraftedStats.CRIT_MASTERY);
        });

        it('should return undefined for empty array', () => {
            const craftedStatsValues = [];
            const output =
                carftedItem.getCraftedStatsFromValues(craftedStatsValues);
            assert.strictEqual(output, undefined);
        });

        it('should return undefined for invalid array', () => {
            const craftedStatsValues = [1, 2, 3];
            const output =
                carftedItem.getCraftedStatsFromValues(craftedStatsValues);
            assert.strictEqual(output, undefined);
        });
    });

    describe('getCraftedPropertiesFromStatsLine', () => {});
});
