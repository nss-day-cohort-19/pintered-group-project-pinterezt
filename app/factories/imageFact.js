"use strict";

app.factory("ImageFactory", function($q, $http, FBCreds, AuthFactory) {
    var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1dc58b09f5e89ef17eff6ddea795cf51&text=&per_page=20&format=json&nojsoncallback=1&auth_token=72157684797283975-28512c49ccff23c3&api_sig=cfaad106d290ed4386167661b66aa4fd";

    const getRandomImages = () => {
        return $q((resolve, reject) => {
                $.getJSON(flickerAPI, {
                        format: "json"
                })
            .then((itemObj) => {
            	console.log('images from flickr', itemObj);
                resolve(itemObj);
            })
            .catch((error) => {
                reject(error);
            });
        });
	};
	return {
        getRandomImages
    };
});

