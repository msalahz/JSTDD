const fromCharCode = String.fromCharCode;
const followingChar = char => char.substring(0, char.length - 1) + fromCharCode(char.charCodeAt(char.length - 1) + 1);
const capitalizeChar = char => char.toUpperCase();
const isLetter = char => char.match(/[a-z]/g);
const isVowel = char => char.match(/a|e|i|o|u/g);
const capitalizeCharIfVowel = char => isVowel(char) ? capitalizeChar(char) : char;
const getFollowingLetterIfLetter = char => isLetter(char) ? followingChar(char) : char;

function LetterChanges(str) {
  return str.split('')
    .map(getFollowingLetterIfLetter)
    .map(capitalizeCharIfVowel)
    .join('');

}

console.log(LetterChanges('sentence'));