'use strict';

app.controller('profileCtrl', function($scope, $location, FBFactory, AuthFactory) {

    let getFBUser = () => {
        FBFactory.getFBUser()
        .then((userInfo)=> {
            $scope.userName = userInfo.name;
            $scope.userImg = userInfo.img;
        });
    };

    let getFBBoards = () => {
        let user = AuthFactory.getUser();
        FBFactory.getFBBoards(user)
        .then((boardsListObj) => {
            $scope.boardsList = boardsListObj;
        });
    };


});