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
;
