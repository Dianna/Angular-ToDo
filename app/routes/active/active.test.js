'use strict';

describe('myApp.active module', function() {

  beforeEach(module('myApp.active'));

  describe('active controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var activeCtrl = $controller('ActiveCtrl');
      expect(activeCtrl).toBeDefined();
    }));

  });
});
