(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    // Routes
    'myApp.allTasks',
    'myApp.active',
    'myApp.complete',
    // Directives
    'myApp.activeLink',
    'myApp.version'
  ]);
})();
