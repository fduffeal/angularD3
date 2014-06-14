'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope','d3Api', function ($scope,d3Api) {
        d3Api.get('Fumétoile',2442,10734237);
    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }]);
