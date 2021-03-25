"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(){
//implement this

}

/**
 * @param {number} value1;
 * @param {number} value2;
 * @returns {Calculator} this is a constructor function
 * 
 */
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
calc.sum();
calc.mult();
//      let calculator = {
//       value1: 0,
//       value2: 0,
//     getValues: function(operand1, operand2){
//         this.value1 = operand1;
//         this.value2 = operand2;
//     },
//     sum: function(){
//         const tot = this.value1 + this.value2;
//         return tot;
//     },
//     mul: function(){}
//   };
  
//   calculator.getValues(5, 10);
//   console.log( "expect 15 : ", calculator.sum() ); 
//   console.log("expect 50 : ", calculator.mul() );

 module.exports={Accumulator,Calculator};