(function() {
  'use strict';

  angular
  .module('myApp.active')
  .controller('ActiveCtrl', ActiveCtrl);

  ActiveCtrl.$inject = ['$scope', 'task'];

  function ActiveCtrl($scope, task) {
    var vm = this;

    vm.activeTasks = {};

    $scope.$watch(function() {
      return task.cache;
    }, function (newCache, oldCache) {
      for(var key in newCache) {
        if (newCache[key].active) {
          vm.activeTasks[key] = newCache[key];
        }
      }
    }, true);
  }
})();
