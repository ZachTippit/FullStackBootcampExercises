// change everything below to the newer Javascript!

// let + const
let a = 'test';
let b = true;
let c = 789;
const a = 'test2';

console.log(a,b,c);
// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let { firstName , lastName , age , eyeColor } = person;

console.log(firstName,lastName,age,eyeColor);
// Object properties
let a = 'test';
let b = true;
let c = 789;

const okObj = {
  a,b,c
};

console.log(okObj);
// Template strings
let city = 'Sydney';
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;
console.log(message);

// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age;
}

isValidAge();
// Symbol
// Create a symbol: "This is my first Symbol"

let sym = Symbol('This is my first symbol');
console.log(sym);

// Arrow functions

let whereAmI = (username,location) => (username && location) ? 'I am not lost' : 'I am totally lost';
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}