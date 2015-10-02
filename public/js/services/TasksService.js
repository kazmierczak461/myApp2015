angular.module('TasksService', []).factory('Tasks', ['$http', function($http) {

	return {
		usercollections: function () {
			return $http.get('/usercollection');
		}
	}

}]);
