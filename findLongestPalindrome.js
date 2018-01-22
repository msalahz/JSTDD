/*
Find the longest single-word palindrome within a phrase.
The phrase will only contain letters (no symbols, punctuation, or numbers).
Your palindrome detection should be case-insensitive.
If there are multiple longest palindromes of equal length, return the last one.
*/
function findLongestPalindrome(sentence) {
  // split sentence into words
  const words = sentence.split(' ');
  // iterate words and collect the palindromes
  const palindromes = words.filter(isPalindrome);
  // sort the list of palindromes by word length
  const sortedPalindromes = palindromes.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  return sortedPalindromes[sortedPalindromes.length - 1];
};

function reverseString(string) {
  return string.split('').reverse().join('');
};

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word === reverseString(word);
};

function sortAscendingByLength(a, b) {
  return a.length > b.length ? 1 : -1;
};

module.exports = findLongestPalindrome;