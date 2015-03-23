var sharkweekServices = angular.module('sharkweekServices', ['ngResource']);

sharkweekServices.factory("Product", function($resource) {
  return $resource("/api/products/:id", { id: "@id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
});
