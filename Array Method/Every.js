//The every() method tests whether all elements in the array pass the test
// implemented by the provided function. It returns a Boolean value.
//The every() method does not change the original array
//boolean value ape
const value=(currentValue)=> currentValue < 6;
const array1=[1,2,3,4,5];
console.log(array1.every(value));

const target =(value)=> value < 100;
const target1=[45,78,56,101];
console.log(target1.every(target));


