'use strict';

/* Controllers */

angular.module('apiSample.controllers', [])

  .controller('menuCtrl', ["$scope", function ($scope) {

      $scope.menubar = [
          { name: "page-info", link: "#page-info" },
      ];

  }])


  .controller('viewCtrl', ["$scope", "$http", function ($scope, $http) {

      $scope.$on("tokenChanged", function(event) {
          getContentItems();
      });

      $scope.data = { TotalCount : 0 };
      

      function getContentItems() {
          $http.get("http://alexorgish-test.apigee.net/v1/content-items?pageSize=100",
                   { headers: {
                       //"Authorization": "Elateral-MSC " + token,
                       "Accept"       : "application/json"
                   } }
          ).success(function(data, status, headers, config) {
              console.log("success");
              console.debug(data);
              $scope.data = data;
          }). error(function(data, status, headers, config) {
              console.log("error!");
          });
      }


  }]);

