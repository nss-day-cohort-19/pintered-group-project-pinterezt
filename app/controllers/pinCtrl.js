'use strict';

app.controller('PinCtrl', function($scope, $routeParams, FBFactory, $location) {

    $scope.img = {
        pinned: '',

    };

    FBFactory.getImg($routeParams.taskId)
    .then((stuff) => {
        $scope.itemList = stuff;
        $scope.itemList.id = $routeParams.id;
    });

    $scope.submitPin = function() {

        FBFactory.pinCurrentImg($routeParams.id, $scope.itemList)
            .then((data) => {
                $location.path("/");
            });

    };

});
