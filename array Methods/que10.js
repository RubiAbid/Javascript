// Copy elements within the array using copyWithin() to shift the second element to the fourth position.


let arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(3, 1, 2);  // Copy the second element to the fourth position
console.log(arr1);
