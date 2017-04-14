var resumeApp = angular.module('resumeApp', ['ngRoute'])
        .run(function ($rootScope) {
            $rootScope.french = true;
            $rootScope.english = false;
        });

resumeApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/home', {
                    templateUrl: 'assets/partials/home.html',
                    controller: 'homeCtrl'
                })
                .when('/resume', {
                    templateUrl: 'assets/partials/resume.html',
                    controller: 'resumeCtrl'
                })
                .when('/contact', {
                    templateUrl: 'assets/partials/contact.html',
                    controller: 'contactCtrl'
                })
                .when('/project', {
                    templateUrl: 'assets/partials/project.html',
                    controller: 'projectCtrl'
                })
                .otherwise({
                    redirectTo: '/home'
                });
    }]);

resumeApp.controller('indexCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur index
        $scope.switchFrench = function () {
            $scope.french = true;
            $scope.english = false;
        };
        $scope.switchEnglish = function () {
            $scope.french = false;
            $scope.english = true;
        };

        $scope.toggleAnim = function () {
            $('.skill_toggle_down').delay(500).css('display', 'none');
            $('.skill_toggle_up').delay(500).css('display', 'inline-block');
            $('.cv_skill_list').slideDown(500);
            $('.cv_skill_bar').delay(500).animate({width: 'toggle'}, 1500);
            $('.cv_skill_bar_gomme').delay(300).animate({width: 'toggle'}, 1500);
            $('.pacman_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('.skill_percent').delay(1900).animate({opacity: '1'}, 0);
            $('.skill_percent').delay(0).each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1700,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now) + '%');
                    }
                });
            });
        };

        $scope.hideAnim = function () {
            $('.skill_toggle_down').delay(500).css('display', 'inline-block');
            $('.skill_toggle_up').delay(500).css('display', 'none');
            $('.cv_skill_list').slideUp(500);
            $('.cv_skill_bar').delay(500).animate({width: 'toggle'}, 1);
            $('.cv_skill_bar_gomme').delay(500).animate({width: 'toggle'}, 1);
            $('.pacman_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('.skill_percent').delay(500).animate({opacity: '0'}, 0);
        };
    }]);

resumeApp.controller('homeCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur home
    }]);

resumeApp.controller('resumeCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur resume
    }]);

resumeApp.controller('contactCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur contact
    }]);

resumeApp.controller('projectCtrl', ['$scope', function ($scope) {
        // Configuration de mon contrôleur project
    }]);