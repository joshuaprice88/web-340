var header = require('../../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 7.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-7.2.js
; Author: Josh Price
; Date:   7 April 2019
; Modified By: Josh Price
; Description: TDD in Action
;===========================================
*/

//Start Program
var assert = require("assert");

//Creating Test
describe("String#split", function() {

    it("should return an array of fruits", function(){

    assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });
});

//Test Function
function getFruits(str) {
    return str.split(',');
}

module.exports = getFruits;

//End Program