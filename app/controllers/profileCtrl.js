'use strict';

app.controller('ProfileCtrl', function($scope, $location, DataFactory, AuthFactory) {

    let getFBUser = () => {
        DataFactory.getFBUser()
        .then((userInfo)=> {
            $scope.userName = userInfo.name;
            $scope.uid = userInfo.uid;
            $scope.userImg = userInfo.img;
        });
    };

    let getFBBoards = () => {
        let user = AuthFactory.getUser();
        DataFactory.getFBBoards(user)
        .then((boardsListObj) => {
            $scope.itemList = boardsListObj;
            for (let i in $scope.itemList) {
                $scope.itemList.id = i.boardId;
            }
        });
    };
    getFBUser();
    getFBBoards();

});
