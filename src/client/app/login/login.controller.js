/* globals io */

(function () {
    'use strict';

    angular
        .module('recChanges.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['logger', 'ViewHelper', '$rootScope'];

    /* @ngInject */
    function LoginController(logger, ViewHelper, $rootScope) {
        var vm = this;
        //ViewHelper.loading.show();
        $rootScope.systemMessage = 'loading...';
        vm.title = 'LoginController';
        vm.uiviewAttr = document.getElementsByTagName('html')[0].getAttribute('data-useragent');
        vm.uiviewAttrPlat = document.getElementsByTagName('html')[0].getAttribute('data-platform');
        //if (!io.socket.alreadyListeningToOrders) {
        //    io.socket.alreadyListeningToOrders = true;
        //    io.socket.on('user_logged_in', function(event){
        //        console.log('blasted');
        //    });
        //    io.socket.on('user', function(event){
        //        console.log(event);
        //    });
        //    io.socket.on('reconnecting', function(){
        //        if(!io.socket.reconnectionsApp){
        //            io.socket.reconnectionsApp = 0;
        //        }
        //        io.socket.reconnectionsApp++;
        //
        //        if(io.socket.reconnectionsApp > 9){
        //            console.log('Timed out...stop reconnecting');
        //            io.socket.disconnect();
        //        }
        //
        //    });
        //}

        vm.hitAuth = function(){
            //io.socket.get('/auth/login', function(resData, jwres){
            //    console.log(resData);
            //    console.log(jwres);
            //});
        };

        //activate();


        ////////////////

        function activate() {
            logger.info('Activated Dashboard View');
            //io.socket.get('/user', function(resData, jwres){
            //    console.log(resData);
            //    console.log(jwres);
            //});
            //io.socket.get('/auth/login', function(resData, jwres){
            //    console.log(resData);
            //    console.log(jwres);
            //});
        }
    }

})();

