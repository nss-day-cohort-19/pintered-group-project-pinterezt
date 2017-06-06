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

    const getPin = (pinId) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins/${pinId}.json`)
                .then((itemObj) => {
                    resolve(itemObj.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const changePin = (pinId, pinnedObj) => {
        return $q((resolve, reject) => {
            let newObj = JSON.stringify(pinnedObj);
            $http.patch(`${FBCreds.databaseURL}/pins/${pinId}.json`, newObj)
                .then((itemObj) => {
                    resolve(itemObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const getFBBoards = (userID) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${userID}"`)
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
            $http.get(`${FBCreds.databaseURL}/users.json?orderBy="uid"&equalTo="${userID}"`)
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
        getPin,
        changePin,
        getFBBoards,
        getFBUser
    };
});
