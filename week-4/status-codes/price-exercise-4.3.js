var header = require('../../price-header.js');
var header = header.display("Josh", "Price", "Exercise 4.3");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-4.3.js
; Author: Josh Price
; Date:   17 March 2019
; Modified By: Josh Price
; Description: Status Codes
;===========================================
*/

//start program
    var express = require('express');
    var http = require('http');

    var app = express();

    app.get('/not-found', function (req, res) {
        res.status(404);

        res.json({
            error:"API not found"
        })
    });

    app.get("/ok", function(req, res) {
        res.status(200);

        res.json({
            message: "Server looks to be good!"
        })
    });

    app.get("/not-implemented", function(req, res) {
        res.status(501);

        res.json({
            error: "This has not been implemented."
        })
    });

    http.createServer(app).listen(8080, function () {
        console.log("Server started on port 8080!");
    })
//end program