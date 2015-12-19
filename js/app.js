var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider) {

  $stateProvider
    .state('test-route',{
      url: '/',
      templateUrl:"templates/test.html"
    });

});
