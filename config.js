exports.socialNetworkCounters = [
  { 
    name  : "twitter",  
    url   : "https://cdn.api.twitter.com/1/urls/count.json?url=",             
    method: JSON.parse 
  }, { 
    name  : "linkedin", 
    url   : "http://www.linkedin.com/countserv/count/share?format=json&url=", 
    method: JSON.parse 
  }, { 
    name  : "facebook", 
    url   : "http://api.facebook.com/restserver.php?method=links.getStats&format=json&urls=", 
    method: JSON.parse 
  }, { 
    name  : "stumble",  
    url   : "http://www.stumbleupon.com/services/1.01/badge.getinfo?url=",    
    method: JSON.parse 
  }, { 
    name  : "delicious",
    url   : "http://feeds.delicious.com/v2/json/urlinfo/data?url=",
    method: JSON.parse 
  }, { 
    name  : "vk_likes", 
    url   : "http://vk.com/widget_like.php?app=4048225&url=",
    method: regexp(/var counter = (\d+)/) 
  }, { 
    name  : "vk_shares",
    url   : "http://vk.com/share.php?act=count&index=0&url=",
    method: regexp(/VK.Share.count\(\d+, (\d+)\);/) 
  }, { 
    name  : "googlepls",
    url   : "https://apis.google.com/_/+1/fastbutton?annotation=inline&url=", 
    method: regexp(/<span class="A8 RZa">[\+\s]*(\d+)/) 
  }, { 
    name  : "ok",
    url   : "http://connect.odnoklassniki.ru/dk?st.cmd=WidgetShare&st.settings=%7Bwidth%3A125%2Cheight%3A25%2Cst%3A%27oval%27%2Csz%3A12%2Cck%3A1%7D&st.shareUrl=", 
    method: regexp(/klass_count">(\d+)</) 
  }, { 
    name  : "reddit",
    url   : "http://buttons.reddit.com/button_info.json?url=", 
    method: JSON.parse 
  },
];

function regexp(re) {
  return function(x) { return re.exec(x)[1]; }
}
