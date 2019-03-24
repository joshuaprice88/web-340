var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 5.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-5.3.js
; Author: Josh Price
; Date:   24 March 2019
; Modified By: Josh Price
; Description: PUG
;===========================================
*/

// require
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");


var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//routes
app.get("/", function(req, res) {
    res.render("index", {
        message: "This is me trying out PUG!"
    });
});

//creating server
http.createServer(app).listen(8080, function (){
    console.log("Application started on port 8080!");
});