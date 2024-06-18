//1.Write a program to find the sum of all even numbers in an array using a for loop.
//Example: let arr = [1, 2, 3, 4, 5, 6];

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5, 6];
const evenSum = sumOfEvenNumbers(arr);
console.log("Sum of even numbers:", evenSum);

//2.Use a do-while loop to print the numbers from 1 to 10, but only if the number is not equal to 5.

//Example: let num = 1;
//Test Case: printNumbers() // Output: 1, 2, 3, 4, 6, 7, 8, 9, 10

let num = 1;
do {
  if (num != 5) console.log(num);
  num++;
} while (num <= 10);

// 3.check whether given input string is palindrome or not?
// I/p:mom-->is a palindrome
// I/p:father:--->is not a palindrome.

function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let str1 = "mom";
let str2 = "father";
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

// 4.Write a program using a do-while loop to print the numbers from 10 to 1, but only if the number is odd. If the number is even, print "Skipping even number".

// Example: let num = 10;
// Output: 9, Skipping even number, 7, Skipping even number, 5, Skipping even number, 3, Skipping even number, 1

let number = 10;
do {
  if (number % 2 != 0) {
    console.log(number);
  } else {
    console.log("Skipping even number");
  }
  number--;
} while (number >= 1);

// 5.Write a program using a while loop to find the average of all numbers in an array. If the average is greater than 50, print "Average is large".

// Example: let arr = [1, 2, 3, 4, 5, 6];
// Output: 3.5

function average(a, n){
    var _sum = 0;
    for (var i = 0; i < n; i++){
        _sum += a[i];
    }
    return average>50 ? "Average is large" : parseFloat(_sum / n);
}
let a = [1,2,3,4,5,6];
let n = a.length;
console.log(average(a,n))

// *
// **
// ***
// ****
// *****
let _n = 5;
let string = "";
for (let i = 1; i <= _n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);





