"use strict";
app.factory("DataFactory", function($q, $http, FBCreds, AuthFactory) {
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

    const getPin = (userID) => {
        let pins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${userID}"`)
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
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

    const addBoard = (newBoard) => {
        let boardObj = JSON.stringify(newBoard);
        return $q((resolve, reject) => {
            $http.post(`${FBCreds.databaseURL}/boards.json`, boardObj)
                .then((obj) => {
                    resolve(obj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addUser = (userObj) => {
        let user = {
            name: `${userObj.displayName}`,
            uid: `${userObj.uid}`,
            url: `${userObj.photoURL}`
        };
        user = JSON.stringify(user);
        return $q((resolve, reject) => {
            $http.put(`${FBCreds.databaseURL}/users/${userObj.uid}.json`, user)
                .then((obj) => {
                    resolve(obj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const addNewPin = (pinObj) => {
        return $q((resolve, reject) => {
            let hold = JSON.stringify(pinObj);
            $http.post(`${FBCreds.databaseURL}/pins.json`, hold)
                .then((successObj) => {
                    resolve(successObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });

    };

    const getFBBoardPins = (boardID) => {
        let pins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="boardId"&equalTo="${boardID}"`)
                .then((itemObj) => {
                    let itemCollection = itemObj.data;
                    console.log("getBoardPins", itemCollection);
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

    const getBoard = (boardId) => {
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/boards/${boardId}.json`)
                .then((boardObj) => {
                    resolve(boardObj);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const deleteBoard = (boardId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/boards/${boardId}.json`)
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    const deletePin = (pinId) => {
        console.log('pinId', pinId);
        return $q((resolve, reject) => {
            $http.delete(`${FBCreds.databaseURL}/pins/${pinId}.json`)
                .then((response) => {
                    resolve(response);
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
        getFBBoards,
        getFBUser,
        addBoard,
        addUser,
        addNewPin,
        getFBBoardPins,
        getBoard,
        deleteBoard,
        deletePin
    };
});
