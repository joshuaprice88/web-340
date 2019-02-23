var http = require('http');

function bodyRequest(req, res) {
    var body = "Cause it's so catchy, catchy It's such a catchy song Gonna make you happy, happy I'm tryna code and sing along";
    var contentLength = body.length;

    res.writeHead(200, {
        'Content-Length':contentLength,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var app = http.createServer(bodyRequest);

app.listen(8080);

console.log('Server start on port 8080');