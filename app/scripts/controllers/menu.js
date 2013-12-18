'use strict';

angular.module('appsTfkWebstatistikkApp')
  .controller('MenuCtrl', function ($scope, $location) {

    $scope.thispath = '';

    $scope.$watch(function () {
        return $location.path();
      }, function () {
        $scope.thispath = $location.path();
      }, true
    );

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
