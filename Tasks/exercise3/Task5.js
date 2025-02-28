/*
Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

  */

function flattenArray(arr) {
    let arr2=arr.flat();
    return arr2;
  }
  
  console.log(flattenArray([1,2,3,4,[5,6],7]))