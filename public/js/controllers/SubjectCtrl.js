angular.module('SubjectCtrl', []).controller('SubjectController', function($scope,$http,FileUploader, RoomService,$routeParams) {




	var refresh = function() {
		$http.get('/subjects').success(function(response) {
			console.log("I got the data I requested");
			$scope.subjectlist = response;
			$scope.subject = "";
			console.log($scope.subjectlist);
		});
	};

	refresh();

	$scope.id = $routeParams.id;
	$scope.uploader = new FileUploader();
	$scope.showEditor = false;

	var uploader = $scope.uploader = new FileUploader({
		url: 'file:///Users/kazmierczak/Beng/'

	});

	$scope.showStatus =  function(){
		console.log($scope.uploader);
	};

	// FILTERS

	uploader.filters.push({
		name: 'customFilter',
		fn: function() {
			return this.queue.length < 10;

		}

	});

	$scope.getRand = function() {
		return Math.floor(Math.random()*100000)
	};

	var refresh = function() {
		$http.get('/rooms').success(function(response) {
			console.log("I got the data I requested");
			$scope.roomslist = response;
			$scope.room = "";
			console.log($scope.roomslist);
		});
	};

	refresh();

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

	$scope.roomTest = RoomService.getRoom();
	console.log('id: ' + $scope.id);


});

