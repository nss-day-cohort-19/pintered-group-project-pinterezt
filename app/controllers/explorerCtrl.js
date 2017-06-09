"use strict";

app.controller('ExplorerCtrl', function($scope, $location, $routeParams, ImageFactory, AuthFactory, DataFactory, SearchTermData) {
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
    $scope.searchImages = function(query) {
        console.log('clicked Flickr', query);
        ImageFactory.getSearchedImages(query)
            .then((dataFromFlickr) => {
                console.log('stuff from flickr', dataFromFlickr);
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

    $scope.searchData = SearchTermData;
    $(document).keypress(function(e) {
        if (e.which == 13) {
            console.log('You pressed enter!', $scope.searchData.search);
            $scope.searchImages($scope.searchData.search);
        }
    });

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
