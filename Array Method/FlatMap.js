//The flatMap() method is the combination of the map() method followed by the flat() method of depth 1.
// alag alag array ma male -> map ma
// flatmap ma aek j array ma all male-> flatmap ma

// const animals=['mzkdmls','lion','sknfkj'];
// const animal=['hbajb','hghasgdu','bhbjkjn'];
//
// const allAnimals=animals.flatMap(animalsname,index);
// console.log(allAnimals);

let array1=[2,4,6,8,10];
array1.flatMap(x=>[x*2]);

const numbers=[1,2,3];
const stars=['one','two','three'];
const mapped=numbers.flatMap((value, index) => [value,stars[index]]);
console.log(mapped);
