angular.module('RoomService', []).factory('RoomService', ['$http', function($http) {

    var service = {};
    var getRoomId;
    var getSubjectId;

    service.getRoom = getRoom;
    service.postRoom = postRoom;
    service.getSubject = getSubject;
    service.postSubject = postSubject;

    return service;

    function postRoom(roomId) {
        getRoomId = roomId;
        return roomId;
    }

    function getRoom() {
        return getRoomId;
    }

    function postSubject(subjectId) {
        getSubjectId = subjectId;
        return subjectId;
    }

    function getSubject() {
        return getSubjectId;
    }



}]);
