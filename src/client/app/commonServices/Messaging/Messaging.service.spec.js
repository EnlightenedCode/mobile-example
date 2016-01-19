/* jshint -W117, -W030 */
(function () {
  'use strict';

  describe('Service: Messaging', function () {
    // instantiate service
    var messaging;
    var viewhelper;


    // load the service's module
    beforeEach(function(){
        module('commonServices');
    });

    it('messaging Service is defined', function () {
      expect(!!messaging).to.be.defined;
    });

  });
})();