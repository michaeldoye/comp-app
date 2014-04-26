angular.module('compare', ['ionic','google-maps'])

.controller('CompareCtrl', function($scope) {

})

.controller('MapController', function($scope) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 15
        };
        $scope.marker ={
            coords:{
                latitude: 45,
                longitude: -73
            }
        };
        var onSuccess = function(position) {
            $scope.map.center = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
          $scope.$apply();
        };
        var markerCoords = function(position) {
            $scope.marker.coords ={
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            //$scope.$apply();
        };

        function onError(error) {
            console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }
        navigator.geolocation.getCurrentPosition(onSuccess, markerCoords, onError);
    });


function ContentController($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    }
}