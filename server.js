var express = require("express");
var api     = require('./api');

var app = express();

app.get('/page-info/:url', api.getPageInfo);

var port = process.env.PORT || 80;

app.listen(port, function() {
  console.log("Listening on " + port);
});

    
 
