// @ts-check

const item = require('./item');
const CraftedTypes = require('./item/crafted_item').CraftedTypes;
const ItemTypes = item.ItemTypes;
const Embellishments = require('./item/crafted_item').Embellishments;

/** @type item.Item[] */
exports.items = [
    {
        name: 'Torc of Passed Time',
        slot: 'neck',
        id: 201759,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
];

/** @type item.Item[] */
exports.cloth = [
    {
        name: 'Surveyor\'s Seasoned Hood',
        slot: 'head',
        id: 201936,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pendant of Impending Perils',
        slot: 'neck',
        id: 192996,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Seasoned Shoulders',
        slot: 'shoulder',
        id: 201937,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Tailored Cloak',
        slot: 'back',
        id: 193500,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Cloth Robe',
        slot: 'chest',
        id: 193515,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Cloth Bands',
        slot: 'wrist',
        id: 193497,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Seasoned Gloves',
        slot: 'hands',
        id: 201938,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Seasoned Cord',
        slot: 'waist',
        id: 201940,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Seasoned Pants',
        slot: 'legs',
        id: 201939,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Cloth Treads',
        slot: 'feet',
        id: 193498,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Band of New Beginnings',
        slot: 'finger1',
        id: 194082,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Overseer\'s Writhebark Stave',
        slot: 'main_hand',
        id: 194893,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Core Explorer\'s Compendium',
        slot: 'off_hand',
        id: 194877,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
];

/** @type item.Item[] */
exports.leather = [
    {
        name: 'Pioneer\'s Practiced Cowl',
        slot: 'head',
        id: 201941,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pendant of Impending Perils',
        slot: 'neck',
        id: 192996,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Practiced Shoulderpads',
        slot: 'shoulder',
        id: 201942,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Tailored Cloak',
        slot: 'back',
        id: 193500,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Leather Tunic',
        slot: 'chest',
        id: 193390,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Leather Wristguards',
        slot: 'wrist',
        id: 193388,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Practiced Gloves',
        slot: 'hands',
        id: 201943,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Practiced Belt',
        slot: 'waist',
        id: 201945,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Practiced Leggings',
        slot: 'legs',
        id: 201944,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pioneer\'s Leather Boots',
        slot: 'feet',
        id: 193386,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Band of New Beginnings',
        slot: 'finger1',
        id: 194082,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Draconium Dirk',
        slot: 'main_hand',
        id: 190483,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
];

/** @type item.Item[] */
exports.mail = [
    {
        name: 'Trailblazer\'s Toughened Coif',
        slot: 'head',
        id: 201946,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Pendant of Impending Perils',
        slot: 'neck',
        id: 192996,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Toughened Spikes',
        slot: 'shoulder',
        id: 201947,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Surveyor\'s Tailored Cloak',
        slot: 'back',
        id: 193500,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Scale Vest',
        slot: 'chest',
        id: 193394,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Scale Bracers',
        slot: 'wrist',
        id: 193393,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Toughened Grips',
        slot: 'hands',
        id: 201948,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Toughened Chainbelt',
        slot: 'waist',
        id: 201950,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Toughened Legguards',
        slot: 'legs',
        id: 201949,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Trailblazer\'s Scale Boots',
        slot: 'feet',
        id: 193392,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Band of New Beginnings',
        slot: 'finger1',
        id: 194082,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Draconium Axe',
        slot: 'main_hand',
        id: 190487,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Draconium Defender',
        slot: 'off_hand',
        id: 201322,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.WHELPLING_CRAFTED,
            quality: 5,
        },
    },
];

/** @type item.Item[] */
exports.sparkCloth = [
    {
        name: 'Torc of Passed Time',
        slot: 'neck',
        id: 201759,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Vibrant Wildercloth Shawl',
        slot: 'back',
        id: 193511,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Vibrant Wildercloth Wristwraps',
        slot: 'wrist',
        id: 193510,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Vibrant Wildercloth Girdle',
        slot: 'waist',
        id: 193516,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Vibrant Wildercloth Slacks',
        slot: 'legs',
        id: 193518,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Vibrant Wildercloth Slippers',
        slot: 'feet',
        id: 193519,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Signet of Titanic Insight',
        slot: 'finger1',
        id: 192999,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
];

exports.sparkMail = [
    {
        name: 'Flame-Touched Treads',
        slot: 'feet',
        id: 193421,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Flame-Touched Chain',
        slot: 'waist',
        id: 193425,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Flame-Touched Helmet',
        slot: 'head',
        id: 193423,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Flame-Touched Spaulders',
        slot: 'shoulder',
        id: 193424,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
            embellishment: Embellishments.BLUE_SILKEN_LINING,
        },
    },
    {
        name: 'Flame-Touched Chainmail',
        slot: 'chest',
        id: 193422,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Flame-Touched Handguards',
        slot: 'hands',
        id: 193427,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Flame-Touched Legguards',
        slot: 'legs',
        id: 193426,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Flame-Touched Cuffs',
        slot: 'wrist',
        id: 193428,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Vibrant Wildercloth Shawl',
        slot: 'back',
        id: 193511,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Torc of Passed Time',
        slot: 'neck',
        id: 201759,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Signet of Titanic Insight',
        slot: 'finger1',
        id: 192999,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Ring-Bound Hourglass',
        slot: 'finger1',
        id: 193000,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Bow of the Dragon Hunter',
        slot: 'main_hand',
        id: 193449,
        type: ItemTypes.CRAFTED,
        craftedProperties: {
            type: CraftedTypes.SPARK_CRAFTED,
            quality: 5,
        },
    },
    {
        name: 'Dalaran Defender\'s Helmet',
        slot: 'head',
        id: 218073,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Armguards',
        slot: 'wrist',
        id: 218077,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Bolter',
        slot: 'main_hand',
        id: 219232,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Drape',
        slot: 'back',
        id: 218081,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Cloak',
        slot: 'back',
        id: 218080,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Shawl',
        slot: 'back',
        id: 218079,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Cape',
        slot: 'back',
        id: 218078,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Cinch',
        slot: 'waist',
        id: 218076,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Dalaran Defender\'s Stompers',
        slot: 'feet',
        id: 218071,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
];

exports.custom = [
    {
        name: 'Stormwing Harrier\'s Skullmask',
        slot: 'head',
        id: 217183,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 480,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Cold Crisp Collar',
        slot: 'neck',
        id: 210379,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Stormwing Harrier\'s Pinions',
        slot: 'shoulder',
        id: 217185,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 480,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Suffused Greatcloak',
        slot: 'back',
        id: 204896,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 350,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Stormwing Harrier\'s Cuirass',
        slot: 'chest',
        id: 217181,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 480,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Stormwing Harrier\'s Handguards',
        slot: 'hands',
        id: 217182,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 480,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Winter Forager\'s Waistguard',
        slot: 'waist',
        id: 210370,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Stormwing Harrier\'s Greaves',
        slot: 'legs',
        id: 217184,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 480,
            trackInfo: {
                track: 'Champion',
                trackNumber: 4,
            }
        }
    },
    {
        name: 'Rime Ridden Ring',
        slot: 'finger1',
        id: 210378,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Beautiful Blizzard Binding',
        slot: 'finger2',
        id: 210376,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
    {
        name: 'Winter Forager\'s Curve',
        slot: 'main_hand',
        id: 210404,
        type: ItemTypes.TRACK,
        trackProperties: {
            baseItemLevel: 441,
            trackInfo: {
                track: 'Veteran',
                trackNumber: 8,
            }
        }
    },
]