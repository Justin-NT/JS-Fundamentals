// both lines below are essentially the same when they are processed. The '' is inferred as a string and casts the String() method on the contained input
let myString = String(); //String literals
let other = '';
console.log(myString);

let myNumber = Number(); //Number literal
console.log(myNumber);

let myArray = Array(); //Array literal
console.log(myArray);

let myBool = Boolean(); //Boolean literal
console.log(myBool);

let myObj = Object(); //Object literal
console.log(myObj);








// function FizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//       console.log(i);
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       }
//     }
//     };

// FizzBuzz();