"use strict";
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
// console.log(mix);
//objects : 
var obj;
obj = { Obj_name: 'Aman', Obj_age: 12, valid: true };
// console.log(obj);
//any : any allows you to assign any type of data
var year;
year = 20;
year = 'twenty';
year = true;
var mixAny = [];
mixAny.push('Aman', 1, true);
var mixAnyObj;
//Function
var greet;
greet = function () {
    console.log("Hello");
};
// const add = (a:number, b:number, c?:number|string) => { //c is optional parameter
//     console.log(a+b);
// }
// add(3,5);
//use of void in typescript (no return value) undefined
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
add(3, 5);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 20);
var Variable;
Variable = 'Aman';
Variable = 1;
Variable = true;
var gree;
gree = function (name, email) {
    console.log("I'm " + name + " and Email is : " + email);
};
gree('Aman', 'As@.com');
var calc;
calc = function (numOne, numTwo) {
    if (numOne == numTwo) {
        return numTwo + numOne;
    }
    else {
        return numOne - numTwo;
    }
};
