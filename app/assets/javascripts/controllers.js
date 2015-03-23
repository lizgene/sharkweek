'use strict';

var sharkweekControllers = angular.module('sharkweekControllers', [])


	sharkweekControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$location', 'Product', 
		function($scope, $routeParams, $location, Product) {
 
		var keywords;
		$scope.search = function(keywords){
			return $location.path('/').search('keywords', keywords)
		}

		if($routeParams.keywords){
			Product.query({ keywords: $routeParams.keywords }, function(results) {
			  return $scope.products = results;
			});
	  } else {
	    return $scope.products = Product.query();
	  }

	}]);


	sharkweekControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', '$location', 'Product', 
		function($scope, $routeParams, $location, Product) {
			return $scope.product = Product.show({ id: $routeParams.productId });
	}]);


sharkweekControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.words = ["About", "Me"];
  }]);