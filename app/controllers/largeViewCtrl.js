"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, DataFactory) {
	// console.log('routeParams', $routeParams.id);
	DataFactory.getAllPins()
	.then((allPins)=> {
		// console.log('latest', allPins);
		for (var i = 0; i < allPins.length; i++) {
			if(allPins[i].id == $routeParams.id) {
				$scope.currentImage = allPins[i].url;
			}
		}
		// console.log('currentImage', $scope.currentImage);
	});


    $scope.saveLargeView = function() {
    DataFactory.saveLargeImage($routeParams.id)
    .then( (response) => {
    	$location.path("");
    });
  };
});