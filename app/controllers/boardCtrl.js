'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

    let getBoardName = () => {
        DataFactory.getBoard($routeParams.id)
        .then((boardObj) => {
            console.log('check this out', boardObj);
            $scope.boardName = boardObj.data.name;

        });
    };

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
    getBoardName();

});