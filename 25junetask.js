// 1.Write a function that takes an array of objects as an argument and returns an array of the keys of each object using for...in iteration.
// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [["a", "b"], ["c", "d"], ["e", "f"]]

function getKeys(arr) {
    return arr.map(obj => {
      const keys = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      return keys;
    });
  }
  
  // Example usage
  const input = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];
  console.log(getKeys(input)); // Output: [["a", "b"], ["c", "d"], ["e", "f"]]
  

// 2.Write a function that takes an array of objects as an argument and returns an array of the values of each object using for...in iteration.
// Input: [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
// Output: [[1, 2], [3, 4], [5, 6]]

function getValues(arr) {
    return arr.map(obj => {
      const values = [];
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          values.push(obj[key]);
        }
      }
      return values;
    });
  }
  
  // Example usage
  const input1 = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }];
  console.log(getValues(input1)); // Output: [[1, 2], [3, 4], [5, 6]]
  

// 3.Write a function that takes an array of objects as an argument and returns a new array with only the objects that have a specific property using for...in iteration.
// Input: [{ a: 1 }, { b: 2 }, { a: 3, b: 4}], "a"
// Output: [{ a: 1 }, { a: 3, b: 4 }]

function filterByProperty(arr, property) {
    return arr.filter(obj => {
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && key === property) {
          return true;
        }
      }
      return false;
    });
  }
  
  // Example usage
  const input3 = [{ a: 1 }, { b: 2 }, { a: 3, b: 4 }];
  console.log(filterByProperty(input3, "a")); // Output: [{ a: 1 }, { a: 3, b: 4 }]
  

//   4.Write a function that takes an array of objects as an argument and returns a new array with the objects sorted by a specific property using for...in iteration.
//   Input: [{ a: 2 }, { a: 1 }, { a: 3 }], "a"
//   Output: [{ a: 1 }, { a: 2 }, { a: 3 }]

function sortByProperty(arr, property) {
    return arr.slice().sort((a, b) => {
      let valA = a[property];
      let valB = b[property];
      
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  // Example usage
  const input4 = [{ a: 2 }, { a: 1 }, { a: 3 }];
  console.log(sortByProperty(input4, "a")); // Output: [{ a: 1 }, { a: 2 }, { a: 3 }]
  
  
// 5.Write a function that takes an array of objects as an argument and returns a new object with the properties from all the objects in the array using for...in iteration.
// Input: [{ a: 1 }, { b: 2 }, { c: 3 }]
// Output: { a: 1, b: 2, c: 3 }

function mergeProperties(arr) {
    const result = {};
    for (let obj of arr) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  
  // Example usage
  const input5 = [{ a: 1 }, { b: 2 }, { c: 3 }];
  console.log(mergeProperties(input5)); // Output: { a: 1, b: 2, c: 3 }
  






