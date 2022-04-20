//The flat() method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
// both different array ne one array ma ape and aek array ma return kare
//The flat() method creates a new array with the elements of the subarrays concatenated into it.
//concat jevu work kare  aema alg alg array ne concat kare ama aek array ma game atla array hoy aene  ne j concat kare
const array=[5,8,4,5,6];
console.log(array.flat());

const array2=[5,8,4,[5,6]];
console.log(array2.flat());

const array1=[5,8,4,[[[5,6]]]];
console.log(array1.flat());