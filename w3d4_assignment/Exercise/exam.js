"use strict";

// function a() {
//     console.log(this);}
//     const b = {
//     dog: 'fido',
//     log: function() {
//     console.log(this); }}
//     console.log(this); // this generally is window object
//     a(); // a() is called by global window object in non-strict mode
//     b.log(); // log() is called by a object
//     let mylog = b.log;
//     mylog()
// function area(){
//     console.log(this); 
//     return this.side * this.side;
//     }
//     const square1 = {side: 5, area: area};
//     console.log(square1.area()); 
// function area(){
//     console.log(this); 
//     console.log(this.side) 
//     return this.side * this.side;
//     }
//     const square1 = {side: 5, area: area};
//     console.log(area());
// const abc = {
//     salute: "",
//     greet: function() {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function(newSalute) { //inner function
//     this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//     }
//     };
//     abc.greet(); //Hello Hello ???
    
    const abc = {
        salute: "",
        greet: function() {
        const self = this;
        self.salute = "Hello";
        console.log(self.salute); //Hello
        const setFrench = function(newSalute) { //inner function
        self.salute = newSalute;
       
        };
        setFrench("Bonjour");
        console.log(self.salute); //Bonjour
        }
        };
        abc.greet();