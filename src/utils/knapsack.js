const options = require("../data/desasters.json");
const items = require("../data/items.json");

const knapSack = (selected_options, bagCapacity) => {
  let weight = 0;
  let solution = [];
  let itemIndex = 0

  let orderedItems = orderByPriority(selected_options);

  while (bagCapacity > weight) {
    let currentItem = orderedItems[itemIndex++];
    let itemDurability = 100;
    if (currentItem.weight + weight > bagCapacity) {
      itemDurability = ((bagCapacity - weight) / currentItem.weight) * 100;
    }
    solution.push({ item: currentItem.name, durability: itemDurability, weight: currentItem.weight });
    weight += currentItem.weight;
  }

  return solution
};

