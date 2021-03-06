/* jshint -W117, -W030 */
describe('login routes', function () {
  describe('state', function () {
    var view = 'app/login/login.html';

    beforeEach(function() {
      module('recChanges.login', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should map state login to url /login ', function() {
      expect($state.href('login', {})).to.equal('/');
    });

    it('should map /login route to login View template', function () {
      expect($state.get('login').templateUrl).to.equal(view);
    });

    it('of login should work with $state.go', function () {
      $state.go('login');
      $rootScope.$apply();
      expect($state.is('login'));
    });
  });
});

