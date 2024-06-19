// @ts-check

const item = require('./item');
const CraftedTypes = require('./item/crafted_item').CraftedTypes;
const ItemTypes = item.ItemTypes;

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
