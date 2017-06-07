'use strict';

app.controller("AddBoardCtrl", function($scope, AuthFactory, $route, DataFactory) {

    $scope.board = {
        name: ""
    };

    $scope.addNewBoard = function () {
        $scope.board.uid = AuthFactory.getUser();
        console.log('uid', $scope.board.uid);
        DataFactory.addBoard($scope.board)
        .then((addedObj) => {
            console.log('success');
            $scope.board.name = '';
            $route.reload();
        });
    };

});