"use strict";
app.controller('HomeCtrl', function($scope, $location, $routeParams, FBFactory) {
    FBFactory.getImagesFb()//this is just a random func name
    .then( (stuff) => {
    	console.log('stuff from fb', stuff);
    });
});