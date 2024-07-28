// 1. Find the Largest Number in an Array

const input = prompt("Enter numbers separated by commas:");
const numbers = input.split(',').map(Number);

const largest = Math.max(...numbers);
console.log("The largest number is:", largest);


// 2. Find the Second Largest Number in an Array

const input1 = prompt("Enter numbers separated by commas:");
const numbers1 = input.split(',').map(Number);

const uniqueNumbers = [...new Set(numbers1)];
const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
const secondLargest = sortedNumbers[1];
console.log("The second largest number is:", secondLargest);


// 3. Find the Smallest Number in an Array

const input2 = prompt("Enter numbers separated by commas:");
const numbers2 = input.split(',').map(Number);

const smallest = Math.min(...numbers2);
console.log("The smallest number is:", smallest);


// 4. Find the Sum of the Even Numbers in an Array

const input3 = prompt("Enter numbers separated by commas:");
const numbers3 = input.split(',').map(Number);
const sumOfEvens = numbers3
  .filter(num => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log("The sum of even numbers is:", sumOfEvens);


// 5. Find the Odd Numbers in an Array and Push into a New Array

const input4 = prompt("Enter numbers separated by commas:");
const numbers4 = input.split(',').map(Number);

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("The odd numbers are:", oddNumbers);


