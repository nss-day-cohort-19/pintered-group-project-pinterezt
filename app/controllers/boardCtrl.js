'use strict';

app.controller('BoardCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory) {

    let getBoardName = () => {
        DataFactory.getBoard($routeParams.id)
            .then((boardObj) => {
                console.log('check this out', boardObj);
                $scope.boardName = boardObj.data.name;

            });
    };

    let getFBBoardPins = () => {
        console.log('route id', $routeParams.id);
        DataFactory.getFBBoardPins($routeParams.id)
            .then((pinsListObj) => {
                $scope.itemList = pinsListObj;
            });
    };

    getFBBoardPins();
    getBoardName();

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
