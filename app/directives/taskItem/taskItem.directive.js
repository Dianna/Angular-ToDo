(function() {
  'use strict';

  angular.module('myApp')
  
  // Reusable task item module
  .directive('maTaskItem', taskItem);

  function taskItem() {
    return {
      restrict: 'E',
      templateUrl: 'directives/taskItem/taskItem.html',
      scope: {
        key: '=',
        todo: '='
      },
    }
  }

})();
