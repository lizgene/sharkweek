'use strict';

var sharkweekControllers = angular.module('sharkweekControllers', [])

sharkweekControllers.controller('ProductsController', ['$scope', '$routeParams', '$location', 'Product',
	function($scope, $routeParams, $location, Product) {

		var keywords;
  	$scope.search = function(keywords){
  		return $location.path('/products').search('keywords', keywords)
  	}

  	if($routeParams.keywords){
  		Product.query({ keywords: $routeParams.keywords }, function(results) {
			  return $scope.products = results;
			});
    } else {
      return $scope.products = [];
    }

	}])

	sharkweekControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$location', 'Product', 
		function($scope, $routeParams, $location, Product) {
 

		var keywords;
		$scope.search = function(keywords){
			return $location.path('/products').search('keywords', keywords)
		}

		if($routeParams.keywords){
			Product.query({ keywords: $routeParams.keywords }, function(results) {
			  return $scope.products = results;
			});
	  } else {
	    return $scope.products = Product.query();
	  }

	}]);

sharkweekControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.words = ["About", "Me"];
  }]);