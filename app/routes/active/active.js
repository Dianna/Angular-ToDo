(function() {
  'use strict';
  
  angular.module('myApp.active', ['ngRoute'])
  
  .config(function($routeProvider) {
    $routeProvider.when('/active', {
      templateUrl: 'routes/active/active.html',
      controller: 'ActiveCtrl',
      controllerAs: 'vm'
    });
  });
})();
