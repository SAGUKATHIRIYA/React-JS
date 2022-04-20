//A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
// full array return kare -> new array return kare
//The filter() method does not change the original array.
const names=["sagun","carry","luckys"];
const results=names.filter(word=>word.length < 6);
console.log(results);

const numbers=[1,5,8,6,4,10,56,8];
const numberss=numbers.filter(numbers=>numbers>5);
console.log(numberss);