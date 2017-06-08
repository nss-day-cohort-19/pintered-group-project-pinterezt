"use strict";

app.factory("ImageFactory", function($q, $http, FBCreds, AuthFactory) {
    var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2a3c22dabde799119ef12641ea2ef046&text=&per_page=50&format=json&nojsoncallback=1&auth_token=72157682813718420-28c021ce6691cb48&api_sig=77fb33623ed3859e413ca183b77020d7";
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
	const getSearchedImages = (query) => {
		console.log('flickr query', query);
        return $q((resolve, reject) => {
                $.getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b64377a28fcf6b100a77d639060a84f&tags=${query}&per_page=50&format=json&nojsoncallback=1`, {
                        format: "json"
                })
            .then((itemObj) => {
            	console.log('images from search', itemObj);
                resolve(itemObj);
            })
            .catch((error) => {
                reject(error);
            });
        });
	};
	return {
        getRandomImages,
        getSearchedImages
    };
});

