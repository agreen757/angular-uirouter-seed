'use strict'

angular.module('myapp').config(function($stateProvider) {
    return $stateProvider.state('main', {
      url: '/main',
      templateUrl: '/app/main/main.html',
      controller: function($scope,$http){
        console.log('something here')
      }
      //resolve: {controller:'/app/main/main.controller.js'}
    });
  });