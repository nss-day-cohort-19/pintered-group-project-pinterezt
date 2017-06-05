"use strict";

var app = angular.module("doctorsApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/doctors-view.html',
		controller: 'DoctorsCtrl'
	}).
	when('/patients', {
		templateUrl: 'partials/patients-view.html',
		controller: 'PatientsCtrl'
	}).
	otherwise('/');
});

