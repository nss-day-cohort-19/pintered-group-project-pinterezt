'use strict';

app.controller('ProfileCtrl', function($scope, $location, FBFactory, AuthFactory) {

    let getFBUser = () => {
        FBFactory.getFBUser()
        .then((userInfo)=> {
            $scope.userName = userInfo.name;
            $scope.uid = userInfo.uid;
            $scope.userImg = userInfo.img;
        });
    };

    let getFBBoards = () => {
        let user = AuthFactory.getUser();
        FBFactory.getFBBoards(user)
        .then((boardsListObj) => {
            $scope.itemList = boardsListObj;
            for (let i in $scope.itemList) {
                $scope.itemList.id = i.boardId;
            }
        });
    };

});
