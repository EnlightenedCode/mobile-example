(function () {
  'use strict';

  angular
    .module('recChanges.about')
    .controller('AboutController', LoginController);

  LoginController.$inject = ['logger'];

  /* @ngInject */
  function LoginController(logger) {
    var vm = this;
    vm.title = 'AboutController';
    activate();

    ////////////////

    function activate() {
      logger.info('Activated About View');
    }
  }

})();

