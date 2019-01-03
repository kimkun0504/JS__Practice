// Write a function that takes in an array as an argument/parameter and returns a new array with even numbers only
/*
Input: Array
Output: Array

Step 1: iterate through the array using the for if loop
Step 2: check each element to meet criteria %2 === 0
Step 3: push the even numbers into a new array and return
*/

//Using the ES5 syntax
function evenNumbers (arr) {
  var newArr = [];
  
  for(var i = 0; i < arr.length; i++){
     if(arr[i] % 2 === 0) {
        newArr.push(arr[i]);
        }
      }
   return newArr;
  }
  
//Using the ES6 syntax
function evenNumbers (arr) {
    var evenArray = arr.filter((el) => el % 2 === 0);
    return evenArray;
    }

//Using minimal code
function evenNumbers (arr) {
  return arr.filter(el => el % 2 === 0);
}

