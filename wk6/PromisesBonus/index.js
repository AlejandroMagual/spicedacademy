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
var path = __dirname + '/files';
listFiles(path, readdir(path));

function listFiles(path, myPromise) {
    myPromise.then(function(arrOfFiles) {
        var arrayPromises = [];
        arrOfFiles.forEach(function(item) {
            var myOtherPromise = stat(path + '/' + item).then(function(val) {
                if (val) {
                    console.log(path + '/' + item + ' is a directory');
                    var myOtherPath = path + '/' + item;  // FIX THIS STATEMENT
                    var myOtherPromise = readdir(myOtherPath);
                    listFiles(myOtherPath, myOtherPromise);
                }   else   {
                    console.log(path + '/' + item + ' is not a directory');
                };
            });
            arrayPromises.push(myOtherPromise);
        });
        return arrayPromises;
    }).then(function(val) {
        Promise.all(val).then(function() {
            console.log('done!');
        });
    });
}
