(function () {
  'use strict';

  var app = angular.module('recChangesClient', [
    'app.core',
    'commonServices',
    'recChanges.login',
    'recChanges.about',
    'recChanges.layout',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
  ]);

  app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      $rootScope.$broadcast('$routeChangeStart');
    });
  });

  app.run(function($transform) {
    window.$transform = $transform;
  });
})();
