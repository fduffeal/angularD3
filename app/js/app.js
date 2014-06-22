'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:battleTagName/:battleTagId/hero/:heroId',
            {
                templateUrl:'partials/hero.html',
                controller:'heroCtrl'
            }
        );
        $routeProvider.when('/:battleTagName/:battleTagId',
            {
                templateUrl:'partials/profil.html',
                controller:'profilCtrl'
            }
        );
        $routeProvider.when('/twitch',
            {
                templateUrl:'partials/twitch.html',
                controller:'twitchCtrl'
            }
        );
        $routeProvider.otherwise({redirectTo: '/Fumétoile/2442'});
    }]);
