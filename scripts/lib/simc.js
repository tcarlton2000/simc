// @ts-check

const fs = require('fs');
const item_lib = require('./item/item');

const ItemTypes = item_lib.ItemTypes;

/**
 * Write string to file
 *
 * @param {string} path
 * @param {string} content
 */
const writeToFile = (path, content) => {
    fs.writeFile(path, content, (err) => {
        if (err) throw err;
    });
};

/**
 * Generate simc for an item
 *
 * @param {item_lib.Item} item
 * @param {boolean} isEquipped
 */
const generateItem = (item, isEquipped) => {
    const line1 = `# ${item.name} (${item_lib.getItemLevel(item)})`;

    const line2Content = `${item.slot}=,id=${item.id},bonus_id=${item_lib
        .getBonusIds(item)
        .join('/')}`;
    const line2Template = isEquipped ? `# ${line2Content}` : line2Content;

    if (item.type === ItemTypes.CRAFTED) {
        const craftedStatIds = [32, 36, 40, 49];
        for (let i = 0; i < craftedStatIds.length; i++) {
            const stat1 = craftedStatIds[i];
            for (let j = i + 1; j < craftedStatIds.length; j++) {
                const stat2 = craftedStatIds[j];
                const line2 = `${line2Template},crafted_stats=${stat1}/${stat2},crafting_quality=${item.properties.quality}`;

                writeToFile('Output.simc', line1);
                writeToFile('Output.simc', line2);
            }
        }
    } else {
        writeToFile('Output.simc', line1);
        writeToFile('Output.simc', line2Template);
    }
    writeToFile('Output.simc', '#');
};
