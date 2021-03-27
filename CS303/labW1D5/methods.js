"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let newArray=[];
    for(let num of arr){
        if(num>=a&& num<=b){
            newArray.push(num);
        }
    }
    return newArray;
  }
  

 
  function filterRangeInPlace(arr, a, b) {
      for(let num of arr){
          if(num<=a&&num>=b){
           


          }
      }
      console.log(arr);
    
     
          }
      

  


  function Calculator(a,b) {
      this.a=a;
      this.b=b;
      this.sum=function(){
          return this.a+this.b;
      };
      this.substract=function(){
        return this.a-this.b;
    };
      this.mult=function(){
          return this.a*this.b;
      };
     
      this.power=function(){
          return Math.pow(this.a,this.b);
      };
      

  }
//   calculator = new Calculator();
  

  function unique(arr) {
    let uniqueArr = [];
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
   return uniqueArr;
}

  function groupById(array) {
  }