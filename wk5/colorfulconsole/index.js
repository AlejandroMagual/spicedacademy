const chalk = require('chalk');
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer(function(request, response) {

    // HANDLE REQUEST
    var method = request.method;
    //var url = request.url;
    //var headers = request.headers;
    //var userAgent = headers['user-agent'];
    request.on('error', function(err) {
        console.error(err);
    });

    // HANDLE RESPONSE
    response.on('error', function(err) {
        console.error(err);
    });
    if (method === 'GET') {
        response.write('<!doctype html>');
        response.write('<html>');
        response.write('<title>Colors</title>');
        response.write('<form method="POST">');
        response.write('<input type="text" name="text">');
        response.write('<select name="color">');
        response.write('<option value="red">red</option>');
        response.write('<option value="blue">blue</option>');
        response.write('<option value="green">green</option>');
        response.write('<option value="yellow">yellow</option>');
        response.write('<option value="gray">gray</option>');
        response.write('<option value="magenta">magenta</option>');
        response.write('<option value="cyan">cyan</option>');
        response.write('</select>');
        response.write('<button type="submit">Go</button>');
        response.write('</form>');
        response.write('</html>');
        response.end();
    }
    else if (method === 'POST') {
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            var parsedBody = querystring.parse(body);
            console.log(chalk[parsedBody['color']](parsedBody['text']));    // Need to fix this line of code
        });
        response.write('<!doctype html>');
        response.write('<html>');
        response.write('<title>it is better to have loved and lost than never to have loved at all</title>');
        response.write('<a href="/" style="color:magenta">it is better to have loved and lost than never to have loved at all</a>');
        response.write('</html>');
        response.end();
    };


}).listen(8080,8080, function() { console.log("listening on port 8080!"); } );
