angular.module('RoomCtrl', []).controller('RoomController', function($scope,$http,RoomService) {

	/*$scope.showEditor = false;
	$scope.getRand = function() {
		return Math.floor(Math.random()*100000)
	};*/

	$scope.getRoom = function(id){
		console.log(id);
		RoomService.postRoom(id);
	};

	$scope.userId = '564879956610e9d999fd804c';

	var refresh = function() {
		$http.get('/rooms').success(function(response) {
			console.log("I got the data I requested");
			$scope.roomslist = response;
			$scope.room = "";
			console.log($scope.roomslist);
		});
	};



	$scope.addRoom = function() {
		console.log($scope.room);
		$http.post('/rooms', $scope.room).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.removeRoom = function(id) {
		console.log(id);
		$http.delete('/rooms/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.editRoom = function(id) {
		console.log(id);
		$http.get('/rooms/' + id).success(function(response) {
			$scope.room = response;
		});
	};

	$scope.updateRoom = function() {
		console.log($scope.room._id);
		$http.put('/rooms/' + $scope.room._id, $scope.room).success(function(response) {
			refresh();
		})
	};

	$scope.deselect = function() {
		$scope.room = "";
	};
	refresh();

});