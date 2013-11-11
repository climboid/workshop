'use strict';

angular.module('myApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutUs', {
        templateUrl: 'views/aboutUs.html',
        controller: 'AboutUsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
