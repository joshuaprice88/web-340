//Start Program
var express = require('express');
var http = require ('http');
var path = require('path');
var logger = require('morgan');
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var employee = require('./models/employee');

// csrf protection
var csrfProtection = csrf({cookie: true});

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
app.set("port", process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.use(helmet.xssFilter());
app.use(logger("short"));

app.use(bodyParser.urlencoded ({
    extended: true;
}));

app.use(cookieParser());
app.use(csrfProtection);

app.use(function(req, res, next) {
    var token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
});

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

app.get("/new", function (req, res){
    res.render("new", {
        title: "Home",
        message: "Add New Employee"
    })
})

app.post("/process", function(res, req) {
    console.log(req);
    console.log(req.csrfToken);
    Response.redirect("/");
})

//Creating Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Application started on port " + app.get("port"));
});

//End Program

