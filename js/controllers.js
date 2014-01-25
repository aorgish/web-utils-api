'use strict';

/* Controllers */

angular.module('apiSample.controllers', [])

  .controller('menuCtrl', ["$scope", function ($scope) {

      $scope.menubar = [
          { name: "page-info", link: "#page-info" },
      ];

  }])


  .controller('viewCtrl', ["$scope", "$http", function ($scope, $http) {

      $scope.url = "";
      initializeData();

      $scope.startSearch = function(event) {
        if ($scope.url.trim()!=="")
          getPageInfo();
      }

      function initializeData() {
	  $scope.data = { 
              facebook : { cnt : 0, progress : 0 },
              twitter  : { cnt : 0, progress : 0 },
              googlep  : { cnt : 0, progress : 0 },
              linkedin : { cnt : 0, progress : 0 },
              pinterest: { cnt : 0, progress : 0 },
              xing     : { cnt : 0, progress : 0 },
              vkontakte: { cnt : 0, progress : 0 }
	 };
      }            

      function getPageInfo() {
          var url = encodeURIComponent($scope.url.trim());
          $http.get("http://web-utils-api.herokuapp.com/page-info/"+url,
                   { headers: {
                       "Accept"       : "application/json"
                   } }
          ).success(function(data, status, headers, config) {
              console.log("success");
              console.debug(data);
              setResults(data);
          }). error(function(data, status, headers, config) {
              console.log("error!");
          });
      }

      function setResults(response) {
          initializeData();
          if (response.facebook) 
             $scope.data.facebook.cnt = response.facebook[0].share_count;
          if (response.twitter) 
             $scope.data.twitter.cnt = response.twitter.count;
          if (response.google_plus)
             $scope.data.googlep.cnt = parseInt(response.google_plus);
          if (response.linkedin) 
             $scope.data.linkedin.cnt = response.linkedin.count;
          if (response.linkedin) 
             $scope.data.linkedin.cnt = response.linkedin.count;

          if (response.xing) 
             $scope.data.xing.cnt = parseInt(response.xing);
          if (response.vk_shares) 
             $scope.data.vkontakte.cnt = parseInt(response.vk_shares);


          calcProgress();
      }


      function calcProgress() {
        var maxValue = 0;
        var item;
      	for(item in $scope.data) {
           if ($scope.data[item].cnt>maxValue) maxValue = $scope.data[item].cnt;
        }
        
        if (maxValue==0) return;

      	for(item in $scope.data) {
           $scope.data[item].progress = Math.round(100*$scope.data[item].cnt/maxValue);
        }
        
      }
  }]);

