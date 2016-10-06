// DECLARATIONS
// Express:
var express = require('express');
var app = express();
// Express-Handlebars:
var hb = require('express-handlebars');
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
// File System:
var fs = require('fs');
// Other (To be confirmed):
//var bodyParser = require('body-parser');

// FUNCTIONS
function contextHome(path) {
    // returns array of objects containing context data for home.handlebars template
    var arr = [];
    var arrOfFiles = fs.readdirSync(path);
    arrOfFiles.forEach(function(item) {
        var stats = fs.statSync(path + '/' + item);
        if (stats.isDirectory()) {
            var obj = {};
            obj["projectName"] = item;
            obj["screenshotUrl"] = 'projects/' + item + '/screenshot.png';
            obj["projectUrl"] = 'projects/' + item;
            arr.push(obj);
        };
    });
    return arr;
}

function validProject(name) {
    // returns true/false dependening on whether the "name" argument corresponds to a project name
    var arrOfFiles = fs.readdirSync(__dirname + '/public/projects');
    arrOfFiles.forEach(function(item) {
        var stats = fs.statSync(__dirname + '/public/projects' + '/' + item);
        if (stats.isDirectory()) {
            if (name === item) {
                return true;
            };
        };
    });
    return false;
}

console.log(validProject('Kitty'));

/*
function listProjects(path) {
    // returns array containing project names
    var arr = [];
    var arrOfFiles = fs.readdirSync(path);
    arrOfFiles.forEach(function(item) {
        var stats = fs.statSync(path + '/' + item);
        if (stats.isDirectory()) {
            arr.push(item);
        };
    });
    return arr;
}
*/

/*
function searchFilePath(dir, fileName) {
    // if a file of name "fileName" is found, then this function returns a string with the file's path
    // Example:  var path = searchFilePath(__dirname + '/projects','index.html');
    var arrOfFiles = fs.readdirSync(dir);
    for (var i=0; i<arrOfFiles.length; i++) {
        var stats = fs.statSync(dir + '/' + arrOfFiles[i]);
        if (stats.isDirectory())  {
            return searchFilePath(dir + '/' + arrOfFiles[i], fileName);
        } else {
            if (arrOfFiles[i] === fileName) {
                return dir + '/' + arrOfFiles[i];
            };
        };
    };
}
*/

/*
Notes how to use function:
var path = searchFilePath(__dirname + '/projects', url.substring(1));
*/

// ROUTING
// Homepage:
app.get('/', function(req, res) {
    var context = contextHome(__dirname + '/public/projects');
    res.render('home', {
        layout: 'layout',
        project: context
        }
    );
});


/*
app.get('/projects/:projectName', function (req, res) {
    var project = req.params["projectName"];
    console.log('project= ' + project);
    if (validProject(project)) {
        console.log('valid');
        fs.readFile(__dirname + '/public/projects/' + project + '/description.json',"utf-8", (err, data) => {
            if (err) throw err;
            try {
                var context = JSON.parse(data);
            } catch(e) {
                console.log(e);
            }

            // console.log('name: ' + context.name);
            // console.log('description: ' + context.description);
            res.render('description', {
                layout: 'layout',
                project: context
            });
        });
    };


    // var context = {
    //     title: req.params["projectName"],
    //
    // }
    // console.log(context);
    // var context = contextHome(__dirname + '/public/projects');
    // res.render('home', {
    //     layout: 'layout',
    //     project: context
    //     }
    // );
    // res.send(req.params);
    //res.send(req.url);
});
*/




// Static assets are contained in the directory named "public" and will be served from "/"
app.use(express.static(__dirname + '/public'));

app.listen(8080, function() { console.log("listening on port 8080!"); });

/*
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(require('cookie-parser')());

app.get('/cookie', function(req, res) {
    res.send('<form method="POST"><h2>To use this site you must accept cookies:</h2>\
        <input type="radio" name="name" value="agree">I agree to this website cookie policy<br>\
        <input type="radio" name="name" value="disagree">I disagree<br>\
        <input type="submit" value="Submit"></form>');
});

app.post('/cookie', function(req, res) {
    var name = req.body.name;

    if (name === 'agree') {
            res.cookie("agree", "true", {maxAge: 60000});
            res.redirect('/hello/world');
    }
    else {
        res.send('<h2>You cannot use the site without accepting cookies</h2>');
    };
});

app.get('*', function(req, res, next){
  if (req.headers.cookie === 'agree=true') {
    next();
  } else {
    url = req.url;
    res.redirect('/cookie');
  }
});

app.use(express.static(__dirname + '/projects'));
// files in the directory named "projects" will be served from "/"

app.listen(8080, function() { console.log("listening on port 8080!"); });
*/
