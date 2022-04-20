//The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
//one by one check kare first male then agal check karva nai jay ae j return kari dese..
//The find() method does not change the original array.
const array1=[1,5,6,8];
const array2 = array1.find(find=> find > 5);
console.log(array2);