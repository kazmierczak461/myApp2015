angular.module('ScheduleCtrl', []).controller('ScheduleController', function($scope, $http) {


    /*$scope.tagline = 'The square root of life is pi!';
    $scope.form = {
        settings:{
            editSub: false,
            editForm: false,
            hstep: [1, 2, 3],
            mstep: [5, 10, 15, 25, 30],
            showMeridian: false,
            saveDisabled: false
        },
        data: {
            //scheduleList: []
        }
    };


            $scope.hoursStr2Date = function(hour){
                var parts = hour.split(':');
                var hours = parseInt(parts[0]);
                var minutes = parseInt(parts[1]);
                return new Date(0,0,1,hours,minutes);
            };

            $scope.hoursDate2Str = function(date){
                var date = new Date(date);
                var hours = date.getHours();
                if(hours < 10) hours = '0' + hours;
                var minutes = date.getMinutes();
                if(minutes < 10) minutes = '0' + minutes;
                return '' + hours + ':' + minutes;
            };

             /*   get: function() {
                    DataFactory.get('modules/'+$stateParams.moduleId+'/hours').then(function(data) {
                        console.log(data);
                        for(var i=0; i<data.length; i++){
                            data[i].open1 = $scope.hoursStr2Date(data[i].open1);
                            data[i].open2 = $scope.hoursStr2Date(data[i].open2);
                            data[i].close1 = $scope.hoursStr2Date(data[i].close1);
                            data[i].close2 = $scope.hoursStr2Date(data[i].close2);
                        }
                        $scope.form.data.days = data;
                    });
                },
                save: function() {
                    var data = angular.copy($scope.form.data.days);
                    for(var i=0; i<data.length; i++){
                        data[i].open1 = $scope.hoursDate2Str(data[i].open1);
                        data[i].open2 = $scope.hoursDate2Str(data[i].open2);
                        data[i].close1 = $scope.hoursDate2Str(data[i].close1);
                        data[i].close2 = $scope.hoursDate2Str(data[i].close2);
                    }
                    console.log(data);
                    $scope.form.settings.saveDisabled = true;
                    DataFactory.update('modules/'+$stateParams.moduleId+'/hours',data).then(function(data) {
                        console.log(data);
                        $scope.app.staticPublished = false;
                        $scope.form.settings.saveDisabled = false;
                    });
                }
            };*/


   /* var refresh = function() {
        $http.get('/schedules').success(function(response) {
            console.log("I got the data I requested");
            $scope.form.data.scheduleList = response;
            $scope.schedule = "";
            console.log(response);
        });
    };

    refresh();

    $scope.addSubject = function() {
        console.log($scope.schedule);
        $http.post('/schedules', $scope.schedule).success(function(response) {
            console.log(response);
            refresh();
        });
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/schedules/' + id).success(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        console.log(id);
        $http.get('/schedules/' + id).success(function(response) {
            $scope.schedule = response;
        });
    };

    $scope.updateSubject = function() {
        console.log($scope.schedule._id);
        $http.put('/schedules/' + $scope.schedule._id, $scope.schedule).success(function(response) {
            refresh();
        })
    };

    $scope.deselectSubject = function() {
        $scope.schedule = "";
    }*/



});