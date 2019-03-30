var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 6.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-6.3.js
; Author: Josh Price
; Date:   30 March 2019
; Modified By: Josh Price
; Description: Mongoose
;===========================================
*/

//Start Program

//Require
var express = require("express");
var http = require("http");
var logger = require('morgan');
var mongoose = require("mongoose");

//connection string
var mongoDB = "mongodb+srv://joshuaprice1:test123@ems-bm9ej.mongodb.net/test?retryWrites=true"

//Connecting to Database
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection Error:"));

db.once("open", function() {
    console.log("Application Connected to AWS Mongodb server");
});

var app = express();

app.use(logger('dev'));

http.createServer(app).listen(8080, function () {
    console.log('Application started on port 8080!')
})
//End program