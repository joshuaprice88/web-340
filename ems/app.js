//Start Program
var express = require('express');
var http = require ('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require("mongoose");
var employee = require('./models/employee');

//Connecting to MongoDB Database
var mongoDB = "mongodb+srv://joshuaprice1:test123@ems-bm9ej.mongodb.net/test?retryWrites=true"

mongoose.connect(mongoDB, {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function() {
    console.log("Application connected to Atlas MongoDB instance")
});

//Application
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));

var employee = new employee({
    firstName: "Jon",
    lastName: "Smith"
});

app.get("/", function (req, res) {
    res.render("index", {
        title:"Home",
        message: "Show us your slurp game!"
    });
});

//Creating Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});

//End Program

