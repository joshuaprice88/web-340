var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 2.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-2.3.js
; Author: Josh Price
; Date:   3 March 2019
; Modified By: Josh Price
; Description: Routes
;===========================================
*/

//Start Program

//Require Express and HTTP
var express = require("express");
var http = require("http");
//calling express
var app = express();

//creating middleware for routes
app.get("/", function(req, res) {
    res.send("Welcome to the homepage");
});

app.get("/about", function(req, res) {
    res.send("Welcome to the about page!");
});

app.get("/contact", function(req, res) {
    res.send("Welcome to the contact page!");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.send("404!");
});

//Creating server for cURL test
http.createServer(app).listen(8080);

//End Program