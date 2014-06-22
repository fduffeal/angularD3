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
    .directive('imgItem',[function(){

        return {
            scope: {
                myitem: '=imgItem'
            },
            link: function(scope,elm,attrs){
                scope.myitem.icon = 'http://media.blizzard.com/d3/icons/items/large/'+scope.myitem.icon+'.png';
            },
            restrict: 'EA',
            templateUrl : "partials/item.html"
        }
    }])
    .directive('playerTwitch',[function(){

        return {
            scope: {
                myitem: '=playerTwitch'
            },
            link: function(scope,elm,attrs){
                scope.url = "hostname=www.twitch.tv&channel="+scope.myitem.stream.channel.name+"&auto_play=false&start_volume=25";
                scope.streamName = scope.myitem.stream.channel.name;
            },
            restrict: 'EA',
            templateUrl : "partials/playerTwitch.html"
        }
    }])
;
