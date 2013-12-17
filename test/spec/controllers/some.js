'use strict';

describe('Controller: SomeCtrl', function () {

  // load the controller's module
  beforeEach(module('appsTfkWebstatistikkApp'));

  var SomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SomeCtrl = $controller('SomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
