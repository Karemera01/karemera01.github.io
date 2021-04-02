"use strict";
/* global require */

/* You need the assert and function name declarations to test in node.  
Comment these out when you send it to the browser with the index.html mocha setup page.
*/
const assert = require("assert");  //always need this with node
const myExports = require("./myreduce.js");  //with node need the name of your file with your functions here
const myMap = myExports.myMap;  //do this for all of the functions used in the Mocha tests
const myReduce = myExports.myReduce;
const myFilter = myExports.myFilter;








describe("map elements tests", function () {
    it("tests double the elements", function () {
        const dblFun = (num, index) => index + ": " + (num * 2);
        const arr=[]

        assert.Equal("expect [2, 4, 6,8,10] ", arr.map(dblFun));
        assert.Equal("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));
    });
    it("tests Square the elements", function (arr) {
        const squareFun = num => num * num;
        assert.strictEqual("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
        assert.strictEqual("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
    });
    it("tests sum of array elements ", function (arr) {
        const sumFun = (accum, val) => accum + val;

        assert.strictEqual("expect: 15: ", arr.reduce(sumFun, 0));
        assert.strictEqual("expect: 15: ", myReduce(arr, sumFun, 0));
    });
    it("tests multiplying the array elements", function (arr) {
        const multFun = (accum, val) => accum * val;
        assert.strictEqual("expect: 120: ", arr.reduce(multFun, 1));
        assert.strictEqual("expect: 120: ", myReduce(arr, multFun, 1));
    });

});
