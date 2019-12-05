// Booleans or Bools

let i = true;

let j = false;

console.log(i, j);

// Null

let test = null;

// Undefined
let myName = undefined;
let otherName;
// both are the same value

// Number
let degrees = 90;

let precise = 999999999999999;
console.log(precise);


// Numbers in javascript aren't perfect, and can overflow. For example, 15 9's are allowed but 16 will cause an overflow
overflowed = 9999999999999999;
console.log(overflowed);
let notQuite = (0.1 + 0.2).toFixed(2);
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let numbers = Number('123');
console.log(numbers);

// Strings
let stringOne = "Doubley bois";
let string2 = 'Singley bois';

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);
console.log(typeof first, typeof second);

console.log(123 + '999');

// Objects
var myObj = {
    firstName: 'Justin',
    lastName: 'Terry',
    age: 23,
    arr: [1, 2, 3]
}

myObj.num = 23;
console.log(myObj.num);

myObj['middleName'] = "Noah";
console.log(myObj['middleName']);

let burritos = ['large', 4, true];

console.log(burritos[1]);

console.log(typeof burritos);
console.log(burritos instanceof Array);
// indexes are just like keys in objects, wherein they are associated with a value and can be used to return that value

let a = "hello";
let b = "hi";
console.log(a + b);

let greet = "Hey"
let name = "Justin"
console.log(`${greet} ${name}!`) // String interpolation
