'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []);
angular.module('myApp.services').value('version', '0.1');


angular.module('myApp.services').service('d3Api',['$http',
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

angular.module('myApp.services').service('twitchApi',['$http',
    function($http){

        this.getUser = function(user){
            var url = '/angularD3/proxy.php?url=https://api.twitch.tv/kraken/users/'+user+'/follows/channels';
            var promise = $http({
                method: 'GET',
                url: url
            }).then(function(response){
                return response.data;
            });

            return promise;
        };

        this.getChannel = function(channelName){
            var url = '/angularD3/proxy.php?url=https://api.twitch.tv/kraken/channel/'+channelName;
            var promise = $http({
                method: 'GET',
                url: url
            }).then(function(response){
                return response.data;
            });

            return promise;
        };

        this.getStream = function(name){
            var url = '/angularD3/proxy.php?url=https://api.twitch.tv/kraken/streams/'+name+'/';
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