'use strict';

app.controller('ProfileCtrl', function($scope, $location, DataFactory, AuthFactory, $route) {

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


    let getFBBoards = () => {
        let user = AuthFactory.getUser();
        DataFactory.getFBBoards(user)
            .then((boardsListObj) => {
                console.log('boardslistobj', boardsListObj);
                let keyHolder = Object.keys(boardsListObj);
                let j = 0;
                for (let i in boardsListObj) {
                    boardsListObj[i].id = keyHolder[j];
                    DataFactory.getFBBoardPins(keyHolder[j])
                    .then((pinObj) => {
                        boardsListObj[i].pins = pinObj;
                    });
                    j++;
                }

                $scope.itemList = boardsListObj;
                console.log('myObber', $scope.itemList);
            });
    };

    let deleteBoard = () => {

        $scope.deleteBoard = function(boardId) {
            DataFactory.deleteBoard(boardId)
                .then(() => {
                    $route.reload();
                });
        };

    };

    getFBUser();
    getFBBoards();
    deleteBoard();
});
