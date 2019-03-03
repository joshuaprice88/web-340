var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 2.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-2.2.js
; Author: Josh Price
; Date:   3 March 2019
; Modified By: Josh Price
; Description: Express Hello World
;===========================================
*/

//Start Program

//Require Express
var express = require("express");
var http = require("http");

//creating express app
var app = express();

//middleware
app.use(function(req, res) {
    console.log("In comes a request to: " + req.url);

    res.end("Hello World")
});

//creating server
http.createServer(app).listen(8080);

//End Program