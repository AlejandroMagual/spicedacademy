const url = require('url');
const querystring = require('querystring');

var urlObject = url.parse(process.argv[2]);
var querystringObject = querystring.parse(urlObject.query);

console.log('The protocol is ' + urlObject.protocol);
console.log('The host is ' + urlObject.host);
console.log('The hostname is ' + urlObject.hostname);
console.log('The port is ' + urlObject.port);
console.log('The path is ' + urlObject.path);
console.log('The pathname is ' + urlObject.pathname);
console.log('The query is ' + urlObject.query);
console.log('The value of the a parameter is ' + querystringObject["a"]);
console.log('The value of the b parameter is ' + querystringObject["b"]);
