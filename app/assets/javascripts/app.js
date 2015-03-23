'use strict';


var sharkWeek = angular.module('sharkWeek', [
  'sharkweekServices',
  'ngRoute',
  'sharkweekControllers',
  'templates',
  'ngResource'
  ]);


sharkWeek.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'product_detail.html',
        controller: 'ProductDetailCtrl'
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