'use strict';

var sharkweekControllers = angular.module('sharkweekControllers', [])

sharkweekControllers.controller('HomeCtrl', ['$scope', '$routeParams', '$location', '$resource',
  function($scope, $routeParams, $location, $resource) {

  	var products = [
		  {
		    "id": "1",
		    "name": 'Baked Potato w/ Cheese'
		  },
		  {
		    "id": "2",
		    "name": 'Garlic Mashed Potatoes',
		  },
		  {
		    "id": "3",
		    "name": 'Potatoes Au Gratin',
		  },
		  {
		    "id": "4",
		    "name": 'Baked Brussel Sprouts',
		  },
		]


  	var keywords;
  	$scope.search = function(keywords){
  		return $location.path('/').search('keywords', keywords)
  	}
	  
  	if($routeParams.keywords){
  		keywords = $routeParams.keywords.toLowerCase();
  		$scope.products = products.filter(function(product) {
        return product.name.toLowerCase().indexOf(keywords) !== -1;
      });
    } else {
      return $scope.products = [];
    }
  }]);

sharkweekControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.words = ["About", "Me"];
  }]);