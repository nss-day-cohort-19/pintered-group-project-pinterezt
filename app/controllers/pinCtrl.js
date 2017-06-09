'use strict';

app.controller('PinCtrl', function($scope, $routeParams, DataFactory, $location, AuthFactory, $route) {

    let getFBUser = () => {
        let user = AuthFactory.getUser();
        DataFactory.getFBUser(user)
            .then((userInfo) => {
                console.log(userInfo);
                for (let i in userInfo) {
                    $scope.userName = userInfo[i].name;
                    $scope.uid = userInfo[i].uid;
                    $scope.userImg = userInfo[i].url;
                }
            });
    };

    let getPin = () => {
        let user = AuthFactory.getUser();
        DataFactory.getPin(user)
            .then((stuff) => {
                $scope.itemList = stuff;
                console.log('stuff', stuff);
            });
    };

    let deletePin = (pinId) => {

        $scope.deletePin = function(pinId) {
            console.log('pinId PinCtrl', pinId);
            DataFactory.deletePin(pinId)
                .then(() => {
                    $route.reload();
                });
        };
    };

    $scope.getBoardData = () => {
        DataFactory.getFBBoards(AuthFactory.getUser())
            .then((boardsObj) => {
                for (let i in boardsObj) {
                    boardsObj[i].id = i;
                }
                $scope.boards = boardsObj;
            });
    };

    $scope.getBoardData();
    getFBUser();
    getPin();
    deletePin();
});
