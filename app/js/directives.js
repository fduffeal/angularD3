'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('formbattlenet',['$routeParams',function($routeParams){
        return {
            restrict: 'A',
            templateUrl : "partials/formBattleNet.html"
        }
    }])
;
