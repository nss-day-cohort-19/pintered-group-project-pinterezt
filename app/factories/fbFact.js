"use strict";
app.factory("DataFactory", function($q, $http, FBCreds) {
const saveLargeImage = ( imageID, editedObj ) => {
    return $q( (resolve, reject) => {
      let newObj = JSON.stringify(editedObj);
      $http.post(`${FBCreds.databaseURL}/items/${imageID}.json`, newObj)
      .then( (itemObj) => {
        resolve(itemObj);
      })
      .catch( (error) => {
        reject(error);
      });
    });
  };
});