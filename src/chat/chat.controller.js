(function (angular) {
    angular.module('FireChat')
        .controller('Chat', Chat);

    Chat.$inject = ['$scope','$firebaseObject'];

    function Chat($scope, $firebaseObject) {
        var ref = firebase.database().ref();

        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, 'data');
    }
})(angular);