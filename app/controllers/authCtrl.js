"use strict";

app.controller("AuthCtrl", function($scope, AuthFactory, $window, $location) {

	$scope.logout = () => {
		AuthFactory.logoutUser()
		.then(function(data) {
			$window.location.url = '#!/';
		}, function(error) {
			console.log("an error occured on logout");
		});
	};

	if(AuthFactory.isAuthenticated()) {
		$scope.logout();
	}

	$scope.login = () => {
		AuthFactory.authWithProvider()
		.then(function(result) {
			var user = result.user.uid;
			$location.path("#!/");

		})
		.catch(function (error) {
			console.log("error on login:", error.code, error.message);
		});
	};
});