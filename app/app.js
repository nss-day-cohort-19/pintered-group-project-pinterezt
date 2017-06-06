"use strict";

var app = angular.module("ImageApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home-view.html',
		controller: ''
	})
	.when('/profile', {
		templateUrl: 'partials/profile-view.html',
		controller: ''
	})
	.when('/pindetails', {
		templateUrl: 'partials/large-view.html'
	})
	.when('/explore', {
		templateUrl: 'partials/explore-view.html'
	})
	.otherwise('/');
});

