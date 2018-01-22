/*
This is a variation of the "Fashion Inventory" problem.

It's the same inventory data structure:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

The task now is to find all the laced shoes. getShoesNameWordsAndIndicateWhichWordContainsLace
Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.

*/

function getAllDesignersShoesNames(inventory, includeWord) {
  return inventory.reduce((p, c) => {
    c.shoes.filter(s => s.name.includes(includeWord)).forEach(s => p.push(s.name));
    return p;
  }, []);
}

function getShowNameWordsAndTargetWordIndex(includeWord) {
  return function(shoeName) {
    const nameWords = shoeName.split(" ");
    const targetWordIndex = nameWords.findIndex(w => w.includes(includeWord));
    return { nameWords, targetWordIndex };
  };
}

module.exports = function getShoesNameWordsAndIndicateWhichWordContainsLace(inventory) {
  const includeWord = "lace";
  const shoesNames = getAllDesignersShoesNames(inventory, includeWord);
  return shoesNames.map(getShowNameWordsAndTargetWordIndex(includeWord));
};

                        