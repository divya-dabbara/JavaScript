// Find the length of a string without using method.
function findLengthOfString(str) {
    var length = 0;
    var index = 0;
    while (str[index] !== undefined) {
        length++;
        index++;
    }
    return length;
}

var string = prompt("Enter a string:");
var length = findLengthOfString(string);
console.log("Length of the string:", length);


// Iterate object values through for in loop
var person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        var value = person[key];
        console.log(value);
    }
}


// Iterate object keys  through for in loop
var person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (var key in person) {
    console.log(key);
}


// Iterate object values and keys using for of loop using entries, keys and values methods
    // object entries - we can get keys and values
    // object keys - we can get keys and values
    // object values - we can get only values

    // 1. Using Object.entries()
    var person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    // Iterate over entries (key-value pairs)
    for (var [key, value] of Object.entries(person)) {
        console.log(key + ': ' + value);
    }

    // 2. Using Object.keys()
    var person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    // Iterate over keys
    for (var key of Object.keys(person)) {
        var value = person[key];
        console.log(key + ': ' + value);
    }

    // 3. Using Object.values()
    var person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    // Iterate over values
    for (var value of Object.values(person)) {
        console.log(value);
    }
    
    


    




