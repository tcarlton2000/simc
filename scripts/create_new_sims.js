const item_lib = require('./lib/item');
const items = require('./lib/items').items;

const ItemTypes = item_lib.ItemTypes;

for (const item of items) {
    const line1 = `# ${item.name} (${item_lib.getItemLevel(item)})`;
    const line2_template = `# ${item.slot}=,id=${item.id},bonus_id=${item_lib
        .getBonusIds(item)
        .join('/')}`;

    if (item.type === ItemTypes.CRAFTED) {
        const craftedStatIds = [32, 36, 40, 49];
        for (i = 0; i < craftedStatIds.length; i++) {
            const stat1 = craftedStatIds[i];
            for (j = i + 1; j < craftedStatIds.length; j++) {
                const stat2 = craftedStatIds[j];
                const line2 = `${line2_template},crafted_stats=${stat1}/${stat2},crafting_quality=${item.properties.quality}`;

                console.log(line1);
                console.log(line2);
            }
        }
    } else {
        console.log(line1);
        console.log(line2_template);
    }
    console.log('#');
}
