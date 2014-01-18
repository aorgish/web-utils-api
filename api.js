var request = require("request");
var config  = require("./config");

exports.getPageInfo = function(req, res) {
    
    var pageUrl = req.params.url;
    var result  = {};
    var requestsData = config.socialNetworkCounters;
    var liveRequests = requestsData.length;

    console.log("getPageInfo: "+pageUrl); 


    requestsData.forEach( function(item) {
       request(item.url+pageUrl, function(name, method) { return function (error, response, body) {
          if (!error && (response.statusCode == 200) && (body!=null)) {
            try {
               result[name] = method(body);
            } catch(ex) {
               console.error(ex); 
            } 
          }
          checkAllComplete();
       };}(item.name, item.method));
    });

     function checkAllComplete() {
       liveRequests--;
       if (liveRequests===0) {
          res.send(result);
       }
    }

};

