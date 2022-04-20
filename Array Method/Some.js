//The some() method executes the function once for each array element:
//If the function returns true, some() returns true and stops.
//If the function returns false, some() returns false and stops.
//The some() method does not execute the function for empty array elements.
const ages = [3, 10, 18, 20];
console.log(ages);
function checkAdult(age) {
    return age > 18;
}

console.log(checkAdult());