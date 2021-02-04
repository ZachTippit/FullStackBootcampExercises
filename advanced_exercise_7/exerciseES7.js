// Solve the below problems:


// #1) Check if this array includes the name "John".
const johnDragons = [];
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.forEach((element, i) => {
	element.includes('John') ? console.log(`John is located in ${element} at ${i} in the index`) : null; //#1
	element.includes('John') ? johnDragons.push(element):null; //#2
});


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

let powHun = (x) => x**100;
powHun(2);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

// Humongous. NaN? Overflow error bc the integer is too big.
