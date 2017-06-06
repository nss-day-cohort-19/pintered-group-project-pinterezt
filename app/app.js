"use strict";

var app = angular.module("ImageApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: '',
		controller: ''
	}).
	when('/', {
		templateUrl: '',
		controller: ''
	}).
	otherwise('/');
});

