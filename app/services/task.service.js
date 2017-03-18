(function() {
  'use strict';

  angular
  .module('myApp.task', [])
  .factory('task', taskService);

  function taskService() {
    var Task = {
      cache: {},
      getTasks: getTasks
    };

    return Task;

    function getTasks() {
      Task.cache = {task1: {desc: 'task description', active: true}};
      return Task.cache;
    }
  }
})();
