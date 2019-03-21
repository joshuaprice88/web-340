// requires
var express = require('express');
var http = require('http');
var path = require('path');

// app functions
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// data array
var data = [
    "Josh",
    "Mike",
    "James",
    "Andrew"
]

//routes 
app.get("/", function(req, res) {
    res.render("index", {
        names: data
    });
});

//server
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!");
});