// @ts-check

const gearset = require('./');
const item = require('../item');
const assert = require('assert');
const { it } = require('node:test');

const simcLines = `# Cieta - Demonology - 2024-01-12 14:59 - US/Thunderhorn
# SimC Addon 10.2.0-01
# WoW 10.2.0.52808, TOC 100200
# Requires SimulationCraft 1000-01 or newer

warlock="Cieta"
level=70
race=gnome
region=us
server=thunderhorn
role=spell
professions=alchemy=75/herbalism=31
spec=demonology

talents=BoQAj5LiEN4VXhSin5RcWeAUggcASSkkAppAplkESBAAAAAK5ABJBKREkkkSaJRCBAAAAAAJC

# Grimhorns of the Sinister Savant (502)
head=,id=217212,enchant_id=7052,bonus_id=6652/10532/7982/10867/10884/10348/1494/8767`.split(
    '\n',
);

/** @type gearset.Gearset */
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

it('should convert SimC input string to Gearset object', () => {
    const output = gearset.fromSimc(simcLines);
    assert.deepStrictEqual(output, expectedOutputFileContent);
});
