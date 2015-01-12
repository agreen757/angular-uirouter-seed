angular.module('myapp', ['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    //return; //$httpProvider.interceptors.push('authInterceptor');
  })