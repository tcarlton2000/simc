const Types = require('./types');

const ItemTypes = Types.ItemTypes;
const CraftedTypes = Types.CraftedTypes;
const Embellishments = Types.Embellishments;

/** @type Types.Item[] */
exports.items = [
    {
        name: 'Grimhorns of the Sinister Savant',
        slot: 'head',
        id: 217212,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 480,
            track: 'Veteran',
            trackNumber: 8,
        },
    },
    {
        name: 'Amice of the Sinister Savant',
        slot: 'shoulder',
        id: 217214,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 480,
            track: 'Veteran',
            trackNumber: 8,
        },
    },
    {
        name: 'Cursed Robes of the Sinister Savant',
        slot: 'chest',
        id: 217215,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 480,
            track: 'Champion',
            trackNumber: 4,
        },
    },
    {
        name: 'Leggings of the Sinister Savant',
        slot: 'legs',
        id: 217213,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 480,
            track: 'Champion',
            trackNumber: 4,
        },
    },
    {
        name: 'Suffused Handwraps',
        slot: 'hands',
        id: 204787,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 350,
            track: 'Veteran',
            trackNumber: 4,
        },
    },
    {
        name: 'Snipping Sleet Circle',
        slot: 'finger1',
        id: 210377,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 441,
            track: 'Veteran',
            trackNumber: 4,
        },
    },
    {
        name: 'Belor\'relos, the Suncaller',
        slot: 'trinket1',
        id: 207172,
        type: ItemTypes.TRACK,
        properties: {
            baseItemLevel: 441,
            track: 'Awakened',
            trackNumber: 8,
        },
    },
    {
        name: 'Vibrant Wildercloth Shawl',
        slot: 'back',
        id: 193511,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
            quality: 5,
        },
    },
    {
        name: 'Vibrant Wildercloth Wristwraps',
        slot: 'wrist',
        id: 193510,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
            quality: 5,
        },
    },
    {
        name: 'Vibrant Wildercloth Handwraps',
        slot: 'hands',
        id: 193504,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Vibrant Wildercloth Handwraps',
        slot: 'hands',
        id: 193504,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
            quality: 5,
        },
    },
    {
        name: 'Signet of Titanic Insight',
        slot: 'finger1',
        id: 192999,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
            quality: 5,
        },
    },
    {
        name: 'Signet of Titanic Insight',
        slot: 'finger1',
        id: 192999,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Torc of Passed Time',
        slot: 'neck',
        id: 201759,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
            quality: 5,
        },
    },
    {
        name: 'Torc of Passed Time',
        slot: 'neck',
        id: 201759,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Band of New Beginnings',
        slot: 'finger1',
        id: 194082,
        type: ItemTypes.CRAFTED,
        properties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
];
