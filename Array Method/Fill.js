//The fill() method changes all elements in an array to a static value,
// from a start index (default 0) to an end index (default array.length).
// It returns the modified array.
//fill(value, start, end)
//value -> replace it
// badhi place par fill ae j kari dese
const array1=[1,2,3,4];
console.log(array1.fill(0,2,2));
console.log(array1.fill(0,1,3));

const names=['sagu','kathiriya','logo'];
names.fill('moni');
console.log(names);

const names1=['sagu','kathiriya','logo'];
names1.fill('yogi',1);
console.log(names1);