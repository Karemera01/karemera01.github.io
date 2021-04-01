"use strict";

let myObj={};
myObj.studentId=1010;
myObj.name="Gerard";
console.log(myObj);
console.log("1______________________");

let yourObj={"studentId":1010,
    "name":"Gerard",
    "address":{"State":"Maryland", // nested object
        "City":"Baltimore",
        "phone":4437225946

    }
};
console.log(yourObj.address.);
console.log("2_________________________________");

function CreateCompanyName(firstName,lastName,gender,position){
    
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.position=position;
}
let emp1=new CreateCompanyName("Gerard","Karemera","M","CEO");
console.log(emp1);

console.log("3___________________________________");
//Difference between Regular function and Constructors.
// examples on bicycles.
function createBicycle(cadence,speed,gear){
    let newBicycle={};
    newBicycle.cadence=cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle;

}
let bicycle1=createBicycle(50,20,4);
let bicycle2=createBicycle(20,5,1);


console.log(bicycle1);
console.log(bicycle2);

console.log("3___________________________________");

function Bicycle(cadence,speed,gear){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear; 
}
let bicycle3=new Bicycle(50,20,4);
console.log(bicycle3);

console.log("____________________________________");

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + "...";
      } else {
        return str;
      }
    }
    console.log(truncate("What I'd like to tell on this topic is:", 20));


