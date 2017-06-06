'use strict';

app.controller('ProfileCtrl', function($scope, $location, DataFactory) {

    let getFBUser = () => {
        // let user = AuthFactory.getUser();
        DataFactory.getFBUser("google:matthewaugsburger")
        .then((userInfo)=> {
            console.log(userInfo);
            for (let i in userInfo) {
                $scope.userName = userInfo[i].name;
                $scope.uid = userInfo[i].uid;
                $scope.userImg = userInfo[i].url;
            }
        });
    };

    let getFBBoards = () => {
        // let user = AuthFactory.getUser();
        DataFactory.getFBBoards("google:matthewaugsburger")
        .then((boardsListObj) => {
            $scope.itemList = boardsListObj;
        });
    };
    getFBUser();
    getFBBoards();

});
