(function() {
  'use strict';

  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'post']);
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
          .when('/', {
            templateUrl : 'views/view-home.html',
            controller : 'mainController'
          })
          .when('/post', {
            templateUrl : 'views/view-post.html',
            controller : 'mainController'
          })
          .otherwise({
               redirectTo: '/'
          });
     $locationProvider.html5Mode(true);
  }]);

  app.run(function(){

  });

  app.controller('mainController', ['$scope', function($scope){

  }]);

})();
