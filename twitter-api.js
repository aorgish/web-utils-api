var request = require("request");

exports.getUserById = function(req, res) {
    var id = req.params.id;
    var url = "https://twitter.com/account/redirect_by_id/"+id;
    sendRequest(url, res);
};

exports.getUserByScreenName = function(req, res) {
    var id = req.params.id;
    var url = "https://twitter.com/"+id;
    sendRequest(url, res);
};


function sendRequest(url, res) {
    request(url, function (error, response, body) {
       if (!error && (response.statusCode == 200) && (body!=null)) {
          try {
              var result = parseUserData(body);
              res.send(result);
          } catch(ex) {
              console.error(ex);
              res.send(ex);
          } 
       } else {
         res.send(error);
       }
    });
}


function parseUserData(body) {
   var re = /input type="hidden" id="init-data" class="json-data" value="([^"]+)"/;
   var json = re.exec(body)[1];
   json = json.replace(/&quot;/g,'"');
   var result = JSON.parse(json);
   return result.profile_user;
}

