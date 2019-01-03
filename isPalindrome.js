// Create an algorithm to test if a string is a palindrome

Input: String
Output: Boolean

Step 1. identify nonRegEx: /[^A-Za-z0–9]/g or /\[W_]/g
Step 2. replace nonRegEx using the replace method
Step 3. everything to lowercase and compare to reversed str

function isPalindrome (str) {
  var nonRegEx = /\[W_]/g;
  var shortStr = str.toLowerCase().replace(nonRegEx, '');
  var reversedStr = shortStr.splt('').reverse().join('');
  
  return shortStr === reversedStr;
};
