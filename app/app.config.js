(function() {
  'use strict';

  angular.module('myApp')

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/active', {
      templateUrl: 'active/active.html',
      controller: 'ActiveCtrl'
    })
    .when('/complete', {
      templateUrl: 'complete/complete.html',
      controller: 'CompleteCtrl'
    })
    .otherwise({redirectTo: '/active'});
  }]);
})();
