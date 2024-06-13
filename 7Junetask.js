//What is the value of typeof typeof true?
console.log(typeof typeof true);
//Ans: string; Explanation: Since typeof true is 'boolean', "typeof typeof true" becomes "type of boolean" i.e is 'string'.

//What is the result of null==undefined?
console.log(null == undefined);
//Ans: true;  Explanation: null is not assigned with any value. So it stores ‘undefined’ in it. 

//What is the value of +"?
//console.log(+");
//Ans: Error: Unterminated string literal

//What is the result of [] == false?
let arr=[];
console.log(arr == false);
//Ans: true;  Explanation: Here, an empty array is equal to false. Type coercion is performed here to evaluate because the operands are of different types.

//What is the value of {} + {}?
console.log({} + {});
//Ans: [object Object][object Object]

//What is the value of typeof 42n?
console.log(typeof 42n);
//Ans: bigint

//What is the result of "" == false?
console.log("" == false);
//Ans: true; Explanation: Here, an empty string is equal to false. Type coercion is performed here to evaluate because the operands are of different types.

//What is the value of Boolean("0")?
console.log(Boolean("0"));
//Ans: true; Explanation: Boolean of any non-empty string is true

//What is the result of [] === []?
let arr1=[];
let arr2=[];
console.log(arr1 === arr2);
//Ans: False; This condition will always return 'false' since JavaScript compares objects by reference, not value.

//What is the value of typeof Infinity?
console.log(typeof Infinity);
//Ans: number

//What is the result of {} === {}?
let obj1={};
let obj2={};
console.log(obj1 === obj2);
//Ans: False; This condition will always return 'false' since JavaScript compares objects by reference, not value.

//What is the value of typeof NaN?
console.log(typeof NaN);
//Ans: number