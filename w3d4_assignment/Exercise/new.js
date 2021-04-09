//"use strict";

// let person = {
//     personName: "Gerard",
//     birthday: function () {
//         console.log(this);
//         return `hello my name is ${this.personName} happy birthday to me`;
//     }
// };
// console.log(person.personName);
// console.log(person.birthday());
// console.log(this);

// let employee = {
//     firstName: "Smith",
//     lastName: "John", designation: "Clerk",
//     salary: 3000,
//     workExperienceYears: 4,
//     getFullName: function () {
//         return `${this.firstName},${this.lastName}`;

//     },
//     promote: function () {
//         if(this.workExperienceYears>3){
//             this.designation="Asst.Manager";
//             return `i am ${this.getFullName()},promoted to ${this.designation} with salary ${this.salary+this.salary*0.1}`;

//         }else if(this.workExperienceYears>5){
//             this.designation="Manager";
//             return `i am ${this.getFullName()},promoted to ${this.designation} with salary ${this.salary+this.salary*0.2}`;

//     }
// }
// };
// console.log(employee.getFullName());
// console.log(employee.promote());

// const square1={side:5,
//     area:function(){
//         console.log(this);
//         console.log(this.side);
//         return this.side*this.side;

//     }
// };
// console.log(area());


// const square1 = {
//     side: 5,
//     area: function () {
//         console.log(this);
//         console.log(this.side);
//         return this.side * this.side;
//     }
// };
// console.log(area());

// function perimeter(){
//  console.log(this);
//  return 4 * this.side;}
//  const shape = {side: 5, perimeter: perimeter};
//  shape.perimeter();
// const myPerim = shape.perimeter;
// myPerim();
// function pow(x, n) {

//     if (n == 0) {
 
//          return 1;
 
//        } else {
 
//             return x * pow(x, n - 1);
 
//      }
 
//  }
 
//  console.log( pow(2, 9) );
// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// // for(let person of people){
// //     console.log(person);
// // }
// const mapped=people.map(function(person){

//     let newObj={fullName:person.name + ""+ person.surname,
//                  age:person.age
// };  
// return newObj;


// });

// Use the map function to map the people array to the following:
// [{ fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },]
// people.map(name)


// const bank={transactionDB:[]};
// bank.transactionDB=[{customerId:1,customerTransaction:[10,50,-40]},
// {customerId:2,customerTransaction:[10,10,-10]},
// {customerId:3,customerTransaction:[5,-5,-55]},

// ];
// bank.getBalance= function(id){
//     let costumer=bank.transactionDB.find(customer=>customer.customerId===id);
//     let balance=0;
//     for(let trans of  customer.customerTransaction){
//         balance+=trans;

//     }
//     return balance;
//};
// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
//     internals: [{name: 'Jack', salary: 1300}]
//     }
//     };
//     //let person= company.development.find(person=>person.name==="peter");
//     //console.log(person);
//    for(let person in company){
//     if(person===sales){
//         console.log();
//     }
//    }
    // for(let pers of company.sales){
    //     if()
    //     console.log(pers.name);
    // }
    //console.log(company);
    // function foo(bar, abc, xyz) {
    //     if (bar < 100) return bar*2 //less than 100 then result is double the value
    //     else return bar*3; //greater or equal to 100 then result is triple the value
    //    }
    //    console.log(foo ( 100, "apple", "banana")); //300
    //    console.log(foo ( 90,"apple" , "banana"));

    //"use strict";

// function perimeter(){
//  console.log(this);
//  return 4 * this.side;}
//  const shape = {side: 5, perimeter: perimeter};
//  const myPerim = shape.perimeter();
// console.log(myPerim) ;

// let result=[5, 44, 1, 33].reduce((max,element)=>Math.max(max,element),-Infinity);
// console.log(result);

// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// let result=people.reduce((max ,person)=> Math.max(max, person.age),-Infinity);
//     console.log(result);

// function myFind(arr,cbk){
//     for(let i=0;i<arr.length;i++){
//         if(cbk(arr[i])){
//             return arr[i];
//         }
//     }
    

// }
// const numArray = [5, 33, 1, 11];
// console.log(myFind(numArray, element => element > 10)) ;//11

// function sumToN(num){
//     if(num===1){
//         return 1;
//     }else{
//         return num+sumToN(num-1);
//     }
// }
// console.log(sumToN(10));
//using recursion call.

// let company = { // the same object, compressed for brevity
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };

//   function sumSalaries(department){
//       if(Array.isArray(department)){
//           return department.reduce((initialval,element)=>initialval+element.salary,0);
//       }else{
//           let sum=0;
//           for(let subdepartments of Object.values(department)){
//                sum +=sumSalaries(subdepartments);
//           }
//           return sum;
//       }
//   }
//   console.log(sumSalaries(company));

// function makeCounter() {
//     let count = 0;
//     return function() { return count++; };}
    
//     let count =makeCounter();
//     console.log(count());
//     console.log(count());

    // function  makeCounter(){
    //     let count=0;
    //     function increment(){
    //         return count++;
    //     }
    //     return increment;
    // }

    // let count =makeCounter();
    // console.log(count());
    // console.log(count());
    let user = {
        firstName: "John",
        sayHi() {
        console.log(`Hello, ${this.firstName}!`);
        }
        };
        //setTimeout((user.sayHi).bind(user), 1000); // Hello, undefined!

//setTimeout(function(){user.sayHi.call(user);},1000);
setTimeout(function(){user.sayHi();},1000);



// function foo() { console.log(this); }
// const bob = {
// log: function() {
// console.log(this);
// }
// };
// console.log(this); // this generally is window object
// foo(); //foo() is called by global window object
// bob.log();