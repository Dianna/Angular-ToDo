(function() {
  'use strict';

  angular
  .module('myApp.allTasks')
  .controller('AllTasksCtrl', AllTasksCtrl);

  AllTasksCtrl.$inject = ['$scope', 'task'];

  function AllTasksCtrl($scope, task) {
    var vm = this;

    $scope.$watch(function() {
      return task.cache;
    }, function (newCache, oldCache) {
      vm.allTasks = newCache;
    }, true);
  }
})();
