//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
// The array is searched backwards, starting at fromIndex.
//By defalt the search starts at the last element and ends at the first.
// starting j thi j thay bhale lastindex name hoy
//right -> left jase
const names=['fgdh','fgdjd','tyuri','wqerwt'];
console.log(names.lastIndexOf('tyuri'));
console.log(names);

const fruits = ["Apple", "Orange", "orange", "Mango"];
let index = fruits.lastIndexOf("Apple");
console.log(index);

const state = ["abc", "tmpp", "efg", "tmp"];
const temp = state.lastIndexOf("tmp");
console.log(temp);