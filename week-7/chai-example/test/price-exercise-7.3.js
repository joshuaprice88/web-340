var header = require('../../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 7.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-7.3.js
; Author: Josh Price
; Date:   7 April 2019
; Modified By: Josh Price
; Description: Chai in Action
;===========================================
*/

//Start Program
var fruits = require("../price-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function () {
    it("should return an array of fruits", function(){
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});

//end Program