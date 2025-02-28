/*

Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all 
duplicates removed.
*/



function removeDuplicates(arr) {
    return [...new Set(arr)]; // Using Set to remove duplicates
}

console.log(removeDuplicates([1, 8, 99, 8, 8, 70, 1])); 


