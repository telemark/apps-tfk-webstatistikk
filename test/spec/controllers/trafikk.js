'use strict';

describe('Controller: TrafikkCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkWebstatistikkApp'));

  var TrafikkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrafikkCtrl = $controller('TrafikkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
