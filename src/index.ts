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
let names = ['Aman','Shubham','Abhi'];
names.push('Ankit');
// names.push(1); Typescript doest allows to insert a number in an string array
let mixed = ['Aman',1,true];
mixed.push(3);
mixed.push(false); //mixed array is combination of number strings and booleans therefore typescript allows to push this typy of data

//objects : 
let Bio = {
    name : 'Aman',
    id : 1,
    age : 30
}
//Bio.name = 12; name can not assign an integer because its an initially decaled as string

//explicit types
let userName : string;
// userName = 20; error because its an string type of variable
let useAge : number;
//explicit Arrays
let NameArray : string[] = [];
let mix : (string | number | boolean)[] = [];
mix.push('Aman',3,true);
// console.log(mix);

//objects : 
let obj : {
    Obj_name : string,
    Obj_age : number,
    valid : boolean
}
obj = {Obj_name : 'Aman', Obj_age : 12 , valid : true }
// console.log(obj);

//any : any allows you to assign any type of data
let year : any ;
year = 20;
year = 'twenty';
year = true;

let mixAny : any[] = [];
mixAny.push('Aman',1,true);

let mixAnyObj : {
    name : any,
    age : any
}

//Function

let greet : Function;
greet = () => {
    console.log("Hello"); 
}

// const add = (a:number, b:number, c?:number|string) => { //c is optional parameter
//     console.log(a+b);
// }
// add(3,5);

//use of void in typescript (no return value) undefined
const add = (a:number, b:number, c:number|string = 10):void => { //c is default parameter
    console.log(a+b);
}
add(3,5);

const minus = (a:number, b:number) => {
    return a+b;
}
let result = minus(10,20);
//result = 'Aman'; error because typescript automatically set result type to number

//Type Alias

type DataTypes = string | number | boolean ;
let Variable : DataTypes;
Variable = 'Aman';
Variable = 1;
Variable = true;

let gree : (a: string, b:string) => void;
gree = (name : string, email : string) => {
    console.log(`I'm ${name} and Email is : ${email}`);
}
gree('Aman','As@.com');
let calc : (a:number, b: number) =>number;
calc = (numOne: number, numTwo : number) => {
    if(numOne == numTwo){
        return numTwo + numOne ;
    }
    else{
        return numOne - numTwo;
    }
}