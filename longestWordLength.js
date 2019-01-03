// Given a string, find the length of the longest word in the string
/*
Input: String
Output: Number (Length of the longest word)

Step 1: Split the string(sentence) into separate word elements in an array
Step 2: Iterate through the array and store the longest word in a var
Step 3: reuturn the stored longest word
*/

// Using the ES5 syntax
function longestWordLength (str) {
  var words = str.split(' '),
      maxLength = 0;
  
  for(var i = 0; i < words.length: i++) {
    if(maxLength < words[i].length) {
      maxLength = words[i].length
    }
  } 
  return maxLength;
}

// Using the ES6 syntax
function findLongestWordLength(str) {
  var longestWord = str.split(' ').reduce((longest, current) => longest.length > current.length ? longest : current);
  return longestWord.length
}

// Using as little as possible code
function findLongestWordLength(str) {
  return str.split(' ').reduce((longest, current) => longest.length > current.length ? longest : current).length
}
