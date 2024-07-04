// 1. Given an array of strings, use the map function to create a new array where each string is converted to uppercase and sort the data

strings = prompt("Enter strings separated by commas:").split(",").map(str => str.trim());

function convertToUppercaseAndSort(strings) {

    const uppercaseArray = strings.map(str => str.toUpperCase());
    uppercaseArray.sort();

    return uppercaseArray;
}

result = convertToUppercaseAndSort(strings)
console.log("Converted to uppercase and sorted:", result);

// Output:
// Enter strings separated by commas:ramya, sanvi, divya
// Converted to uppercase and sorted: [ 'DIVYA', 'RAMYA', 'SANVI' ]


// 2. Given an array of numbers, use the forEach function to add 1 to each number in the array and sort the data in descending

numbers = prompt("Enter numbers separated by spaces:").split(" ").map(Number);

function addOneAndSortDescending(numbers) {

    numbers.forEach((num, index, array) => {
        array[index] = num + 1;
    });
    numbers.sort((a, b) => b - a);

    return numbers;
}

result = addOneAndSortDescending(numbers);
console.log("Added 1 to each number and sorted the data in descending:", result);

// Enter numbers separated by spaces:1 2 3 4 5
// Added 1 to each number and sorted the data in descending: [ 6, 5, 4, 3, 2 ]



// 3. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters and join the data separated by space using reduce and reduceRight

function filterAndJoin(strings) {

    const filteredArray = strings.filter(str => str.length > 3);

    const joinedStringLeft = filteredArray.reduce((a, b) => a + " " + b, "").trim();

    const joinedStringRight = filteredArray.reduceRight((a, b) => a + " " + b, "").trim();

    return { left: joinedStringLeft, right: joinedStringRight };
}

const strings = prompt("Enter strings separated by commas:").split(",").map(str => str.trim());
const result = filterAndJoin(strings);

console.log("Joined strings with more than 3 characters:");
console.log("Left to right:", result.left);
console.log("Right to left:", result.right);

// Enter strings separated by commas:divya, ramya, bob, go, so, I
// Joined strings with more than 3 characters:
// Left to right: divya ramya
// Right to left: ramya divya



