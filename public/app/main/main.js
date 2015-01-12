'use strict'

angular.module('myapp').config(function($stateProvider) {
    return $stateProvider.state('main', {
      url: '/',
      templateUrl: '/app/main/main.html',
      controller: function($scope,$http){
        
        $scope.netsubs = "3.9 Million+";
        $scope.netviews = "3.5 Billion+";
        $scope.monviews = "300 Million+";
        $scope.chanparts = "1900+";
      }
      //resolve: {controller:'/app/main/main.controller.js'}
    });
  });