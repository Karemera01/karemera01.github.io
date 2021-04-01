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

// function doubleAges(arr) {
//     return arr.map(item=>item.age*2);

// }

// console.log(doubleAges[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }]);

// [5, 0, 7, 77, -20, 300, 51, 2].forEach((item,index,array)=>{
//     console.log(`item is ${item} and index is ${index} and array is ${array}`);
// });
// let result=[1,5,16,3, 108].forEach((item)=>item%2===0);
// console.log(result);

// let str="HELLO mYname is KaREMERA";
// let splitted =str.split();
// console.log(splitted);

// let joined=splitted.reverse();
// console.log(joined.join(","));
// let [firstName, surname] = "Ilya Kantor".split(' ‘);
// const arr1234 = [1, 2, 3, 4, 5];
// [a, b, ...c] = arr1234;
// console.log(a);
// console.log(b);
// console.log(c);
// let now=new Date();
// console.log(now);
// let myArray=[2,15,1,89,5];
// let comparator=(a,b)=>a-b;
// console.log(myArray.sort(comparator));
// function someThingOdd(arr){
//     let count=1;
//     for(let i=0;i<arr.length;i++){
//         if(i%2!==0){
//             count*=arr[i];

//         }
//     }
//     return count;
// }
// console.log(someThingOdd([2,15,1,89,5]));

// let myMultiply=function(arr){
//     let result=arr.reduce((acc,e)=>acc*e);
//     return result;
// };
// console.log(myMultiply([2,15,1,89,5]));

// function helper(arr){
//     let array=[];
//     for(let i=0;i<arr.length;i++){
// array.push(arr[i]*i);
//     }
//     return array;
// }
// console.log(helper([10,20,30,40]));
//  let arr =[10,20,30,40];
// let returnVal= arr.map(helper);
// console.log(returnVal); // [0, 20, 60, 120]
// console.log(arr);
// let helper=function(arr){
//     let array=[];
//     for(let i=0;i<arr.length;i++){
// array.push(arr[i]*i);
//     }
//     return array;
// };
// let array =[10,20,30,40];
// let returnVal= array.map(helper);
// console.log(returnVal); // [0, 20, 60, 120]
// console.log(array);

// const rectangle = {
//     value1: 0,
//     value2: 0,
// getValues:function(length,width){
//     this.value1=length;
//     this.value2=width;
// },
// computeArea:function(){
//     const tot=this.value1*this.value2;
//     return tot; 
// },
// computeCirc:function(){
//     const circ=this.value1*2+this.value2*2;
//     return circ;
// }
// };
// console.log(rectangle.getValues(5,4));
// console.log(rectangle.computeArea(5,4));
// console.log(rectangle.computeCirc(5,4));

function myArray(){
    console.log(this);
}
const a=

























