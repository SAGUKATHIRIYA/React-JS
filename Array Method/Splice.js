//If only one element is removed, an array of one element is returned.
//If no elements are removed, an empty array is returned.
//value ne replace kare
//The splice() method returns the removed item(s) in an array
//The splice() method changes the original array
//The splice() method adds and/or removes array elements.
// delete count 0 rakhvi to delete nahi kare tya aeni agal add kari dese
//The splice() method adds and/or removes array elements. The splice() method overwrites the original array.
const names=['sagu','mahi','love','sarthu'];
console.log(names.splice(1,0,'kathiriya'));
console.log(names);

//delete count mukvi so ae delete kari de and tya replace kari de
const names1=['sagu','mahi','love','sarthu'];
console.log(names1.splice(1,2));
console.log(names1);
// start to end delete kari dese