angular.module('appRoutes', [])

	.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

		$locationProvider.html5Mode(true);
		$routeProvider

			// home page
			.when('/', {
				templateUrl: 'views/home.ejs',
				controller: 'MainController'
			})

			.when('/rooms', {
				templateUrl: 'views/rooms.ejs',
				controller: 'RoomController'
			})

			.when('/subjects/:id', {
				templateUrl: 'views/subjects.ejs',
				controller: 'SubjectController'
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
				controller: 'LoginController',
				templateUrl: 'views/login.ejs'
			})
			/*.otherwise({ redirectTo: '/login' });*/


	}])

	/*.run(['$rootScope', '$location', '$cookieStore', '$http',
		function ($rootScope, $location, $cookieStore, $http) {
			// keep user logged in after page refresh
			$rootScope.globals = $cookieStore.get('globals') || {};
			if ($rootScope.globals.currentUser) {
				$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
			}

			$rootScope.$on('$locationChangeStart', function (event, next, current) {
				// redirect to login page if not logged in and trying to access a restricted page
				var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
				var loggedIn = $rootScope.globals.currentUser;
				if (restrictedPage && !loggedIn) {
					$location.path('/login');
				}
			});



		}]);*/