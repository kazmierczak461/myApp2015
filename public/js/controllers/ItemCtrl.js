angular.module('ItemCtrl', []).controller('ItemController', function($scope,$http, RoomService,FileUploader, $routeParams) {

    $scope.form ={
        settings: {
            showEditor: false
        }
    };
    $scope.subjectId = RoomService.getSubject();
    $scope.userId = '564879956610e9d999fd804c';

    var getSubject = function(id) {
        console.log(id);
        $http.get('/subjects/' + id).success(function(response) {
            $scope.subject = response;
        });
    };

    var refresh = function(){
        $http.get('/eventsList').success(function(response) {
            console.log("I got the data I requested");
            $scope.eventlist = response;
            $scope.event = "";
        });
        $http.get('/posts').success(function(response) {
            console.log("I got the data I requested");
            $scope.postList = response;
            console.log($scope.postList);
            $scope.post = "";
        });
    };

    $scope.addEvent = function() {
        console.log($scope.event);
        $http.post('/eventsList', $scope.event).success(function(response) {
            console.log(response);
            refresh();
        });
    };

     $scope.removeEvent = function(id) {
         console.log(id);
         $http.delete('/eventsList/' + id).success(function(response) {
         refresh();
         });
     };

    $scope.editEvent = function(id) {
        console.log(id);
        $http.get('/eventsList/' + id).success(function(response) {
            $scope.event = response;
            console.log($scope.event);
        });
    };

    $scope.update = function(event) {
        console.log(event._id);
        $http.put('/eventsList/' + event._id, event).success(function(response) {
            refresh();
        })
    };

    $scope.deselect = function() {
        $scope.event = "";
    };

    //posts

    $scope.addPost = function() {
        console.log($scope.post.post);
        $scope.post.user = $scope.userId;
        $scope.post.subject = $scope.subjectId;
        $scope.post.date = new Date();
        $http.post('/posts', $scope.post).success(function(response) {
            console.log(response);
            refresh();
        });
    };
    $scope.editPost = function(id) {
        console.log(id);
        $http.get('/posts/' + id).success(function(response) {
            $scope.post = response;
            console.log($scope.post);
        });
    };

    $scope.updatePost = function(post) {
        console.log(post._id);
        $http.put('/posts/' + post._id, post).success(function(response) {
            refresh();
        })
    };

    getSubject($scope.subjectId);
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

    $scope.isYourPost = function(user) {
        if (user === $scope.userId){
            return true;
        }
        else return false;
    };

});

