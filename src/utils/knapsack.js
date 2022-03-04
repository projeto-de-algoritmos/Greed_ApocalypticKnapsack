const options = require("../data/desasters.json");
const items = require("../data/items.json");

const knapSack = (selected_options, bagCapacity) => {
  let weight = 0, itemIndex = 0, solution = [];

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

function calculateWeights(selected_options) {
  let weights = {
    armor: 0,
    attack: 0,
    uv_protection: 0,
    freshness: 0,
  };
  selected_options.forEach((optionIndex) => {
    // console.log(options[optionIndex].name);
    weights["armor"] += options[optionIndex].armor;
    weights["attack"] += options[optionIndex].attack;
    weights["uv_protection"] += options[optionIndex].uv_protection;
    weights["freshness"] += options[optionIndex].freshness;
  });

  return weights;
}

function orderByPriority(selected_options) {
  let weighted_items = items.slice()

  let weights = calculateWeights(selected_options);

  weighted_items.forEach((item) => {
    item["armor"] *= weights["armor"];
    item["attack"] *= weights["attack"];
    item["uv_protection"] *= weights["uv_protection"];
    item["freshness"] *= weights["freshness"];
  });

  return weighted_items.sort((a, b) => {
    let priorityA =
      a["armor"] + a["attack"] + a["uv_protection"] + a["freshness"];
    let priorityB =
      b["armor"] + b["attack"] + b["uv_protection"] + b["freshness"];

    if (priorityA > priorityB) {
      return -1;
    }
    if (priorityA < priorityB) {
      return 1;
    }
    return 0;
  });
}