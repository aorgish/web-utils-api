'use strict';


// Declare app level module which depends on filters, and services
angular.module('apiSample', ['ngRoute','apiSample.filters', 'apiSample.services', 'apiSample.directives', 'apiSample.controllers']).
  config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/page-info/', {templateUrl: 'partials/page-info.html', controller: 'viewCtrl'});
    $routeProvider.otherwise({redirectTo: '/page-info'});
  }]);
