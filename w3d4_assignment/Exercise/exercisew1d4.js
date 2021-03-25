"use strict";
// const arr=[1,5,16,3,108];

// function isEvenlog(number){
//     if(number%2===0){
//         console.log(number);
//     }

// }
// console.log(arr.forEach(isEvenlog));

function isEven(number){
    if(number%2===0){
        return true;
    }else{
        return false;
    }       
}
const arr=[1,5,18,2,77,108];

const find=arr.find(isEven);
console.log(find);
const filter=arr.filter(isEven);
console.log(filter);