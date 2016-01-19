(function() {
  'use strict';

  angular
    .module('recChanges.about')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'about',
        config: {
          url: '/About',
          templateUrl: 'app/about/about.html',
          controller: 'AboutController',
          controllerAs: 'vm',
          title: 'About',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Login'
          }
        }
      }
    ];
  }
})();
