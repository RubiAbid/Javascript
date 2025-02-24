//Write a  program to print all alphabets from a to z. – using while loop


let num = 97; // ASCII code for 'a'

while (num <= 122) { // ASCII code for 'z'
    console.log(String.fromCharCode(num)); // Convert ASCII to character
    num++; // Move to the next character
}
