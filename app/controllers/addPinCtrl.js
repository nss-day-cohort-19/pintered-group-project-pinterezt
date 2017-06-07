'use strict';

app.controller("AddPinCtrl", function($scope, AuthFactory, $window, $location, DataFactory) {

    let user = AuthFactory.getUser();
    DataFactory.getFBBoards(user)
    .then((boardsObj) => {
        console.log('boards obj at add pin', boardsObj);

    });

});