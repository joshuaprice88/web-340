var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Assignment 6.4");
console.log(header + '\n');

/*
============================================
; Title:  price-assignment-6.4.js
; Author: Josh Price
; Date:   30 March 2019
; Modified By: Josh Price
; Description: Milestone 2 UI
;===========================================
*/

//Start Program
var express = require('express');
var http = require ('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));

app.get("/", function (req, res) {
    res.render("index", {
        title:"Home",
        message: "Show us your slurp game!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//End Program

