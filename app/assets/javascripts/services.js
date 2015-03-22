var sharkweekServices = angular.module('sharkweekServices', ['ngResource']);


sharkweekServices.factory('Product', function ($resource) {
  return $resource('/products/:id');
});
