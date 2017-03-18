(function() {
  'use strict';
  
  angular.module('myApp.complete', ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider.when('/complete', {
      templateUrl: 'routes/complete/complete.html',
      controller: 'CompleteCtrl',
      controllerAs: 'vm'
    });
  });
})();
