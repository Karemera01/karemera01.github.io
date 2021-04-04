"use strict";

function makeCount(){
    let count=0;
    function increment(){
        return count++;
    }
    return increment;
}

let count1=makeCount();

console.log(count1());
console.log(count1());
console.log(count1());

// function inBetween(arr) {
    
//     let isBetween=function(low,high){
//         for(let num of arr){
//             if(num>low && num<high){
//                 return true;
//             }
//         }
//         return false;
        
//     };
//     return isBetween;

// }
// //const arr = [0, 4, 5, 10, 6, 100];
// let ibt=inBetween();
// console.log(ibt(3,6));
function byField(fieldName) {
    
    let sorting=function(users){
    let sort=(a,b)=>a[fieldName]>b[fieldName];
   return users.sort(sort);
    }
    return sorting;
   
    }
    // function sum(a,b,c){
    //     let tot=a+b+c;
    //     return tot;
    // }
    // let sum=(a,b,c)=>a+b+c;
