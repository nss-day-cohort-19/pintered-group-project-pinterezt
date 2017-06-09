"use strict";

app.factory("ImageFactory", function($q, $http, FBCreds, AuthFactory) {
    var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=a799da7a2e478d1b5db1286d3000a868&per_page=50&format=json&nojsoncallback=1";
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
                $.getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9b64377a28fcf6b100a77d639060a84f&tags=${query}&safe_search=&per_page=50&format=json&nojsoncallback=1`, {
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
	const searchCurrentImage = (query) => {
		console.log('flickr query', query);
        return $q((resolve, reject) => {
                $.getJSON(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=2a3c22dabde799119ef12641ea2ef046&photo_id=${query}&format=json&nojsoncallback=1`, {
                        format: "json"
                })
            .then((itemObj) => {
            	console.log('search current image', itemObj);
                resolve(itemObj.photo);
            })
            .catch((error) => {
                reject(error);
            });
        });
	};
	return {
        getRandomImages,
        getSearchedImages,
        searchCurrentImage
    };
});

