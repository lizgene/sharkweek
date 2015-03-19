'use strict';

var sharkweekControllers = angular.module('sharkweekControllers', [])

sharkweekControllers.controller('HomeCtrl', ['$scope',
  function($scope) {
	  $scope.products = [
	    {'name': 'Tampax tampon',
	     'snippet': 'THE NEXT GEN.'},
	    {'name': 'Kotex tampon',
	     'snippet': 'This is awesome.'},
	    {'name': 'Random pad',
	     'snippet': 'This one will probably kill you.'}
	  ];
  }]);

sharkweekControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.words = ["About", "Me"];
  }]);