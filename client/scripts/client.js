/**
* Client Config file
* @desc setus up the configuration of angular for the app
* @param ngRoute, ngMaterial, ngMessages.
* @return angular.module, myApp.filter, myApp.config
*/

console.log('client.js sourced');
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'md.data.table', 'ngAria', 'angular.filter']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', '$mdThemingProvider',
function($routeProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');

  var logoRedMap = $mdThemingProvider.extendPalette('red', {
    '500' : 'AB182F',
  });

  $mdThemingProvider.definePalette('backgrounds', {
    //white
    '50': 'FFFFFF',
    '100': 'FFFFFF',
    '400': 'FFFFFF',
    '500': 'FFFFFF',
    '600': 'FFFFFF',
    '700': 'FFFFFF',
    //controls text color in buttons
    '800': '656565',
    '900': '656565',

    'A100': 'ffffff',
    'A200': '000000',
    'A400': '000000',
    'A700': '000000',
    //Gray
    '200': 'EBF1F5',
    //Dark Gray
    '300': '656565',
  })
  .definePalette('primaryColors', {
    //Cool Blue
      '50' : '5FC9F0',
    '100': '5FC9F0',
    //Warm Yellow
    '200' : 'FFCE00',
    '300' : '5FC9F0',
    '400': 'EBF1F5',
    '500': 'EBF1F5',
    '600': 'EBF1F5',
    '700': 'EBF1F5',
    '800': 'EBF1F5',
    '900': 'EBF1F5',
    'A100': '656565',
    'A200': '656565',
    'A400': '656565',
    'A700': '656565',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                    // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
    '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  })
  .definePalette('secondaryColors', {
    //Cool Green
    '50' : '3DB862',
    '100' : '3DB862',
    //Warm Orange
    '200' : 'F37629',
    '300' : '5FC9F0',
    '400': 'EBF1F5',
    '500': 'EBF1F5',
    '600': 'EBF1F5',
    '700': 'EBF1F5',
    '800': 'EBF1F5',
    '900': 'EBF1F5',
    'A100': '656565',
    'A200': '656565',
    'A400': '656565',
    'A700': '656565',
  })
  .definePalette('logoRed', logoRedMap)
  .theme('default')
  .primaryPalette('primaryColors', {
    'default' : '100',
    'hue-1' : '200'
  })
  .accentPalette('secondaryColors', {
    'default' : '100',
    'hue-1' : '200'
  })
  .warnPalette('logoRed')
  .backgroundPalette('backgrounds', {
    //white
    'default': '100',
    //Gray
    'hue-1': '200',
    //dark gray
    'hue-3': '300',
  });


  $routeProvider

    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'UserAuthController as login',
      // resolve: {
      //   clearance : ['AuthService', function(AuthService){
      //     return AuthService.clearance();
      //   }]
      // }
    })
    .when('/createPassword/:code',{
      templateUrl: '/views/templates/createPassword.html',
      controller: 'UserAuthController as code',
    })
    .when('/register',{
      templateUrl: 'views/templates/register.html',
      controller: 'UserAuthController as admin',
    })
    .when('/home', {
      templateUrl: '/views/templates/adminHome.html',
      controller: 'AdminHomeController as home',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.clearance();
        }]
      }
    })
    .when('/forms', {
      templateUrl: '/views/templates/adminForms.html',
      controller: 'AdminFormsController as forms',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.clearance();
        }]
      }
    })
    .when('/sessions', {
      templateUrl: '/views/templates/adminSessions.html',
      controller: 'AdminSessionsController as sessions',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.clearance();
        }]
      }
    })
    .when('/events', {
      templateUrl: '/views/templates/adminEvents.html',
      controller: 'AdminEventsController as events',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.clearance();
        }]
      }
    })
    .when('/adminUsers', {
      templateUrl: '/views/templates/adminUsers.html',
      controller: 'AdminUsersController as users',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.clearance();
        }]
      }
    })
    .when('/coach', {
      templateUrl: '/views/templates/coach.html',
      controller: 'coachController as coach',
      resolve: {
        clearance : ['AuthService', function(AuthService){
          return AuthService.coachClearance();
        }]
      }
    })
    .when('/logout', {
      controller: 'UserAuthController as user',
      template: '<h1 ng-init="user.logout()">logout</h1>',
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
