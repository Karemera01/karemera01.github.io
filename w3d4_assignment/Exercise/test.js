"use strict";

// function Calculator(value1,value2) {
   
//     this.value1=value1;
//     this.value2=value2;
//     this.getValues=function(){
//        return this.value1,this.value2;
//     };
//     this.sum=function(){
//        return this.value1+this.value2;
//     };
//     this.mult=function(){
//        return this.value1*this.value2;
//     };
   


//     //implement this
   
//      }
// let calc=new Calculator(5,10);
// console.log(calc.sum());
// console.log(calc.mult());
// console.log(calc.value1);

// function Accumulator(initialValue,increment){
//     this.initialValue=initialValue;
//     this.currentValue=initialValue;
//     this.increment=increment;
//     this.accumulate=function(){
//         return this.currentValue+=this.increment;
//     };
//     this.report=function(){
//        return this.currentValue;
//     };
// }
// let acc=new Accumulator(5,10);
// console.log(acc.initialValue);
// console.log(acc.increment);
// console.log(acc.currentValue);
// console.log(acc.accumulate());
// console.log(acc.report());

// let myInt = 555;
// myInt = false;

// function filter(arr,a,b){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=a&&arr[i]<=b){
//             return true;
//         }
//     }
//    return false;
  
   
//         }



// function filterRangeInPlace(arr,a,b) {
    
//    arr.filter(filter);
    
//         }
        
        
// console.log(filterRangeInPlace([5, 3, 8, 1],1,4));

// const myArray=[1,4,5,8];

// let result=myArray.map(item=>Math.pow(item,2));
// console.log(result);
// const team=["Bob","Fred","Jim"];
// const [bob,fred,jim]=team;

// let matrix=[[1,2,3],[4,5,6],[7,8,9]];
// let sum=0;
// // for(let i=0;i<matrix.length;i++){
// //     for (let j=0;j<matrix.length;j++){
// //         sum+=matrix[i][j];

// //     }
// // }
// for ( let i of matrix){
//     for(let j of i){
//         sum+=j;
//     }
// }
// console.log(sum);
// let baz = "" + 33 + 10;
// console.log(baz===3310);
// const gradeReport = { s101: 3, s102: 2, s103: 3 };
// function averageScore(gradeReport){
//     let sum=0;
//     let count=0;
//     for(let grades in gradeReport){
//         sum+=gradeReport[grades];
//         count++;
//     }
//     let average=sum/count;
//     return average;
// }
// console.log(averageScore(gradeReport));

// function isEven(num) {
    
//         if (num % 2 === 0) {
//             return true;
//         } else
//             return false;
//     }



// function filterEven(arr) {
//    let result= arr.filter(isEven);
//    return result;


// }
//  console.log(filterEven([5, 0, 7, 77, -20, 300, 51, 2]));

function doubleAges(arr) {
    return arr.map(item=>item.age*2);

}

console.log(doubleAges[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);








