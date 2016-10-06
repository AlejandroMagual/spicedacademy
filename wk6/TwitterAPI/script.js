var https = require('https');
var fs = require('fs');


fs.readFile(__dirname + '/credentials.json',"utf-8", (err, data) => {

    if (err) throw err;
    try {
        var obj = JSON.parse(data);
    } catch(e) {
        console.log(e);
    }
    var credentials = obj['consumer-key'].concat(":",obj['consumer-secret']);
    var encoded = new Buffer(credentials).toString('base64');

    var options = {
      host: 'api.twitter.com',
      path: '/oauth2/token',
      method: 'POST',
      headers: {
          'Authorization' : 'Basic ' + encoded,
          'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    };

    callback = function(response) {
      var str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });

      response.on('end', function () {
        var responseObj = JSON.parse(str);
        if (responseObj['token_type'] === 'bearer') {
            var bearerToken = responseObj['access_token'];
            //console.log(bearerToken);
            ticker(bearerToken);
        } else {
            console.log('token_type key is NOT bearer');
        };
      });
    }

    // POST HTTPS request to obtain bearer token
    var req = https.request(options, callback);
    req.write('grant_type=client_credentials');
    req.end();

});


function ticker(bearerToken) {
/*
    var options = {
      host: 'api.twitter.com',
      path: '/1.1/statuses/user_timeline.json?screen_name=TheOnion&include_rts=false',
      method: 'GET',
      headers: {
          'Authorization' : 'Bearer ' + bearerToken
      }
    };

    callback = function(response) {
      var str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
          var responseArray = JSON.parse(str);
          console.log(responseArray);
          var arraySelectedTweets = [];
          for (var i=0; i<responseArray.length; i++) {
              var z = responseArray[i]['text'];
              //console.log('z[' + i + ']= ' + z);
              if (validateTweet(z)) {
                  arraySelectedTweets.push(validateTweet(z));
              };
          };
          //console.log(arraySelectedTweets);
      });
    }

    // GET HTTPS request obtain Twitter timeline
    var req = https.request(options, callback);
    req.end();
*/
}

function validateTweet(tweet) {
    // returns object {tweet_text: '...', tweet_url: '...']
    var return_Obj = {};
    var x = tweet.split('http');
    //if (x[1]) {console.log('x[1] test true')}
    if (x[1]) {
        var y = x[1].split(' ');
        // if (x.length === 2) {console.log('x.length test true')};
        // if (x[0]) {console.log('x[0] test true')};
        // if (!(y[1])) {console.log('!y[1] test true')};
        if (x.length === 2 && x[0] && !(y[1]))   {
            return_Obj['tweet_text'] = x[0];
            return_Obj['tweet_url'] = 'http' + x[1];
        }
    }
}

var tweet = 'this is a test http://something.com';
console.log('tweet= ' + tweet);
console.log(validateTweet(tweet));



/*
DESIGN NOTES FOR "vaidateTweet" function:

The following code can be used for testing the function:
var tweet = 'this is a test http://something.com';
console.log('tweet= ' + tweet);
validateTweet(tweet);

The following code is a now superseded earlier version of the function:
function validateTweet(tweet) {
    var x = tweet.search('http');
    if (x !== -1) {
        var truncated = tweet.substring(x+4,tweet.length);
        if (!(truncated.includes('http'))) {
            return tweet.substring(0,x);
        };
    };
}
*/



/*
var frameId;

var links = document.getElementsByClassName('headline');
var box = document.getElementById('container');

var distance = 0;

function newAnimation() {
  box.style.left = distance + 'px';

  var width = links[0].offsetWidth;

  if (box.offsetLeft < -width) {
    box.appendChild(links[0]);
    distance += width;
    box.style.left = distance + 'px';
  };

  distance -= 2;

  frameId = requestAnimationFrame(newAnimation);

}

frameId = requestAnimationFrame(newAnimation);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseenter', function(){
    cancelAnimationFrame(frameId);
  });
  links[i].addEventListener('mouseleave', function(){
    frameId = requestAnimationFrame(newAnimation);
  });
}

*/
