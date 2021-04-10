"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
exports.Accumulator = Accumulator;
exports.Calculator = Calculator; //add all of your function names here that you need for the node mocha tests
 //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} initialValue;
 * @param {number} increment;
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
   this.initialValue = initialValue;
   this.currentValue = initialValue;
   this.increment = increment;
   this.accumulate = function () {
      return this.currentValue += this.increment;
   };
   this.report = function () {
      return this.currentValue;
   };
}
//   let acc=new Accumulator(5,10);
//   console.log(acc.initialValue);
//   console.log(acc.increment);
//   console.log(acc.currentValue);
//   console.log(acc.accumulate());
//   console.log(acc.report());
//implement this



/**
 * @param {number} a;
 * @param {number} b;
 * @returns {Calculator} this is a constructor function
 * 
 */
function Calculator(a, b) {

   this.a = a;
   this.b = b;
   this.getValues = function () {
      return this.a, this.b;
   };
   this.sum = function () {
      return this.a + this.b;
   };
   this.mult = function () {
      return this.a * this.b;
   };







}
// let calc=new Calculator(5,10);
// calc.sum();
// calc.mult();

// module.exports = { Accumulator, Calculator, };