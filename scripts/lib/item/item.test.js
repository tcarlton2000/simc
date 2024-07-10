// @ts-check

const item = require('./');
const { it } = require('node:test');
const assert = require('assert');

it('should match a description line', () => {
    const line = '# Some Item Name (441)';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, true);
});

it('should not match a description line for empty line', () => {
    const line = '';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it('should not match a description line for empty comment line', () => {
    const line = '#';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it('should not match a description line for stats line', () => {
    const line = 'shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it('should not match a description line for header line', () => {
    const line = '### Gear from Bags';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it('should match a stats line for equipped item', () => {
    const line = 'shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, true);
});

it('should match a stats line for bag or vault item', () => {
    const line = '# shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, true);
});

it('should not match a stats line for a description line', () => {
    const line = '# Some Item Name (441)';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it('should not match a stats line for empty line', () => {
    const line = '';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it('should not match a stats line for empty comment line', () => {
    const line = '#';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it('should not match a stats line for header line', () => {
    const line = '### Gear from Bags';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it('should convert description and stat lines to item', () => {
    const descriptionLine = '# Dreambinder, Loom of the Great Cycle (515))';
    const statsLine =
        'main_hand=,id=208616,enchant_id=6643,bonus_id=9418/10414/1546/8767';

    /** @type {item.Item} */
    const expectedItem = {
        name: 'Dreambinder, Loom of the Great Cycle',
        slot: 'main_hand',
        id: 208616,
        enchantId: 6643,
        type: item.ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Awakened',
                trackNumber: 8,
            },
        },
    };

    const output = item.fromSimc(descriptionLine, statsLine);
    assert.deepStrictEqual(output, expectedItem);
});

it('should handle empty bonus id list', () => {});
it('should handle empty enchant id', () => {});
it('should handle empty gem id list', () => {});
