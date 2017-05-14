/**
 * Admin Service Factory
 * @desc Manages all of the functions related to the Admin
 * @param $http, $location
 * @return the list of coaches
 */

myApp.factory('AdminService', ['$http', '$location',
  function($http, $location) {
    var allUsers = {
      users: []
    };
    var allForms = {};


    /**
    * @desc Admin gets the list of users
    * @param
    * @return AllUsers object
    */
    function getAllUsers() {
      $http.get('/users').then(function(response) {
        allUsers.users = response.data;
      });
    }

    /**
    * @desc gets all forms from db
    * @param
    * @return AllForms object
    */
    function getAllForms() {
      $http.get('/forms').then(function(response) {
        allForms.returnedForms = response.data;
      });
    }

    /**
    * @desc adds new form to db
    * @param {object} formToSend the exit-ticket form to be created
    */
    function addNewForm(formToSend) {
      $http.post('/forms/add', formToSend).then(function(response) {
        getAllForms();
    });
    }

    return {
      getAllUsers: getAllUsers,
      allUsers: allUsers,
      getAllForms: getAllForms,
      allForms: allForms,
      addNewForm: addNewForm
    };

  }
]);
