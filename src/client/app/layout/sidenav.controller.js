(function () {
  'use strict';

  angular
    .module('recChanges.layout')
    .controller('LeftNavController', LeftNavController);

  LeftNavController.$inject = ['$state', 'logger', 'routerHelper'];
  /* @ngInject */
  function LeftNavController($state, logger, routerHelper) {
    var vm = this;

    vm.isCurrent = isCurrent;

    activate();

    function activate() {
    }


    function isCurrent(route) {
      if (!route.title || !$state.current || !$state.current.title) {
        return '';
      }
      var menuName = route.title;
      return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }
  }
})();
