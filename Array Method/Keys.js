//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
//The keys() method does not change the original array.
const array1=['xcfd','jbsjnfj','nxnkd'];
console.log(array1.keys());
for (const key of array1) {
    console.log(key);
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
console.log(keys);