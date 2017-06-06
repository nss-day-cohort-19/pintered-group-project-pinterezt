'use strict';

app.controller('ProfileCtrl', function($scope, $location, DataFactory) {

    let getFBUser = () => {
        DataFactory.getFBUser("google:matthewaugsburger")
        .then((userInfo)=> {
            console.log(userInfo);
            // for (let i in userInfo) {
            //     $scope.userName = userInfo.name;
            //     $scope.uid = userInfo.uid;
            //     $scope.userImg = userInfo.img;
            // }
        });
    };

    let getFBBoards = () => {
        // let user = AuthFactory.getUser();
        DataFactory.getFBBoards("google:matthewaugsburger")
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
