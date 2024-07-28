// 1. How isNaN Works in Different Scenarios
// The isNaN function in JavaScript is used to determine whether a value is NaN (Not-a-Number). However, it can sometimes be a bit misleading because it first tries to coerce the value to a number before checking if it's NaN.

// Here's how isNaN behaves in different scenarios:

// Scenario 1: Number
console.log(isNaN(123));         // false (123 is a number)

// Scenario 2: String that can be coerced to a number
console.log(isNaN('123'));       // false ('123' can be coerced to 123, which is a number)

// Scenario 3: String that cannot be coerced to a number
console.log(isNaN('abc'));       // true ('abc' cannot be coerced to a number)

// Scenario 4: Boolean
console.log(isNaN(true));        // false (true coerces to 1, which is a number)
console.log(isNaN(false));       // false (false coerces to 0, which is a number)

// Scenario 5: Undefined
console.log(isNaN(undefined));   // true (undefined coerces to NaN)

// Scenario 6: Null
console.log(isNaN(null));        // false (null coerces to 0, which is a number)

// Scenario 7: NaN
console.log(isNaN(NaN));         // true (NaN is, by definition, NaN)

// Scenario 8: Object
console.log(isNaN({}));          // true (an object cannot be coerced to a number)

// Scenario 9: Function
console.log(isNaN(function() {})); // true (a function cannot be coerced to a number)


// 2. Types of Coercion

// Implicit Coercion
// JavaScript automatically converts types when performing operations. Common scenarios include:

// String to Number Conversion:

console.log('5' - 2); // 3 (string '5' is coerced to number 5)
console.log('5' * 2); // 10 (string '5' is coerced to number 5)

// Boolean Coercion:
// In conditions, non-boolean values are coerced to true or false:

console.log(!!'non-empty string'); // true
console.log(!!0); // false

// Number to String Conversion:

console.log(5 + '5'); // '55' (number 5 is coerced to string '5')

// Equality Comparison:

console.log('5' == 5); // true (string '5' is coerced to number 5)
console.log('5' === 5); // false (strict comparison without coercion)




// Explicit Coercion
// You can explicitly coerce types using functions:

console.log(String(123)); // '123'

// Number Conversion:

console.log(Number('123')); // 123
console.log(Number(true));  // 1

// Boolean Conversion:

console.log(Boolean(1));    // true
console.log(Boolean(''));   // false

// Parsing Strings to Numbers:

console.log(parseInt('123', 10)); // 123
console.log(parseFloat('123.45')); // 123.45


// 3. Program to Print a Random OTP


function generateOTP(length) {
  let otp = '';
  const characters = '0123456789';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }
  return otp;
}

// Example usage
const otpLength = 6; // Specify the length of the OTP
console.log(generateOTP(otpLength)); // Output: Random 6-digit OTP (e.g., '483729')