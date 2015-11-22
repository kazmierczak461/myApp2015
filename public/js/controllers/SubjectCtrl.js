angular.module('SubjectCtrl', []).controller('SubjectController', function($scope,$http,FileUploader, RoomService,$routeParams) {



	$scope.actualDate = new Date();

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	$scope.getSubject= function(id){
		console.log('Id from subject Ctrl' + id);
		RoomService.postSubject(id);
	};

	var refresh = function() {
		$http.get('/subjects').success(function(response) {
			console.log("I got the data I requested");
			$scope.subjectlist = response;
			$scope.subject = "";
			console.log($scope.subjectlist);
		});
		$http.get('/eventsList').success(function(response) {
			console.log("I got the data I requested");
			$scope.eventlist = response;
			$scope.event = "";
			console.log($scope.eventlist);
		});
	};

	refresh();



	$scope.getRand = function() {
		return Math.floor(Math.random()*100000)
	};


	$scope.addSubject = function() {
		console.log($scope.subject);
		$http.post('/subjects', $scope.subject).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.removeSubject = function(id) {
		console.log(id);
		$http.delete('/subjects/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.editSubject = function(id,subject) {
		console.log('Before:' + subject);
		console.log(id);
		$http.get('/subjects/' + id).success(function(response) {
			$scope.subject = response;
		});
	};

	$scope.updateSubject = function(subject) {
		console.log(subject);
		$http.put('/subjects/' + subject._id, subject).success(function(response) {
			refresh();
		})
	};

	$scope.deselect = function() {
		$scope.subject = "";
	};

	$scope.roomId = RoomService.getRoom();
	console.log('id: ' + $scope.roomId);


});

