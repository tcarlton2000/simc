# World of Warcraft Item Descriptions

## simc output

For an item with the below information

```
Item name: Big Beautiful Item
Slot: Head
Item Id: 234323
Item Level: 675
```

It should have the below simc output

```
# Big Beautiful Item (675)
# head=,id=234323
```

When generating simc output, put all of the output into a single copy/paste box.

### Bonus ids

Below is an example of an item with the bonus ids of 2343, 34543, and 3234:

```
# Big Beautiful Item (675)
# head=,id=234323,bonus_id=2343/34543/3234
```

#### Crafted Gear

##### Items

###### Non Spark

Below are all non spark gear:

- https://www.wowhead.com/item=222833/pioneers-cloth-cuffs
- https://www.wowhead.com/item=222838/pioneers-perfected-leggings
- https://www.wowhead.com/item=222840/pioneers-perfected-gloves
- https://www.wowhead.com/item=222839/pioneers-perfected-mantle
- https://www.wowhead.com/item=222836/pioneers-perfected-hood
- https://www.wowhead.com/item=222832/pioneers-cloth-slippers
- https://www.wowhead.com/item=222837/pioneers-cloth-robe
- https://www.wowhead.com/item=222834/pioneers-perfected-cord
- https://www.wowhead.com/item=219475/trackers-chitin-hauberk
- https://www.wowhead.com/item=219474/trackers-chitin-cuffs
- https://www.wowhead.com/item=219473/trackers-chitin-galoshes
- https://www.wowhead.com/item=219483/trackers-toughened-handguards
- https://www.wowhead.com/item=219485/trackers-toughened-girdle
- https://www.wowhead.com/item=219484/trackers-toughened-links
- https://www.wowhead.com/item=219481/trackers-toughened-headgear
- https://www.wowhead.com/item=219482/trackers-toughened-shoulderguards
- https://www.wowhead.com/item=215131/malleable-pendant
- https://www.wowhead.com/item=215130/malleable-band
- https://www.wowhead.com/item=225646/4ut0-41m3r
- https://www.wowhead.com/ptr-2/item=222570/inquisitors-baton


##### Season

For The War Within Season 3, add the bonus id 12051 to blue (non-spark) crafted items. This makes it have a base item level of 662.

##### Item Level

Below is a mapping of crafted quality, item level, and bonus ids:

| Quality | Item Level | Bonus Id |
| ------- | ---------- | -------- |
| 1       | 662        | 9623     |
| 2       | 665        | 9624     |
| 3       | 668        | 9625     |
| 4       | 671        | 9226     |
| 5       | 675        | 9627     |

##### Stats

Below are the bonus ids to set specific stats to crafted items:

| Stats         | Bonus Id |
| ------------- | -------- |
| Crit/Haste    | 8790     |
| Crit/Mastery  | 8791     |
| Crit/Vers     | 8795     |
| Mastery/Haste | 8793     |
| Mastery/Vers  | 8794     |
| Vers/Haste    | 8792     |