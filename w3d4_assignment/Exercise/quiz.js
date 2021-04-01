"use strict";

const arr = [1,2,3,4,5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, cbk){
//IMPLEMENTATION NEEDED
let newArray=[];
for(let i=0;i<arr.length;i++){
    newArray.push(cbk(arr[i]));
}
return newArray;
}


const dblFun = num => num * 2;
const squareFun = num => num * num;

console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

console.log("expect [4, 16, 36, 64, 100] ", arr.map(squareFun));
console.log("expect [4, 16, 36, 64, 100] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal){
    let accumulator=initialVal;
    for(let element of arr){
       accumulator=cbk(accumulator,element);
    }
    return accumulator;
//IMPLEMENTATION NEEDED
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));

function countLetters(str, letters) {
    if (str.length === 0) {
        return 0;
    } else {
        if (str[0] === letters) {
            return 1 + countLetters(str.substring(1), letters);
        } else {
            return countLetters(str.substring(1), letters);

        }

    }
}
console.log("expect 2",countLetters("abcabceoooeeeiii,","b"));