'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

    let getFBUser = () => {
        let user = AuthFactory.getUser();
        DataFactory.getFBUser(user)
        .then((userInfo)=> {
            for (let i in userInfo) {
                $scope.userName = userInfo[i].name;
                $scope.uid = userInfo[i].uid;
                $scope.userImg = userInfo[i].url;
            }
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