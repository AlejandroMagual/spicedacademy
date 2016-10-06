const fs = require('fs');

// Promise version of fs.readdir function
function readdir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Promise version of fs.stat function
function stat(path) {
    return new Promise(function(resolve, reject) {
        fs.stat(path, function(err, stats) {
            if (err) {
                reject(err);
            } else {
                resolve(stats.isDirectory());
            }
        });
    });
}

// list files
var myPromise = readdir(__dirname + '/files');

myPromise.then(function(arrOfFiles) {
    arrOfFiles.forEach(function(item) {
        stat(__dirname + '/files/' + item).then(function(val) {
            if (val) {
                console.log(__dirname + '/files/' + item + ' is a directory');
            }   else   {
                console.log(__dirname + '/files/' + item + ' is not a directory');
            };
        });
    });
});
