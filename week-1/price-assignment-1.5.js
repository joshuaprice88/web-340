var header = require('../price-header.js');
var header = header.display("Josh", "Price", "Exercise 1.5");
console.log(header + '\n');

/*
============================================
; Title:  price-exercise-1.5.js
; Author: Josh Price
; Date:   23 February 2019
; Modified By: Josh Price
; Description: Hello World! 
;===========================================
*/

//start program

//Requiring HTTP
var http = require('http');

//Function to request server body
function bodyRequest(req, res) {
    var body = "Cause it's so catchy, catchy It's such a catchy song Gonna make you happy, happy I'm tryna code and sing along";
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length':contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

//Creating and listening to server
var app = http.createServer(bodyRequest);

app.listen(8080);

//Logging to make sure server is running
console.log('Server start on port 8080');

//End Program