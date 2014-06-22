'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('profilCtrl', ['$scope','d3Api','$routeParams',
        function ($scope,d3Api,$routeParams) {
        $scope.battleTagName = $routeParams.battleTagName;
        $scope.battleTagId = $routeParams.battleTagId;
        d3Api.getProfil($scope.battleTagName,$scope.battleTagId).then(function(data){
                console.log(data);
                $scope.heroes = data.heroes;

                $scope.code = data.code;
                $scope.msg = data.reason;
            }
        );
    }])
    .controller('heroCtrl',['$scope','$routeParams','d3Api',
        function($scope,$routeParams,d3Api){

            $scope.battleTagName = $routeParams.battleTagName;
            $scope.battleTagId = $routeParams.battleTagId;

            d3Api.get($routeParams.battleTagName,$routeParams.battleTagId,$routeParams.heroId).then(function(data){
                    console.log(data);
                    $scope.data = data;

                    document.title = data.name;

                    $scope.skillsActif = data.skills.active;

                    $scope.stats = data.stats;
                }
            );
        }
    ])
    .controller('twitchCtrl',['$scope','twitchApi',
        function($scope,twitchApi){

            var aStream = [];
            twitchApi.getUser('Fumistar').then(function(data){
                $scope.data = data;

                for(var key in data.follows ){
                    console.log(data.follows[key].channel.name);
                    twitchApi.getStream(data.follows[key].channel.name).then(function(data){

                        if(data.stream != null) {
                            aStream.push(data);
                        }
                    });
                }
                $scope.aStrem = aStream;
            });



            $scope.streamName = "sc2daisy";
            $scope.url = "hostname=www.twitch.tv&channel="+$scope.streamName+"&auto_play=false&start_volume=25";

            twitchApi.getStream('sc2daisy').then(function(data){
                $scope.stream = data;
            });
        }
    ])

;
