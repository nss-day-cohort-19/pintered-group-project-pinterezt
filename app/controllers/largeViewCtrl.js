"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory, ImageFactory, $window) {

    DataFactory.getAllPins()
        .then((allPins) => {
            for (var i = 0; i < allPins.length; i++) {
                if (allPins[i].id == $routeParams.id) {
                    $scope.currentImage = allPins[i].url;
                    $scope.imageName = allPins[i].name;
                }
            }
        })
        .then(
            AuthFactory.isAuthenticated()
            .then(function(result) {
                console.log(result);
                $scope.isUser = result;
                return result;
            })
        );

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

    $('.back-btn').on('click', function() {
        $window.history.back();
    });

    $scope.getBoardData();
});
