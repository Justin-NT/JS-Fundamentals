// Object Destructuring
const a = {b: 42, c: true};
const {b, c} = a;

console.log(b);

// Object Destructuring without assigning during declaration
let d, e;
({d, e, f = 15} = {d: 10, e: 20});

// variables can be assigned with a default value in object destructuring, in the case that the unpacked value is undefined(nothing to correlate with to gain a new value)
console.log(d);
console.log(f);

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  /*The object we want to reference is within another object, so to access it, we need to identify it first with fullName and then assign
   it a variable name to unpack the value to, name in this case */ 

  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(whois(user));  // "jdoe is John"
