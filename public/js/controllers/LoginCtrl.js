angular.module('LoginCtrl', []).controller('LoginController', function($scope,$rootScope, AuthenticationService, $location,AUTH_EVENTS/*, FlashService*/) {


   //AuthenticationService.isAuthenticated();


   /*$scope.initController = function () {
      // reset login status
      AuthenticationService.ClearCredentials();
   };

   $scope.login = function () {
      $scope.dataLoading = true;
      AuthenticationService.Login($scope.username, $scope.password, function (response) {
         if (response.success) {
            AuthenticationService.SetCredentials($scope.username, $scope.password);
            $location.path('/');
         } else {
            FlashService.Error(response.message);
            $scope.dataLoading = false;
         }
      });
   };*/



});

