//The copyWithin() method shallow copies part of an array to another
//location in the same array and returns it without modifying its length.
// target jene karvo hoy ae then start and end position
const number=[1,2,3,4];
console.log(number.copyWithin(0,2));

const name=['sagu','mahi','guju'];
console.log(name.copyWithin(1,2));
console.log(name.copyWithin(0,2));

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
console.log(fruits);
console.log(fruits.copyWithin(0,4,5));
