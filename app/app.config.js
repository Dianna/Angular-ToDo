(function() {
  'use strict';

  angular.module('myApp')

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/active', {
      templateUrl: 'routes/active/active.html',
      controller: 'ActiveCtrl'
    })
    .when('/complete', {
      templateUrl: 'routes/complete/complete.html',
      controller: 'CompleteCtrl'
    })
    .otherwise({redirectTo: '/active'});
  }]);
})();
