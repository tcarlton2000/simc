const item = require('./item');
const it = require('../testing/it');
const assert = require('assert');
const Types = require('../types');

it.sync('should match a description line', () => {
    const line = '# Some Item Name (441)';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, true);
});

it.sync('should not match a description line for empty line', () => {
    const line = '';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a description line for empty comment line', () => {
    const line = '#';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a description line for stats line', () => {
    const line = 'shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a description line for header line', () => {
    const line = '### Gear from Bags';
    const output = item.isDescriptionLine(line);
    assert.strictEqual(output, false);
});

it.sync('should match a stats line for equipped item', () => {
    const line = 'shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, true);
});

it.sync('should match a stats line for bag or vault item', () => {
    const line = '# shoulder=,id=207270,bonus_id=6652/9600/9559/9513/1494/8767';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, true);
});

it.async('should not match a stats line for a description line', () => {
    const line = '# Some Item Name (441)';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a stats line for empty line', () => {
    const line = '';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a stats line for empty comment line', () => {
    const line = '#';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it.sync('should not match a stats line for header line', () => {
    const line = '### Gear from Bags';
    const output = item.isStatsLine(line);
    assert.strictEqual(output, false);
});

it.sync('should convert description and stat lines to item', () => {
    const descriptionLine = '# Ashes of the Embersoul (460)';
    const statsLine = '# trinket1=,id=207167,bonus_id=9562/1491';
    const expectedItem = {
        name: 'Ashes of the Embersoul',
        slot: 'trinket1',
        id: 207167,
        type: Types.ItemTypes.TRACK,
        properties: {
            baseItemLevel: 441,
            track: 'Champion',
            trackNumber: 3,
        }
    }

    const output = item.fromSimc(descriptionLine, statsLine);
    assert.deepStrictEqual(output, expectedItem);
});
