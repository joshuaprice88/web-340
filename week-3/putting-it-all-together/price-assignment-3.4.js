var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Assignment 3.4");
console.log(header + '\n');

/*
============================================
; Title:  price-assignment-3.4.js
; Author: Josh Price
; Date:   10 March 2019
; Modified By: Josh Price
; Description: putting-it-all-together
;===========================================
*/

//start program

//Setting required middleware
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

//pointing application at template files
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//setting up the logging with morgan
app.use(logger("short"));

//defining routes and sending a response for the ejs file 
app.get("/", function(req, res) {
    res.render("index", {
        message: "home page"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(req, res) {
    res.render("contact", {
        message: "contacts page"
    });
});

app.get("/products", function (req, res) {
    res.render("products", {
        message:"products page"
    });
});

//Creating server for the application
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080")
});
//end program