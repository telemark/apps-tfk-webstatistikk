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
      .otherwise({
        redirectTo: '/'
      });
  });
