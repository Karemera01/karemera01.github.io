// "use strict";
// let length=["Karemera","Kagabo","Murenzi"].map(function(item,index){
//     const newItem=item+" "+index+":"+ item.length;+" ";
//     return newItem;
// });
// console.log(length);



// let comparator=function (a,b){
//     if(a>b)return -1;
//     if(a<b)return 1;
//     else return 0;
// };
// let arr = [ 1, 15, 2];
// arr.sort(comparator);
// console.log(arr);

// let comparator=(a,b)=>b-a;
// let arr = [ 1, 15, 2];
// arr.sort(comparator);
// console.log(arr);

let arr = [1, 2, 3, 4, 5,7,9,8];

// let result=arr.reduce((sum,current)=>sum*current,1);
let result=arr.reduce((max,current)=>Math.max(max,current),0);
console.log(result);




