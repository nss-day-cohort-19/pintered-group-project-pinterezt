"use strict";
app.controller('HomeCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory, SearchTermData) {
    DataFactory.getAllPins() //this is just a random func name
        .then((dataFromFb) => {
            console.log('stuff from fb', dataFromFb);
            $scope.dataFromFb = dataFromFb;
            AuthFactory.isAuthenticated()
                .then(function(result) {
                    console.log(result);
                    $scope.isUser = result;
                    return result;
                });

        });
    $scope.searchData = SearchTermData;

    $scope.getBoardData = () => {
        DataFactory.getFBBoards(AuthFactory.getUser())
            .then((boardsObj) => {
                for (let i in boardsObj) {
                    boardsObj[i].id = i;
                }

                $scope.boards = boardsObj;
            });
    };

    $scope.pushPin = () => {
        let pinObj = {
            name: $scope.pinName,
            uid: AuthFactory.getUser(),
            url: $scope.pinUrl,
            boardId: $scope.board.id
        };
        console.log('pinObj', pinObj);
        DataFactory.addNewPin(pinObj)
            .then((date) => {
                console.log('yeah yeah yeah');
            });
    };

    $scope.setItemUrlToPinUrl = (url) => {
        $scope.pinUrl = url;
    };

    $scope.getBoardData();
});
