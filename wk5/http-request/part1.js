const http = require('http');

http.createServer(function(request, response) {

    // HANDLE REQUEST
    var method = request.method;
    var url = request.url;
    var headers = request.headers;
    request.on('error', function(err) {
        console.error(err);
    });

    // HANDLE RESPONSE
    response.on('error', function(err) {
        console.error(err);
    });
    if ((method === 'GET') || (method === 'HEAD')) {
        console.log(method,url,headers);
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
        if (method === 'GET') {
            response.end('<!doctype html><html><title>Hello World!</title><p>Hello World!</p></html>');
        }
        else {
            response.end();
        };
    }
    else if (method === 'POST') {
        console.log(method,url,headers);
        var body = '';
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            console.log(body);
        });
        response.writeHead(302, {'Location':'/'});
        // response.setHeader('Location', '/');
        // response.statusCode = 302;
        response.end();
    }
    else {
        console.log(method,url,headers);
        response.statusCode = 403;
        response.end();
    };

}).listen(8080, console.log("listening on "));
