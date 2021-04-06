// "use strict";
// function foo() { 
//     console.log(this); 
// }
// const bob = {
// log: function() {
// console.log(this);
// }
// };
// console.log(this); // this generally is window object
// foo(); //foo() is called by global window object
// bob.log();//log() is called by the object, bob 
// const me = {
//     first: 'Tina',
//     last: 'Xing',
//     getFullName: function() {
//     return this.first + ' ' + this.last;
//     }
//     }
//     const log = function(height, weight) { // ‘this’ refers to the invoker
//     console.log(this.getFullName() + height + ' ' + weight);
//     }
//     const logMe = log.bind(me);
//     logMe('180cm‘, '70kg'); // Tina Xing 180cm 70kg;
//     log.call(me, '180cm', '70kg'); // Tina Xing 180cm 70kg
//     log.apply(me, ['180cm', '70kg']); // Tina Xing 180cm 70kg
//     log.bind(me, '180cm', '70kg’)(); // Tina Xing 180cm 70kg
//"use strict";
function area(){
    console.log(this);
    return this.side * this.side;
    }
    const square1 = {side: 5, area: area};
    console.log(square1.area());
