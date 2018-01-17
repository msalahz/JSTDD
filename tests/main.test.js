const main = require('../main');
const expect = require('chai').expect;

const countAllCharacters = main.countAllCharacters;
const getElementsGreaterThan10AtProperty = main.getElementsGreaterThan10AtProperty;
const removeElement = main.removeElement;
const getFirstElementOfProperty = main.getFirstElementOfProperty;
const getNthElementOfProperty = main.getNthElementOfProperty;

describe('getElementsGreaterThan10AtProperty', function()  {
  it('input banana output { b: 1, a: 2, n: 2 }​​​​​', function()  {
    const output = countAllCharacters('banana');
    expect(output).to.deep.equal({ b: 1, a: 3, n: 2 });
  });
});

describe('getElementsGreaterThan10AtProperty', function()  {
  it('input { key: [1, 20, 30] } output [20, 30] ', function()  {
    const obj = { key: [1, 20, 30] };
    const output = getElementsGreaterThan10AtProperty(obj, 'key');
    expect(getElementsGreaterThan10AtProperty(obj, 'key'))
      .to
      .deep
      .equal([20, 30]);
  });
});

describe('removeElement', function()  {
  it('input [1, 2, 3, 2, 1], 2 output [1, 3, 1] ', function()  {
    const output = removeElement([1, 2, 3, 2, 1], 2);
    expect(output).to.deep.equal([1, 3, 1]);
  });
});

describe('getFirstElementOfProperty', function()  {
  it('Basic case works', function()  {
    expect(getFirstElementOfProperty({ key: [1, 2, 4] }, 'key')).to.be.equal(1);
  });

  it('If the array is empty, it should return undefined.', function()  {
    expect(getFirstElementOfProperty({ key: [] }, 'key')).to.be.an('undefined');
  });

  it('If the property at the given key is not an array, it should return undefined.', function()  {
    expect(getFirstElementOfProperty({}, 'key')).to.be.an('undefined');
  });

  it('If there is no property at the key, it should return undefined.', function()  {
    expect(getFirstElementOfProperty({ key: 3 }, 'key')).to.be.an('undefined');
  });
});

describe('getNthElementOfProperty', function()  {
  it('Basic case', function()  {
    const obj = { key: [1, 2, 6] };
    expect(getNthElementOfProperty(obj, 'key', 1)).to.be.equal(2);
  });

  it('If the array is empty, it should return undefined.', function()  {
    expect(getNthElementOfProperty({ key: [] }, 'key', 1))
      .to
      .be
      .an('undefined');
  });

  it('If n is out of range, it should return undefined.', function()  {
    const obj = { key: [1, 2, 6] };
    expect(getNthElementOfProperty(obj, 'key', 3)).to.be.an('undefined');
  });

  it('If the property at the given key is not an array, it should return undefined.', function()  {
    expect(getNthElementOfProperty({ key: 3 }, 'key', 1)).to.be.an('undefined');
  });

  it('If there is no property at the key, it should return undefined.', function()  {
    expect(getNthElementOfProperty({}, null, 1)).to.be.an('undefined');
  });
});