const importSimc = require('./import').importSimc;
const assert = require('assert');
const it = require('../testing/it');
const Types = require('../types');


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
            name: 'Devout Ashdevil\'s Grimhorns',
            slot: 'head',
            id: 207272,
            enchantId: 7052,
            type: Types.ItemTypes.TRACK,
            properties: {
                baseItemLevel: 441,
                track: 'Champion',
                number: 8,
            }
        }
    ],
    inBag: [],
    inVault: [],
};

it.async('should convert SimC input string to Gearset object', async () => {
    const output = await importSimc('scripts/lib/import/test_input.simc');
    assert.deepStrictEqual(output, expectedOutputFileContent);
});
