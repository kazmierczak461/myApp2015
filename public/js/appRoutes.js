angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.ejs',
			controller: 'MainController'
		})

		.when('/calendar', {
			templateUrl: 'views/calendar.ejs',
			controller: 'CalController'
		})

		.when('/tasks', {
			templateUrl: 'views/tasks.ejs',
			controller: 'TasksController'
		})
		.when('/schedule', {
			templateUrl: 'views/schedule.ejs',
			controller: 'ScheduleController'
		})
		.when('/exams', {
			templateUrl: 'views/exams.ejs',
			controller: 'ExamsController'
		})
		.when('/register', {
			controller: 'RegisterController',
			templateUrl: 'views/register.ejs'
		})
		.when('/login', {
			templateUrl: 'views/login.ejs',
			controller: 'LoginCtrl'
		})
		.otherwise({ redirectTo: '/login' });



	$locationProvider.html5Mode(true);

}]);