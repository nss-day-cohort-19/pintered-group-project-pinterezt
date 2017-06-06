"use strict";
app.controller('LargeViewCtrl', function($scope, $location, $routeParams, DataFactory) {
    $scope.saveLargeView = function() {
    DataFactory.saveLargeImage($routeParams.id)
    .then( (response) => {
    	$location.path("");
    });
  };
});