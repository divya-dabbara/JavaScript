// 1. Create a function greet that takes a name and a callback function. The greet function should call the callback function, passing the name to it. Define a callback function that simply logs "Hello, [name]" to the console.

function callbackFunction(name) {
    console.log(`Hello, ${name}`);
}

function greet(name, callback) {
    callback(name);
}

greet("Divya", callbackFunction); // Hello, Divya


// 2.  Write a function that takes an array of numbers and uses the map function to create a new array where each number is doubled.

function doubleArray(arr) {
    let doubledArray = arr.map(num => num * 2);
    return doubledArray;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// 3. Create a function applyToEach that takes an array and a callback function. The applyToEach function should use the map function to apply the callback to each element of the array and return the new array.

function applyToEach(arr, callback) {
    return arr.map(callback);
}

function double(num) {
    return num * 2;
}

let _numbers = [1, 2, 3, 4, 5];
let _doubledNumbers = applyToEach(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// 4. Write a function that takes an array of strings and uses the map function to create a new array where each string is converted to uppercase.

function convertToUpperCase(arr) {
    let upperCaseArray = arr.map(str => str.toUpperCase());
    return upperCaseArray;
}

let strings = ["hello", "world", "javascript"];
let upperCaseStrings = convertToUpperCase(strings);
console.log(upperCaseStrings); // Output: ["HELLO", "WORLD", "JAVASCRIPT"]



