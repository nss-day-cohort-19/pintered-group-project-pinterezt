'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {


    let getFBBoardPins = () => {
        console.log('route id', $routeParams.id);
        DataFactory.getFBBoardPins($routeParams.id)
        .then((pinsListObj) => {
            $scope.itemList = pinsListObj;
            // for (let i in $scope.itemList) {
            //     $scope.itemList.id = i.pinId;
            // }
        });
    };

    getFBBoardPins();

});