var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 1.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-1.3.js
; Author: Josh Price
; Date:   19 February 2019
; Modified By: Josh Price
; Description: Modules 
;===========================================
*/



//Begin Program
var url = require('url');

var parsedURL = url.parse('https://www.google.com/profile?name=price');

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

//EndProgram