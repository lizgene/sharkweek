'use strict';

angular.module('sharkWeek', [
        'ngRoute',
        'sharkweekControllers',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            }).
            when('/about', {
              templateUrl: 'about.html',
              contrller: 'AboutCtrl'
            }).
            otherwise({
              redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });