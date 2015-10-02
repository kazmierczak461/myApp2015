﻿/*angular.module('RegisterCtrl', []).controller('RegisterController', function($scope$http/*,UserService, $location, $rootScope, FlashService*/

    angular.module('RegisterCtrl', []).controller('RegisterController', function($scope,UserService) {

    $scope.tagline = 'The square root of life is pi!';


        var vm = this;

       // vm.register = register;

        $scope.register = function() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

    });
