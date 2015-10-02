angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'To the moon and back!';
	$scope.isAuthenticated = function() {
		// check if logged in
	};

	$scope.linkInstagram = function() {
		// connect email account with instagram
	};
	/*MainCtrl.$inject = ['UserService', '$rootScope'];
	function MainCtrl(UserService, $rootScope) {
		var vm = this;

		vm.user = null;
		vm.allUsers = [];
		vm.deleteUser = deleteUser;

		initController();

		function initController() {
			loadCurrentUser();
			loadAllUsers();
		}

		function loadCurrentUser() {
			UserService.GetByUsername($rootScope.globals.currentUser.username)
				.then(function (user) {
					vm.user = user;
				});
		}

		function loadAllUsers() {
			UserService.GetAll()
				.then(function (users) {
					vm.allUsers = users;
				});
		}

		function deleteUser(id) {
			UserService.Delete(id)
				.then(function () {
					loadAllUsers();
				});
		}
	}*/

});

