// import {Invoice} from "./Invoice.js";
// //Main Aim of TypeScript :- clean code with Less number of errors 
// // const inputs = document.querySelectorAll('input');
// // inputs.forEach(input => {
// //     console.log(input);
// // });
// // const Area = (diameter : number) => { //When we are getting value from from user it should be number 
// //     return diameter * Math.PI;
// // }
// // let userVal = Number(prompt('Please Enter a +ve Number : '));
// // console.log("Area is :",Area(userVal));
// //Arrays :
// let names = ['Aman','Shubham','Abhi'];
// names.push('Ankit');
// // names.push(1); Typescript doest allows to insert a number in an string array
// let mixed = ['Aman',1,true];
// mixed.push(3);
// mixed.push(false); //mixed array is combination of number strings and booleans therefore typescript allows to push this typy of data
// //objects : 
// let Bio = {
//     name : 'Aman',
//     id : 1,
//     age : 30
// }
// //Bio.name = 12; name can not assign an integer because its an initially decaled as string
// //explicit types
// let userName : string;
// // userName = 20; error because its an string type of variable
// let useAge : number;
// //explicit Arrays
// let NameArray : string[] = [];
// let mix : (string | number | boolean)[] = [];
// mix.push('Aman',3,true);
// // console.log(mix);
// //objects : 
// let obj : {
//     Obj_name : string,
//     Obj_age : number,
//     valid : boolean
// }
// obj = {Obj_name : 'Aman', Obj_age : 12 , valid : true }
// // console.log(obj);
// //any : any allows you to assign any type of data
// let year : any ;
// year = 20;
// year = 'twenty';
// year = true;
// let mixAny : any[] = [];
// mixAny.push('Aman',1,true);
// let mixAnyObj : {
//     name : any,
//     age : any
// }
// //Function
// let greet : Function;
// greet = () => {
//     console.log("Hello"); 
// }
// // const add = (a:number, b:number, c?:number|string) => { //c is optional parameter
// //     console.log(a+b);
// // }
// // add(3,5);
// //use of void in typescript (no return value) undefined
// const add = (a:number, b:number, c:number|string = 10):void => { //c is default parameter
//     console.log(a+b);
// }
// add(3,5);
// const minus = (a:number, b:number) => {
//     return a+b;
// }
// let result = minus(10,20);
// //result = 'Aman'; error because typescript automatically set result type to number
// //Type Alias
// type DataTypes = string | number | boolean ;
// let Variable : DataTypes;
// Variable = 'Aman';
// Variable = 1;
// Variable = true;
// let gree : (a: string, b:string) => void;
// gree = (name : string, email : string) => {
//     console.log(`I'm ${name} and Email is : ${email}`);
// }
// gree('Aman','As@.com');
// let calc : (a:number, b: number) => number;
// calc = (numOne: number, numTwo : number) => {
//     if(numOne == numTwo){
//         return numTwo + numOne ;
//     }
//     else{
//         return numOne - numTwo;
//     }
// }
// class Invoice {
//     // private 
//     // client : string;
//     // // readonly 
//     // details : string;
//     // amount : number;
//     // constructor( c: string, d: string, e:number){
//     //     // this.client = c;
//     //     // this.details = d;
//     //     // this.amount = e;
//     // }
//     constructor (
//         readonly client : string,
//         private details : string,
//         public amount : number,
//     ){}
//     format() {
//         return `$(this.client) owes Rs.$(this.amount) for $(this.details)`
//     };
// }
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "$(this.client) owes Rs.$(this.amount) for $(this.details)";
    };
    ;
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "$(this.client) owes Rs.$(this.amount) for $(this.details)";
    };
    ;
    return Payment;
}());
var ineOne = new Invoice('Aman', 'Website', 200);
var ineTwo = new Invoice('Abhi', 'WebApp', 300);
var Invoices = [];
Invoices.push(ineOne, ineTwo); //only objects can be pushed
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toform = document.querySelector('#tofrom');
var detail = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, detail.value, amount.value);
    var List = document.querySelector('#work');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    var amt = document.createElement('h6');
    h2.innerText = type.value;
    h4.innerText = toform.value;
    h5.innerText = detail.value;
    amt.innerText = amount.value;
    li.append(h2);
    li.append(h4);
    li.append(h5);
    li.append(amt);
    List === null || List === void 0 ? void 0 : List.append(li);
});
var me = {
    name: 'Amna',
    age: 20,
    speak: function (a) {
        console.log('Yes !');
    },
    spend: function (a) {
        return a;
    }
};
//  let doc : any ;
//  if(type.value === 'invoice'){
//     doc = new Invoice(toform.value , detail.value , amount.value);
//     console.log(doc);  
//  }
//  else{
//     doc = new Payment(toform.value , detail.value , amount.value);
//     console.log(doc);
// }
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var List = document.querySelector('#work');
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        List === null || List === void 0 ? void 0 : List.append(li);
        var p = document.createElement('p');
        p.innerText = item;
        li.append(p);
        List === null || List === void 0 ? void 0 : List.append(li);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
var gen = {
    name: 'Aman',
    data: 20,
    add: 'Kolshet'
};
// console.log(gen);
var days;
(function (days) {
    days[days["Mon"] = 0] = "Mon";
    days[days["Tues"] = 1] = "Tues";
})(days || (days = {}));
;
var obj = {
    dayOne: days.Mon
};
console.log(obj.dayOne);
// Tupple
var tup = ['Aman', 1, 'true'];
tup[0] = 'Aman';
