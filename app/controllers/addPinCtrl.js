'use strict';

app.controller("AddPinCtrl", function($scope, AuthFactory, $window, $location, DataFactory) {

    let pinUrl = "";

    $(document).on('click', 'img', (event) => {
        pinUrl = $(event)[0].target.currentSrc;

    });

    if(AuthFactory.isAuthenticated()){
        $(".addBtn").prop('disabled', false);
    }else{
        $(".addBtn").prop('disabled', true);
    }

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
            boardId: $('.boardSelect').val()
        };
        console.log('pinObj', pinObj);
        DataFactory.addNewPin(pinObj)
        .then((date) => {
            console.log('yeah yeah yeah');
        });
    };

});