'use strict';

app.controller('PinCtrl', function($scope, $routeParams, DataFactory, $location) {

    $scope.img = {
        pinned: '',

    };

    DataFactory.getPin($routeParams.id)
    .then((stuff) => {
        console.log('stuff', stuff);
        console.log('$routeParams', $routeParams);
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
