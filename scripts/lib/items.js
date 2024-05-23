const Types = require('./types');

const ItemTypes = Types.ItemTypes;
const CraftedTypes = Types.CraftedTypes;
const Embellishments = Types.Embellishments;

/** @type Types.Item[] */
exports.items = [
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
];
