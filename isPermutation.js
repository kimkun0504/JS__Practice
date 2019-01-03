// Determine if two strings are a permutation of each other
/* 
Input: 2 Strings
Output: Boolean

Step 1: split both strings and rearrange them so that they can be compared
Step 2: compare each of the strings and return
*/

// Using predefined methods
function isPermutation(str1, str2) {
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');
  
  return sortedStr1 === sortedStr2;
 }

// Using minimal code
 function isPermutation(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

