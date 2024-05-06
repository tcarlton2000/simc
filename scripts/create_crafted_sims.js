const items = [
    {
        name: 'Life-Bound Belt',
        slot: 'waist',
        id: 193407,
        bonus_ids: [10249, 9405, 8902, 8960, 8932],
    },
    {
        name: 'Life-Bound Bindings',
        slot: 'wrist',
        id: 193419,
        bonus_ids: [10249, 9405, 8902, 8960, 8932],
    },
    {
        name: 'Life-Bound Boots',
        slot: 'feet',
        id: 193398,
        bonus_ids: [10249, 9405, 8902, 8960, 8932],
    },
    {
        name: 'Primal Molten Longsword',
        slot: 'main_hand',
        id: 190507,
        bonus_ids: [10249, 9405, 8902, 8960, 8932],
    },
]

const crafted_stat_ids = [32, 36, 40, 49];

for (const item of items) {
    const line1 = `# ${item.name} (502)`;
    const line2_template = `# ${item.slot}=,id=${item.id},bonus_id=${item.bonus_ids.join('/')}`;

    for (i = 0; i < crafted_stat_ids.length; i++) {
        const stat1 = crafted_stat_ids[i];
        for (j = i + 1; j < crafted_stat_ids.length; j++) {
            const stat2 = crafted_stat_ids[j]
            const line2 = `${line2_template},crafted_stats=${stat1}/${stat2},crafting_quality=5`;
    
            console.log(line1);
            console.log(line2);
        }
    }
    console.log('#');
}