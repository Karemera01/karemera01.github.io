"use strict";

/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  

function factorial(n){
    if(n===0||n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
function fibonacci(n){
    if(n<=1){
        return n;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}