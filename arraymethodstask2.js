//Task 1: Using concat()
//Objective: Merge two arrays into one.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
let result = array1.concat(array2);
console.log(result); // [1, 2, 3, 4, 5, 6]

// Task 2: Using flat()
// Objective: Flatten a nested array up to a specific depth.

const nestedArray = [1, [2, [3, [4]]]];
let newArr = nestedArray.flat(2);
console.log(newArr); // [1, 2, 3, [4]]

// Task 3: Using splice()
// Objective: Remove elements from an array and optionally insert new elements.

const array = [1, 2, 3, 4, 5];
let newArray = array.toSpliced(2, 2, 'a', 'b');
console.log(newArray); // [1, 2, 'a', 'b', 5]
removedElements = array.splice(2, 2, 'a', 'b');
console.log(removedElements); // [3, 4]

// Task 4: Using slice()
// Objective: Extract a portion of an array into a new array.

const _array1 = [1, 2, 3, 4, 5]; 
let slicedArray = _array1.slice(1,4);
console.log(slicedArray); // [2, 3, 4]

// Task 5: Using toSpliced()
// Objective: Create a new array with some elements replaced, without modifying the original array.

const _array2 = [1, 2, 3, 4, 5];
let _splicedArray = _array2.toSpliced(1, 2, 'a', 'b');
console.log(_splicedArray); // [1, 'a', 'b', 4, 5]
console.log(_array2); // [1, 2, 3, 4, 5]

// Task 6: Using copyWithin()
// Objective: Copy part of an array to another location in the same array.

const _array3 = [1, 2, 3, 4, 5];
let copyWithinarray = _array3.copyWithin(0, 3, 5); 
console.log(copyWithinarray);// [4, 5, 3, 4, 5]

// Task 7: Using indexOf()
// Objective: Find the first occurrence of a value in an array.

const _array4 = [1, 2, 3, 2, 1];
const index =_array4.indexOf(2);
console.log(index); // 1

// Task 8: Using lastIndexOf()
// Objective: Find the last occurrence of a value in an array.

const _array5 = [1, 2, 3, 2, 1];
const lastIndex = _array5.lastIndexOf(2);
console.log(lastIndex); // 3

// Task 9: Using includes()
// Objective: Check if an array contains a certain value.
const _array6 = [1, 2, 3, 4, 5];
const hasValue = _array6.includes(3);
console.log(hasValue) // true

// Task 10: Combining Methods
// Objective: Use multiple array methods in a single task.

const _array7 = [1, 2, 3];
const _array8 = [4, 5, 6];
const mergedArray = _array7.concat(_array8).flat();
const splicedArray = mergedArray.toSpliced(2, 1, 'a');
const finalArray = splicedArray.slice(1, 5);
console.log(finalArray.includes('a')); // true
console.log(finalArray.indexOf(5)); // 3