"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate , camelize,checkSpam,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {String} str .
 * @returns {String} return the new string.
 */
function ucFirst(str) {
   
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 /**
 * 
 * @param {String} str.
 * @returns {String} return the new string.
 */
  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  /**
 * 
 * @param {String} str.
 * @param {number} maxlength number.
 * @returns {String} return the new string.
 */

  function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "...";
      } else {
        return str;
      }
    }
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }
 /**
 * 
 * @param {String} str.
 * @returns {String} return the new string.
 */

function camelize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}
 /**
 * 
 * @param {String} str.
 * @returns {String} return the new string.
 */
 function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  