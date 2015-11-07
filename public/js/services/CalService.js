angular.module('CalService', []).factory('CalService', ['$http', function($http) {

    $http.get('/rooms').success(function(response) {
        console.log("I got the data I requested");
        $scope.roomslist = response;
        $scope.room = "";
        console.log($scope.roomslist);
    });

}]);