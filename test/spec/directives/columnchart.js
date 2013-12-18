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
    element = angular.element('<columnchart class="columnchart" id="chart_div_kvalitet" url="https://docs.google.com/spreadsheet/ccc?key=0AuRkF_9Dh0R6dHpOLTBjUG9jRThpY3BtZU1pSGg4a0E&range=a1:e9&gid=7" title="Kvalitet på www.telemark.no"></columnchart>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.length).toBe(1);
  }));
});
