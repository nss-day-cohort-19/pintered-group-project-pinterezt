'use strict';

app.factory("AuthFactory", function($q) {
	
	let currentUser = null;



	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider = function() {
		return firebase.auth().signInWithPopup(provider);
	};

	let isAuthenticated = function(){
		return $q((resolve, reject) =>{
			firebase.auth().onAuthStateChanged((user) => {
				if(user) {
					currentUser = user.uid;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let logoutUser = function() {
		return firebase.auth().signOut();
	};
    let getUser = function() {
        console.log('currentUser Here yo', currentUser);
		return currentUser;
	};

	return {authWithProvider, isAuthenticated, logoutUser, getUser};
});