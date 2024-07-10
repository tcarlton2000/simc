// @ts-check

const importSimc = require('./').importSimc;
const assert = require('assert');
const { it } = require('node:test');
const gearset = require('../gearset');
const item = require('../item');

/** @type {gearset.Gearset} */
const expectedOutputFileContent = {
    header: [
        '# Cieta - Demonology - 2024-01-12 14:59 - US/Thunderhorn',
        '# SimC Addon 10.2.0-01',
        '# WoW 10.2.0.52808, TOC 100200',
        '# Requires SimulationCraft 1000-01 or newer',
        '',
        'warlock="Cieta"',
        'level=70',
        'race=gnome',
        'region=us',
        'server=thunderhorn',
        'role=spell',
        'professions=alchemy=75/herbalism=31',
        'spec=demonology',
        '',
        'talents=BoQAj5LiEN4VXhSin5RcWeAUggcASSkkAppAplkESBAAAAAK5ABJBKREkkkSaJRCBAAAAAAJC',
        '',
    ],
    equipped: [
        {
            name: 'Grimhorns of the Sinister Savant',
            slot: 'head',
            id: 217212,
            enchantId: 7052,
            type: item.ItemTypes.TRACK,
            trackProperties: {
                baseItemLevel: 480,
                trackInfo: {
                    track: 'Veteran',
                    trackNumber: 8,
                },
            },
        },
    ],
    inBag: [],
    inVault: [],
};

it('should convert SimC input string to Gearset object', async () => {
    const output = await importSimc('scripts/lib/import/test_input.simc');
    assert.deepStrictEqual(output, expectedOutputFileContent);
});
