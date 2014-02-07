var express = require("express");
var api     = require('./api');
var twitterApi = require('./twitter-api');


var app = express();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// seo
app.get('/page-info/:url',               api.getPageInfo);
// twitter
app.get('/twitter/user/id/:id',          twitterApi.getUserById);
app.get('/twitter/user/screen_name/:id', twitterApi.getUserByScreenName);



var port = process.env.PORT || 80;

app.listen(port, function() {
  console.log("Listening on " + port);
});

    
 
