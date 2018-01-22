const getShoesNameWordsAndIndicateWhichWordContainsLace = require('../getShoesNameWordsAndIndicateWhichWordContainsLace');
const expect = require('chai').expect;

describe('Get shoes name words and indicate which word contains lace', function()  {
  const inventory = [
    {
      name: "Brunello Cucinelli",
      shoes: [
        { name: "tasselled black low-top lace-up", price: 1000 },
        { name: "tasselled green low-top lace-up", price: 1100 },
        { name: "plain beige suede moccasin", price: 950 },
        { name: "plain olive suede moccasin", price: 1050 }
      ]
    },
    {
      name: "Gucci",
      shoes: [
        { name: "red leather laced sneakers", price: 800 },
        { name: "black leather laced sneakers", price: 900 }
      ]
    }
  ];
  const expected = [
    {
      nameWords: ["tasselled", "black", "low-top", "lace-up"],
      targetWordIndex: 3
    },
    {
      nameWords: ["tasselled", "green", "low-top", "lace-up"],
      targetWordIndex: 3
    },
    {
      nameWords: ["red", "leather", "laced", "sneakers"],
      targetWordIndex: 2
    },
    {
      nameWords: ["black", "leather", "laced", "sneakers"],
      targetWordIndex: 2
    }
  ];

  it('Given an inventory of shoes from various high-fashion designers expected targetWordIndex in the first item in the output should be 3​​​​​', function()  {
    const actual = getShoesNameWordsAndIndicateWhichWordContainsLace(inventory);
    expect(actual[0].targetWordIndex).to.be.equal(expected[0].targetWordIndex);
  });

  it('Given an inventory of shoes from various high-fashion designers expected output should be shoe names that contain "lace" in them, and indicate which word contains "lace"​​​​​', function()  {
    const actual = getShoesNameWordsAndIndicateWhichWordContainsLace(inventory);
    expect(actual).to.be.deep.equal(expected);
  });
});