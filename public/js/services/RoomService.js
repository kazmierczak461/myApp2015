angular.module('RoomService', []).factory('RoomService', ['$http', function($http) {

    var service = {};
    var getRoomId;

    service.getRoom = getRoom;
    service.postRoom = postRoom;

    return service;

    function postRoom(roomId) {
        getRoomId=roomId;
        return roomId;
    }

    function getRoom() {
        return getRoomId;
    }


}]);
