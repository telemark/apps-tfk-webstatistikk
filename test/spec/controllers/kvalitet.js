'use strict';

describe('Controller: KvalitetCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkWebstatistikkApp'));

  var KvalitetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KvalitetCtrl = $controller('KvalitetCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
