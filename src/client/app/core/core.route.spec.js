/* jshint -W117, -W030 */
describe('core', function () {
  describe('state', function () {
    var views = {
      four0four: 'app/core/404.html'
    };

    beforeEach(function () {
      module('app.core', bard.fakeToastr);
      bard.inject('$location', '$rootScope', '$state', '$templateCache','$httpBackend');
      $templateCache.put(views.core, '');
    });

    it('should map /404 route to 404 View template', function () {
      expect($state.get('404').templateUrl).to.equal(views.four0four);
    });

    it('of dashboard should work with $state.go', function () {
      $httpBackend.whenGET(/\.html$/).respond('');
      $state.go('404');
      $rootScope.$apply();
      $httpBackend.flush();
      expect($state.is('404'));

    });

  });
});
