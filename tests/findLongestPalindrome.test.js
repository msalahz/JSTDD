const findLongestPalindrome = require('../findLongestPalindrome');
const expect = require('chai').expect;

describe('Find longest palindrome', () => {
  it('Given a sentence expected output should be the last longest single-word palindrome within input sentence', () => {
    const sentence = 'we had reached level ground. reviver The aerodynamic qualities of the car are such that little work was needed to modify the layout of the body for the racecar';
    const expected = 'racecar';
    expect(findLongestPalindrome(sentence)).to.be.equal(expected);
  });
});