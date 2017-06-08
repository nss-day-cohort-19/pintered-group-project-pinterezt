"use strict";

app.controller('ExplorerCtrl', function($scope, $location, $routeParams, ImageFactory, AuthFactory, SearchTermData) {
    $scope.getImagesFlickr = function() {
    	console.log('clicked Flickr');
        ImageFactory.getRandomImages()
            .then((dataFromFlickr) => {
                console.log('stuff from flickr', dataFromFlickr.photos.photo);
                var photosArray = dataFromFlickr.photos.photo;
                $scope.imagesFromFlickr = photosArray;
                AuthFactory.isAuthenticated()
                    .then(function(result) {
                        console.log(result);
                        $scope.isUser = result;
                        return result;
                    });

            });
    };

    $scope.getImagesFlickr();

    $scope.searchData = SearchTermData;
});
