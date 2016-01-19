/* jshint -W117, -W030 */
describe('layout', function() {
    describe('header', function() {
        var controller;
        var views = {
            dashboard: 'app/dashboard/dashboard.html',
            customers: 'app/customers/customers.html'
        };

        beforeEach(function() {
            module('recChanges.layout', bard.fakeToastr);
            bard.inject('$controller', '$httpBackend', '$location',
                          '$rootScope', '$state', 'routerHelper');
        });

        beforeEach(function() {
            //routerHelper.configureStates(mockData.getMockStates(), '/');
            controller = $controller('HeaderController');
            $rootScope.$apply();
        });

        bard.verifyNoOutstandingHttpRequests();

        //it('should have isCurrent() for / to return `current`', function() {
        //    $location.path('/');
        //    expect(controller.isCurrent($state.current)).to.equal('current');
        //});

    });
});
