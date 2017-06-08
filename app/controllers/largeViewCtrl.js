"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory, ImageFactory) {
	// console.log('routeParams', $routeParams.id);
	DataFactory.getAllPins()
	.then((allPins)=> {
		// console.log('latest', allPins);
		for (var i = 0; i < allPins.length; i++) {
			if(allPins[i].id == $routeParams.id) {
				$scope.currentImage = allPins[i].url;
				$scope.imageName = allPins[i].name;
			}
		}
		// console.log('currentImage', $scope.currentImage);
	})
	.then(
		AuthFactory.isAuthenticated()
    	.then(function(result) {
    		console.log(result);
    		$scope.isUser = result;
    		return result;
    	})
	);
//     $scope.saveLargeView = function() {
//     DataFactory.saveLargeImage($routeParams.id)
//     .then( (response) => {
//     	$location.path("");
//     });
//   };

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
