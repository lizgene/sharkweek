'use strict';


var sharkWeek = angular.module('sharkWeek', [
  'ngRoute',
  'sharkweekControllers',
  'templates',
  'ngResource',
  'sharkweekServices'
  ]);


sharkWeek.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      }).
      when('/products', {
        templateUrl: 'home.html',
        controller: 'ProductsController'
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