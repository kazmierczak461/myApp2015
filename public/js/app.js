var sampleApp = angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'RoomCtrl', 'SubjectCtrl',
    'ScheduleCtrl', 'ExamsCtrl', 'RegisterCtrl','TasksService','UserService','FlashService','RoomService','angularFileUpload','AuthenticationService','BaseService','ngCookies','LoginCtrl'/*,'LoginCtrl','AuthenticationService', 'TasksService', 'CalService'*/])

sampleApp.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

sampleApp.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'user',
    guest: 'guest'
});

;