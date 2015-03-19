'use strict';

var sharkweekControllers = angular.module('sharkweekControllers', [])

sharkweekControllers.controller('HomeCtrl', ['$scope',
  function($scope) {
    $scope.words = ["Hello", "World"];
  }]);

sharkweekControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.words = ["About", "Me"];
  }]);