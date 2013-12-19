'use strict';

angular.module('appsTfkWebstatistikkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trafikk', {
        templateUrl: 'views/trafikk.html',
        controller: 'TrafikkCtrl'
      })
      .when('/some', {
        templateUrl: 'views/some.html',
        controller: 'SomeCtrl'
      })
      .when('/medier', {
        templateUrl: 'views/medier.html',
        controller: 'MedierCtrl'
      })
      .when('/kvalitet', {
        templateUrl: 'views/kvalitet.html',
        controller: 'KvalitetCtrl'
      })
      .when('/personvern', {
        templateUrl: 'views/personvern.html',
        controller: 'PersonvernCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

google.load('visualization', '1', {
  packages: ['corechart']
});

google.setOnLoadCallback(function () {
  angular.bootstrap(document.body, ['appsTfkWebstatistikkApp']);
});