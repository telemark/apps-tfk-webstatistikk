'use strict';

describe('Directive: columnchart', function () {

  // load the directive's module
  beforeEach(module('appsTfkWebstatistikkApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<columnchart></columnchart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the columnchart directive');
  }));
});
