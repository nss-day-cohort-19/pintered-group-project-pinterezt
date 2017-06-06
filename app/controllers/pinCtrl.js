'use strict';

app.controller('PinCtrl', function($scope, $routeParams, DataFactory, $location) {

    $scope.img = {
        pinned: '',

    };

    DataFactory.getPin($routeParams.pinId)
    .then((stuff) => {
        $scope.itemList = stuff;
        $scope.itemList.id = $routeParams.id;
    });

    $scope.submitPin = function() {

        DataFactory.changePin($routeParams.id, $scope.itemList)
            .then((data) => {
                $location.path("/");
            });

    };

});
