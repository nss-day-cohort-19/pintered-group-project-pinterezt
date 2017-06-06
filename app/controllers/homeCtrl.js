"use strict";
app.controller('HomeCtrl', function($scope, $location, $routeParams, DataFactory) {
    DataFactory.getAllPins()//this is just a random func name
    .then( (stuff) => {
    	console.log('stuff from fb', stuff);
    });
});