/*
Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/



function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"; 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++; 
        }
    }

    return count; 
}

console.log(countVowels("Hi bye shy")); 
console.log(countVowels("123"));
console.log(countVowels("AEIOU"));
