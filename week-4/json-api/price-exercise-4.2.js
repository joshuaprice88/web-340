var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 4.2");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-4.2.js
; Author: Josh Price
; Date:   17 March 2019
; Modified By: Josh Price
; Description: API
;===========================================
*/


//Begin Program
var express = require("express");
var http = require("http");
var app = express();

//creating get api function
app.get("/customer/:id", function(req, res) {
    var id = parseInt(req.params.id, 10);

    res.json({
        firstName: "Josh",
        lastName: "Price",
        employeeId: id
    })
})

//creating server
http.createServer(app).listen(3000, function () {
    console.log('Application started and listening on port 3000');
})

//End Program