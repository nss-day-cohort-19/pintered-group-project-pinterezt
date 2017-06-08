"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory, ImageFactory, $window) {
    // console.log('routeParams', $routeParams.id);
    DataFactory.getAllPins()
        .then((allPins) => {
            // console.log('latest', allPins);
            for (var i = 0; i < allPins.length; i++) {
                if (allPins[i].id == $routeParams.id) {
                    $scope.currentImage = allPins[i].url;
                    $scope.imageName = allPins[i].name;
                }
            }
            // console.log('currentImage', $scope.currentImage);
        })
        .then(
            AuthFactory.isAuthenticated()
            .then(function(result) {
                console.log(result);
                $scope.isUser = result;
                return result;
            })
        );
    $scope.saveLargeView = function() {
        DataFactory.saveLargeImage($routeParams.id)
            .then((response) => {
                $location.path("");
            });
    };
    $('.back-btn').on('click', function() {
        $window.history.back();
    });
});
