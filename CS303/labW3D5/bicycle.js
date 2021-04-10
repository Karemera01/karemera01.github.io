"use strict";


let Bicycle = function (gear, speed) {

    Bicycle.prototype.gear = gear;
    Bicycle.prototype.speed = speed;

    Bicycle.prototype.applyBrake = function (decrement) {
        this.decrement = decrement;
        return this.speed -= this.decrement;
    };
    Bicycle.prototype.speedUp = function (increment) {
        this.increment = increment;
        return this.speed += this.increment;
    };

};


let MountainBike = function (seatHeight) {

    this.seatHeight = seatHeight;

    this.setHeight = function (newValue) {
        this.newValue = newValue;
        return this.seatHeight = this.newValue;

    };

};



MountainBike.prototype.seatHeight = 5;



MountainBike.__proto__ = Bicycle;



let mountainBike = new Bicycle(3, 2);
// mountainBike.speedUp(100);
// mountainBike.applyBrake(10);

// console.log(mountainBike.speed);
// console.log(mountainBike.gear);

module.exports={Bicycle};

