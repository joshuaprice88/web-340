var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 2.2");
console.log(header + '\n');

/*
============================================
; Title:  price-assignment-2.4.js
; Author: Josh Price
; Date:   3 March 2019
; Modified By: Josh Price
; Description: EJS
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

//Tells Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views")); 

//Tell Express to use the EJS view Enginer
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index", {
        firstName: "John",
        lastName: "Smith",
        address: "5560 East New Street, Lego Land"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});

