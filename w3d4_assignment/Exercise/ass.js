"use strict";

// function Calculator(a,b){
//     this.a=a;
//     this.b=b;
//     let sum=function(){
//      return this.a + this.b;
//     };
//     let mult=function(){
//         return this.a*this.b;
//     };
// }
// let calc=new Calculator();
// console.log(calc.sum(5,6));


let Bicycle=function(gear,speed){
    Bicycle.prototype.gear=gear;
Bicycle.prototype.speed=speed;

Bicycle.prototype.applyBrake=function(decrement){
    this.decrement=decrement;
    return this.speed-=this.decrement;
};
Bicycle.prototype.speedUp=function(increment){
    this.increment=increment;
    return this.speed+=this.increment;
};

 };
// Bicycle.prototype.gear=3;
// Bicycle.prototype.speed=2;

// Bicycle.prototype.applyBrake=function(decrement){
//     this.decrement=decrement;
//     return this.speed-=this.decrement;
// };
// Bicycle.prototype.speedUp=function(increment){
//     this.increment=increment;
//     return this.speed+=this.increment;
// };

let MountainBike=function(seatHeight){
   this.seatHeight=seatHeight;

this.setHeight=function(newValue){
    this.newValue=newValue;
    return this.seatHeight=this.newValue;

};

};



  MountainBike.prototype.seatHeight=5;

// MountainBike.prototype.setHeight=function(newValue){
//     this.newValue=newValue;
//     return this.seatHeight=this.newValue;

// };


 MountainBike.__proto__=Bicycle;



 let mountainBike  = new Bicycle(3,2);
mountainBike.speedUp(100);
  mountainBike.applyBrake(10);
 //console.log(mountainBike.gear);
 console.log(mountainBike.speed);
 console.log(mountainBike.gear);


        // assert.strictEqual(mountainBike.speed, 92);
        // assert.strictEqual(mountainBike.gear, 3);


// let mountainBike2=new MountainBike();
// console.log(mountainBike2.setHeight(4));
