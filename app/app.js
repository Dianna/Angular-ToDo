(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.active',
    'myApp.complete',
    'myApp.version',
    'ui.bootstrap'
  ]);
})();
