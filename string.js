// REVERSE STRING
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("HELLO WORLD")); //output will be "DLROW OLLEH"


// SUBSTRING
let str = "Hello World";
let subString = "World";
let contain = str.includes(subString);
console.log(contain); //output will be true


// UPPER AND LOWER CASE
let string = "Hello World";
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// TRIM METHOD
let str1 = "  helloww  ";
console.log(str1.trim()); //output will be "Helloww"


// POSITION OF SUBSTRING
let str2 = "Hello World";
let subString2 = "World";
let position = str.indexOf(subString2);
console.log(position); //output will be 6


// replace all occurrences of a substring in a string
let str3 = "hello and , again hello";
let replace = str3.replace(/hello/g, 'waqar')
console.log(replace);  //output will be waqar and , again waqar


// split a string into an array of substrings
let str4 = 'HELLO'
console.log(str4.split(''));  //output will be ['H', 'E', 'L', 'L', 'O'] 


// purpose of the substring() method
let str5 = 'hello waqar'
console.log(str5.substring(0, 5)); //output will be hello (it will not iclude index 5 value)






