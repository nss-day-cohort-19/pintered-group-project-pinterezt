"use strict";
app.controller('HomeCtrl', function($scope, $location, $routeParams, DataFactory, AuthFactory, SearchTermData) {
    DataFactory.getAllPins()//this is just a random func name
    .then( (dataFromFb) => {
    	console.log('stuff from fb', dataFromFb);
    	$scope.dataFromFb = dataFromFb;
    	AuthFactory.isAuthenticated()
    	.then(function(result) {
    		console.log(result);
    		$scope.isUser = result;
    		return result;
    	});

    });
     $scope.searchData = SearchTermData;

});