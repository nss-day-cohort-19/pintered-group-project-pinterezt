'use strict';

app.controller('PinCtrl', function($scope, $routeParams, DataFactory, $location, AuthFactory) {

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
            });
    };

    getFBUser();
    getPin();

});
