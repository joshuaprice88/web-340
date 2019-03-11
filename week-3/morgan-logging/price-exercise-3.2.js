var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 3.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-3.2.js
; Author: Josh Price
; Date:   9 March 2019
; Modified By: Josh Price
; Description: Logging
;===========================================
*/
 //start program
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tells Express the views are in the 'views' dir

app.set("view engine", "ejs"); //Tell express to use the EJS View Engine

app.use(logger("short"));

app.get("/", function (req, res) {
    res.render("index", {
        message: "Welcome to Morgan Logger! This is an awesome!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
//end program