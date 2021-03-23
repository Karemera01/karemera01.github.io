"use strict";
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {

    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    else return c;
}
console.log(maxOfThree());

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (let array of arr) {
        tot += array;
    }

    return tot;
}
console.log(sum());

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (let array of arr) {
        tot *= array;
    }

    return tot;

}
/**
 * 
 * @param {Array} arr of Strings.
 * @returns {string} result the longest word. 
 */
function findLongestWord(arr) {

    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length)
            longest = arr[i];
    }
    return longest;
}
/**
 * 
 * @param {Array} arr of Strings.
 * @returns {Array} result the new array. 
 */
function reverseArray(arr){
    let copy=[];
    for(let i=arr.length-1;i>=0;i--){
        copy.push(arr[i]);
    }
    return copy;
}
/**
 * 
 * @param {Array} arr of Strings.
 * @returns {Array} result the longest word. 
 */
function reverseArrayInPlace(arr){
   arr.reverse();
   return arr

}
// function scoreExams(stArray,corArray){
//     for(let i=0;j<stArray.length;i++){
//         for(let j=0;j<stArray.length;j++){

//         }
//     }


module.exports = { maxOfThree, sum, multiply, findLongestWord,reverseArray ,reverseArrayInPlace};