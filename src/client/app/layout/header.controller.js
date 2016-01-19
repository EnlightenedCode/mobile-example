(function () {
  'use strict';

  angular
    .module('recChanges.layout')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$state', 'routerHelper'];
  /* @ngInject */
  function HeaderController($state, routerHelper, $mdSidenav) {
    var vm = this;
    var states = routerHelper.getStates();
    vm.isCurrent = isCurrent;

    vm.toggleMe = function(){
      $mdSidenav('leftNav')
        .toggle()
        .then(function () {
          console.log('toggle leftNav is done');
        });
    };

    activate();

    function activate() {
      getNavRoutes();
    }

    function getNavRoutes() {
      vm.navRoutes = states.filter(function (r) {
        return r.settings && r.settings.nav;
      }).sort(function (r1, r2) {
        return r1.settings.nav - r2.settings.nav;
      });
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
