'use strict';


var sharkWeek = angular.module('sharkWeek', [
  'ngRoute',
  'sharkweekControllers',
  'templates'
]);


sharkWeek.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);