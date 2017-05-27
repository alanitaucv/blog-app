(function() {
  'use strict';

  var post = angular.module ('post',['ngRoute', 'ngAnimate', 'ngSanitize']);

  post.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
          .when('/post', {
              templateUrl : 'views/post.html',
              controller : 'postController'        
          })
          .otherwise({
               redirectTo: '/'
          });
    $locationProvider.html5Mode(true);
  }]);

  post.controller('postController', ['$scope', '$http', function($scope, $http){

  }])
})();
