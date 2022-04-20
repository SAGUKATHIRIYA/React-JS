//The map() method creates a new array whose elements are the results of a mapping function.
// alag alag array ma male
// flatmap ma aek j array ma all male
//modified
// we can use any type of key or value

const numbers=[1,2,3];
const stars=['one','two','three'];
const mapped=numbers.map((value, index) => [value,stars[index]]);
console.log(mapped);

let mapObj =new Map();
mapObj.set(()=>{},"kathiriya");
mapObj.set("mahi","kariya");
mapObj.set("sagun","bhsjnfjs");
mapObj.set("boo","hsjuhfjus");
console.log(mapObj);
console.log(mapObj.keys());

let obj = {
    key1 : "value",
    key2 : [],
    key3 : {},
    key4 : true,
    key5 : null,
    key6 : undefined,
    key7 : ()=>{},
    key8 : 5434534,
};
console.log(obj);

