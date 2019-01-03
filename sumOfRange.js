// Given an array with two values, find the sum of those numbers within the range
/*
Input: Array with two values
Output: Sum of the range of the two values

Steps 1: find the smaller, Larger of the two values using Math.min and Math.max
Steps 2: create a loop that will add all the numbers in between the two values
Steps 3: return the sum of the two values
*/

// Using the ES5 syntax
function sumOfRange(arr) {
  var min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]),
      sum = 0;
      
   for(var i = min; i <= max; i++) {
     sum += i;
    }
 
 return sum;
 }
