(function() {
  'use strict';

  angular
  .module('myApp.complete')
  .controller('CompleteCtrl', CompleteCtrl);

  CompleteCtrl.$inject = ['$scope', 'task'];

  function CompleteCtrl($scope, task) {
    var vm = this;

    vm.completeTasks = {};

    $scope.$watch(function() {
      return task.cache;
    }, function (newCache, oldCache) {
      for(var key in newCache) {
        if (!newCache[key].active) {
          vm.completeTasks[key] = newCache[key];
        }
      }
    }, true);
  }
})();
