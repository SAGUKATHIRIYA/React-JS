//The concat() method is used to merge two or more arrays.
//This method does not change the existing arrays, but instead returns a new array.

const array1=[1,2,3];
const array2=[4,5,6];
array3=array1.concat(array2);
console.log(array3);

const letters=["sagu","kathiriya","sahil"];
const numbers=[1,2,3];
numbersall=letters.concat(numbers);
console.log(numbersall);

const number1=[1,2,3];
const number2=[3,4,5];
const number3=[6,7,8];
const number4=number1.concat(number2,number3);
console.log(number4);

const letter=['mahi','mahek'];
const letteralll=letter.concat([3,4]);
console.log(letteralll);

