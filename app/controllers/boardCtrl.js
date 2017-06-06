'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, FBFactory, AuthFactory) {

    let getFBUser = () => {
        FBFactory.getFBUser()
        .then((userInfo)=> {
            $scope.userName = userInfo.name;
            $scope.userImg = userInfo.img;
        });
    };

    let getFBBoardPins = () => {
        
        FBFactory.getFBBoardPins($routeParams.itemId)
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