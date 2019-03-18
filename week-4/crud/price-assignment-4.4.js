var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Assignment 4.4");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-4.4.js
; Author: Josh Price
; Date:   17 March 2019
; Modified By: Josh Price
; Description: cURL Requests 
;===========================================
*/

//start program
var express = require("express");
var http = require("http");

var app = express();

//Get API Request
app.get("/", function (req, res) {
    res.send("Get Request");
});

//Put API Request
app.put("/", function(req, res) {
    res.send("Put Request");
});

//Post API Request
app.post("/", function(req, res) {
    res.send("Post Request");
});

//Delete API Request
app.delete("/", function(req, res) {
    res.send("Delete Request");
});

//Creating Server
http.createServer(app).listen(8080, function() {
    console.log("App started on port 8080");
});

//end program