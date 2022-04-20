//The map() method creates a new array whose elements are the results of a mapping function.
// alag alag array ma male
// flatmap ma aek j array ma all male
//modified
// we can use any type of key or value
const numbers=[1,2,3];
const stars=['one','two','three'];
const mapped=numbers.map((value, index) => [value,stars[index]]);
console.log(mapped);

const arr=[5,8,6,2,11];
const output= arr.map((x)=> x <= 6);
console.log(output);

const arrr=[5,8,6,2,11];
const outputt= arrr.find((x)=> x > 6);
console.log(outputt);

const arrrr=[5,8,6,2,11];
const outputtt= arrrr.filter((x)=> x > 6);
console.log(outputtt);