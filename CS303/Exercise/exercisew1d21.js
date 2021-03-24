"use strict";
function getmaxsubsum(arr){
    let partialSum=0;
    let sum=0;
    for(let n of arr){
        partialSum+=n;
        sum=Math.max(sum,partialSum);
        if(partialSum<0){
             partialSum=0;
        }
    }
    return sum;
}
console.log(getmaxsubsum([-9,10,4,3,-6]));