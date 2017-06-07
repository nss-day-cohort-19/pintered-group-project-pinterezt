"use strict";

var app = angular.module("ImageApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home-view.html',
		controller: 'HomeCtrl'
	})
	.when('/profile', {
		templateUrl: 'partials/profile-view.html',
		controller: 'ProfileCtrl'
	})
	.when('/largeView/:id', {
		templateUrl: 'partials/large-view.html',
		controller: 'LargeViewCtrl'
	})
	.when('/board/:id', {
		templateUrl: 'partials/board-view.html',
		controller: 'BoardCtrl'
	})
	.when('/pins/:id', {
		templateUrl: 'partials/pin-view.html',
		controller: 'ProfileCtrl'
	})
	.when('/pindetails', {
		templateUrl: 'partials/large-view.html',
		controller: 'LargeViewCtrl'
	})
	.when('/explore', {
		templateUrl: 'partials/explore-view.html',
		controller: 'ExplorerCtrl'
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});
