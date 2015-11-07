angular.module('LoginCtrl', []).controller('LoginController', '$rootScope', '$location', 'AuthenticationService', function($scope, $rootScope, $location, AuthenticationService) {

    AuthenticationService.ClearCredentials();

    $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
            if(response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                console.log("Login success");
                $location.path('/');
            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
                console.log("Bad request");
            }
        });
    };

});



