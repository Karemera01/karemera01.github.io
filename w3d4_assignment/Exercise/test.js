"use strict";

function Calculator(value1,value2) {
   
    this.value1=value1;
    this.value2=value2;
    this.getValues=function(){
       return this.value1,this.value2;
    };
    this.sum=function(){
       return this.value1+this.value2;
    };
    this.mult=function(){
       return this.value1*this.value2;
    };
   


    //implement this
   
     }
let calc=new Calculator(5,10);
console.log(calc.sum());
console.log(calc.mult());
console.log(calc.value1);

// function Accumulator(initialValue,increment){
//     this.initialValue=initialValue;
//     this.currentValue=initialValue;
//     this.increment=increment;
//     this.accumulate=function(){
//         return this.currentValue+=this.increment;
//     };
//     this.report=function(){
//        return this.currentValue;
//     };
// }
// let acc=new Accumulator(5,10);
// console.log(acc.initialValue);
// console.log(acc.increment);
// console.log(acc.currentValue);
// console.log(acc.accumulate());
// console.log(acc.report());











