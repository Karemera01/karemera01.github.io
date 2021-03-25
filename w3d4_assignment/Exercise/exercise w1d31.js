"use strict";
// /**
//  * 
//  * @param {object} grades ;
//  * @returns {number} average.
//  */
// function gradesReport(grades){
//     let sum=0;
//     let count=0;
//     for(let grade in grades){
//         sum+=grades[grade];
//         count++;

//     }
//     let average=sum/count;
//     return average;
// }
// gradesReport();
let calculator={
    value1:0,
    value2:0,
    getValues= function(operand1,operand2){
        this.value1=operand1;
        this.value2=operand2;

    },
    sum=function(){
        const tot=this.value1+this.value2;
        return tot;
    },
    mult=function(){
        const result=this.value1*this.value2;
        return result;
    }
}
calculator.getValues(5,10);