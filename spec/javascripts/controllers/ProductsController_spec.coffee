describe "ProductsController", ->
  scope        = null
  ctrl         = null
  location     = null
  routeParams  = null
  resource     = null

  # access injected service later
  httpBackend  = null

  setupController =(keywords, results)->
    inject(($location, $routeParams, $rootScope, $resource, $httpBackend, $controller)->
      scope       = $rootScope.$new()
      location    = $location
      resource    = $resource
      routeParams = $routeParams
      routeParams.keywords = keywords

      # capture the injected service
      httpBackend = $httpBackend 

      if results
        request = new RegExp("\/products.*keywords=#{keywords}")
        httpBackend.expectGET(request).respond(results)

      ctrl        = $controller('ProductsController',
                                $scope: scope
                                $location: location)
    )

  beforeEach(module("sharkWeek"))
  beforeEach(setupController())

  afterEach ->
    httpBackend.verifyNoOutstandingExpectation()
    httpBackend.verifyNoOutstandingRequest()

  describe 'controller initialization', ->
    describe 'when no keywords present', ->
      beforeEach(setupController())

      it 'defaults to no products', ->
        expect(scope.products).toEqualData([])

  describe 'with keywords', ->
    keywords = 'foo'
    products = [
      {
        id: 2
        name: 'Baked Potatoes'
      },
      {
        id: 4
        name: 'Potatoes Au Gratin'
      }
    ]
    beforeEach ->
      setupController(keywords,products)
      httpBackend.flush()

    it 'calls the back-end', ->
      expect(scope.products).toEqualData(products)

  describe 'search()', ->
    beforeEach ->
      setupController()

    it 'redirects to itself with a keyword param', ->
      keywords = 'foo'
      scope.search(keywords)
      expect(location.path()).toBe('/')
      expect(location.search()).toEqualData({keywords: keywords})