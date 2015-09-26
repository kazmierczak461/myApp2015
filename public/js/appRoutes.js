angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/calendar', {
			templateUrl: 'views/calendar.html',
			controller: 'CalController'
		})

		.when('/tasks', {
			templateUrl: 'views/tasks.html',
			controller: 'TasksController'
		})
		.when('/schedule', {
			templateUrl: 'views/schedule.html',
			controller: 'ScheduleController'
		})
		.when('/exams', {
			templateUrl: 'views/exams.html',
			controller: 'ExamsController'
		});

	$locationProvider.html5Mode(true);

}]);