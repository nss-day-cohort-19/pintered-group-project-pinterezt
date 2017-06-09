"use strict";
app.controller('LargeViewFlickr', function($scope, $window, $location, $routeParams, DataFactory, AuthFactory, ImageFactory) {
	console.log('routeParamsFlickr', $routeParams.id);
	ImageFactory.getRandomImages()
	.then((allFlickr)=> {
		console.log('latestFlickr', allFlickr);
		var photosArray = allFlickr.photos.photo;
		for (var i = 0; i < photosArray.length; i++) {
			if(photosArray[i].id == $routeParams.id) {
				$scope.currentImage = photosArray[i];
				console.log('largeFlickr',photosArray[i]);
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
	console.log('routeParamsFlickr', $routeParams.id);
	ImageFactory.searchCurrentImage($routeParams.id)
	.then((allFlickr)=> {
		console.log('latestSearchFlickrCurrent', allFlickr);
		$scope.currentImage = allFlickr;
		// console.log('latestSearchFlickrCurrent', $scope.currentImage);


	})
	.then(
		AuthFactory.isAuthenticated()
    	.then(function(result) {
    		console.log(result);
    		$scope.isUser = result;
    		return result;
    	})
	);

    $scope.saveLargeView = function() {
    DataFactory.saveLargeImage($routeParams.id)
    .then( (response) => {
    	$location.path("");
    });


    $('.back-btn').on('click', function() {
        $window.history.back();
    });

  };
});