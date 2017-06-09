'use strict';

app.controller("AddPinCtrl", function($scope, AuthFactory, $window, $location, DataFactory, $route) {

    let pinUrl = "";

    $(document).on('click', '.btn', (event) => {
        console.log("check this event", event.currentTarget.value);
        $scope.name = '';
        pinUrl = event.currentTarget.value;

    });

    $scope.getBoardData = () => {
        DataFactory.getFBBoards(AuthFactory.getUser())
            .then((boardsObj) => {
                for (let i in boardsObj) {
                    boardsObj[i].id = i;
                }
                console.log('boards obj at add pin', boardsObj, pinUrl);
                $scope.boards = boardsObj;
                $scope.url = pinUrl;

            });
    };

    $scope.pushPin = () => {
        let pinObj = {
            name: $scope.name,
            uid: AuthFactory.getUser(),
            url: $scope.url,
            boardId: $('.boardSelect option:selected').val()
        };
        console.log('pinObj', pinObj);
        DataFactory.addNewPin(pinObj)
            .then((date) => {
                console.log('yeah yeah yeah');
                $route.reload();
            });
    };

});
