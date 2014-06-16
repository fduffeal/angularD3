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
            var url = '/angularD3/proxy.php?url=http://'+ host + "/api/d3/profile/" + battletagName + "-" + battletagCode +"/hero/" + heroId;

            var promise = $http({
                method: 'GET',
                url: url
            }).then(function(response){
                return response.data;
            });

            return promise;
        };

        this.getProfil = function(battletagName,battletagCode){
            var host = 'eu.battle.net';
            var url = '/angularD3/proxy.php?url=http://'+ host + "/api/d3/profile/" + battletagName + "-" + battletagCode + '/';

            var promise = $http({
                method: 'GET',
                url: url
            }).then(function(response){
                return response.data;
            });

            return promise;
        };
    }
]);