//Main Aim of TypeScript :- Less number of errors 
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//     console.log(input);
// });
// const Area = (diameter : number) => { //When we are getting value from from user it should be number 
//     return diameter * Math.PI;
// }
// let userVal = Number(prompt('Please Enter a +ve Number : '));
// console.log("Area is :",Area(userVal));
//Arrays :
var names = ['Aman', 'Shubham', 'Abhi'];
names.push('Ankit');
// names.push(1); Typescript doest allows to insert a number in an string array
var mixed = ['Aman', 1, true];
mixed.push(3);
mixed.push(false); //mixed array is combination of number strings and booleans therefore typescript allows to push this typy of data
//objects : 
var Bio = {
    name: 'Aman',
    id: 1,
    age: 30
};
//Bio.name = 12; name can not assign an integer because its an initially decaled as string
//explicit types
var userName;
// userName = 20; error because its an string type of variable
var useAge;
//explicit Arrays
var NameArray = [];
var mix = [];
mix.push('Aman', 3, true);
console.log(mix);
//objects : 
var obj;
obj = { Obj_name: 'Aman', Obj_age: 12, valid: true };
console.log(obj);
