(function() {
  'use strict';
  
  angular.module('myApp.allTasks', ['ngRoute'])
  
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'routes/allTasks/allTasks.html',
      controller: 'AllTasksCtrl',
      controllerAs: 'vm'
    });
  });
})();
