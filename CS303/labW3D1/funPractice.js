"use strict";
module.exports={myMap,myFilter,myReduce};

/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr,cbk){
 let newArray=[];
 for(let num of arr){
     newArray.push(cbk(num));
 } 
 return newArray;

}

/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myFilter(arr,cbk){
let newArray=[];
for(let num of arr){
    if (cbk(num)){
        newArray.push(num);
    }
}
return newArray;

}
/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal) {
    let accumulator = initialVal;
    for (let num of arr) {
        accumulator = cbk(accumulator, num);
    }
    return accumulator;

}
const sum = (accum, val) => accum + val;
const mult = (accum, val) => accum * val;

