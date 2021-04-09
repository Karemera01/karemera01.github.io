// "use strict";
// function foo() { 
//     console.log(this); 
// }
// const bob = {
// log: function() {
// console.log(this);
// }
// };
// console.log(this); // this generally is window object
// foo(); //foo() is called by global window object
// bob.log();//log() is called by the object, bob 
// const me = {
//     first: 'Tina',
//     last: 'Xing',
//     getFullName: function() {
//     return this.first + ' ' + this.last;
//     }
//     }
//     const log = function(height, weight) { // ‘this’ refers to the invoker
//     console.log(this.getFullName() + height + ' ' + weight);
//     }
//     const logMe = log.bind(me);
//     logMe('180cm‘, '70kg'); // Tina Xing 180cm 70kg;
//     log.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg
//     log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg
//     log.bind(me, '180cm', '70kg’)(); // Tina Xing 180cm 70kg
//"use strict";
// function area(){
//     console.log(this);
//     return this.side * this.side;
//     }
//     const square1 = {side: 5, area: area};
//     console.log(square1.area());

// function sayHi(){
//     console.log(`Hello Mr Gerard`);
// }
// //setTimeout(sayHi,2000);

// let myInterval = setInterval(sayHi,2000);

// function stopInterval(){
//     clearInterval(myInterval);
// }
// setTimeout(stopInterval,5000);
// const abc = {
//     salute: "",
//     greet: function() {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function(newSalute) { //inner function
//     this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//     }
//     };
//     abc.greet(); //Hello Hello ???

// function findMax(){
//     let max=-Infinity;
//     for(let i=0;i<arguments.length;i++){
//         if(arguments[i]>max){
//             max=arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(20,40,50,70));

// function findMin(){
//     let min=1000;
//     for(let i=0;i<arguments.length;i++){
// if(arguments[i]<min){
//     min=arguments[i];
// }
//     }
//     return min;
// }
// console.log(findMin(20,40,10,50,70));

// function comparator(a,b){
//     if(a>b)return 1;
//     else if(a<b)return -1;
//     else return 0;
// }
// console.log([2,11,34,8,9].sort(comparator));

// function myMap(arr){
//     let newArray=[];
//     for(let num of arr){
//       newArray.push(num*2);
//     }
// return newArray;
// }
// console.log(myMap([1,2,3]));
// let arr=[1,2,3];
//  let result=arr.map(num=>num*2);
//  console.log(result);

// function foo(a,b){
//     console.log(a);
//     console.log(b);

// }
// foo(1);
// const a=5;
// const b=5;
// foo();
// foo(1,2,3,4);

function foo2(a,b,c){
    let sum=a+b+c;
}
console.log(foo2(1,2,3));
