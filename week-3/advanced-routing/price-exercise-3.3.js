var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 3.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-3.3.js
; Author: Josh Price
; Date:   10 March 2019
; Modified By: Josh Price
; Description: Advanced Routing
;===========================================
*/

//Start Program
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));
app.get("/:employeeId", function(req, res){
    var employeeId = parseInt(req.params.employeeId, 10);
    res.render("index", {
        employeeId: employeeId
    })
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080")
});
//End Program