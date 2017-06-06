'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

    let getFBUser = () => {
        DataFactory.getFBUser()
        .then((userInfo)=> {
            $scope.userName = userInfo.name;
            $scope.userImg = userInfo.img;
        });
    };

    let getFBBoardPins = () => {
        
        DataFactory.getFBBoardPins($routeParams.itemId)
        .then((pinsListObj) => {
            $scope.itemList = pinsListObj;
            for (let i in $scope.itemList) {
                $scope.itemList.id = i.pinId;
            }
        });
    };

    getFBUser();
    getFBBoardPins();

});