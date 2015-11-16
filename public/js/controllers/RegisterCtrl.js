
angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, $http,UserService /* UserService, $location, $rootScope/*, FlashService*/) {

    $scope.register = function(){
        $scope.dataLoading = true;
        UserService.Create($scope.user)
            .then(function (response) {
                if (response.success) {
                   // FlashService.Success('Registration successful', true);
                    $location.path('/login');
                } else {
                   // FlashService.Error(response.message);
                    $scope.dataLoading = false;
                }
            });
    };

   /* $scope.register = function() {
        $http.post('/userList', $scope.user).success(function(response) {
            console.log(response);

        });
    };*/
    /*$scope.register = function(){
        UserService.Create($scope.user);
    };*/




});
