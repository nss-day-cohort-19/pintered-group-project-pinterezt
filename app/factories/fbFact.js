"use strict";
app.factory("DataFactory", function($q, $http, FBCreds) {
    const saveLargeImage = (imageID, editedObj) => {
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(editedObj);
            $http.post(`${FBCreds.databaseURL}/images/${imageID}.json`, newObj)
                .then((itemObj) => {
                    resolve(itemObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getAllPins = () => {
        let pins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json`)
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    console.log("getAllPins", itemCollection);
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        pins.push(itemCollection[key]);
                    });
                    resolve(pins);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getFBBoards = (userID) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${userID}"`)
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    console.log("getFBBoards", itemCollection);
                    resolve(itemCollection);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const getFBUser = (userID) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${userID}"`)
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    console.log("getFBBoards", itemCollection);
                    resolve(itemCollection);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
  return {
    saveLargeImage,
    getAllPins,
    getFBBoards,
    getFBUser
  };
});
