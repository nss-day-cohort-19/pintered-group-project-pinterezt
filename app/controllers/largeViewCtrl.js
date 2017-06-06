"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, FBFactory) {
    $scope.saveLargeView = function() {
    FBFactory.saveLargeImage($routeParams.id)
    .then( (response) => {
    	$location.path("");
    });
  };
});