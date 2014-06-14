'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1');

var app = angular.module('myApp.services');

app.service('d3Api',['$http',
    function($http){
        this.get = function(battletagName,battletagCode,heroId){

            var host = 'eu.battle.net';
            var url = 'http://'+ host + "/api/d3/profile/" + battletagName + "-" + battletagCode +"/hero/" + heroId;

            return $http({
                method: 'POST',
                url: url
            });
        };
    }
]);