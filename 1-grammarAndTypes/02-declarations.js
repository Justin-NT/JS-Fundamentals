// x itself is the declaration, not the value assigned to it.
let x;
// initilazation is assigning the value to the declaration(x in this case)
x = 'Hello';

let a = 2;

let     b     =      1;
 /* (1)    (2)   (3)    (4)

    1- Keyword
    2- Variable name
    3- Assignment operator
    4- Variable Value 
    declartion = 1 + 2, intilization is 2, 3, 4
    */
console.log(a+b);

var test = true;
const naming = "Prefix only";

// Non-recursive factorial function
var factor = function(number) {
   var result = 1;
   var count;
   for (count = number; count > 1; count--) {
      result *= count;
   }
   return result;
   };
   console.log(factor(6));
   // 720

// Recursive factorial function
var factorial = function(number) {
   if (number <= 0) { // terminal case
     return 1;
   } else { // block to execute
     return (number * factorial(number - 1));
   }
 };
 console.log(factorial(100));
 // 720

// Non-recursive fibonacci sequence function
function fibonacci(num){
   var a = 1, b = 0, temp;
 
   while (num >= 0){
     temp = a;
     a = a + b;
     b = temp;
     num--;
   }
 
   return b;
 }

 console.log(fibonacci(5));

 // Recursive fibonacci sequence function
 function recursiveFibonacci(num) {
   if(num <= 1) return 1;

   return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(15));