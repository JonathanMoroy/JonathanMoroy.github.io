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
        
        $scope.osAnim = function () { 
            $('#os_list .skill_toggle_down').delay(500).css('display', 'none');
            $('#os_list .skill_toggle_up').delay(500).css('display', 'inline-block');
            $('#os_list .cv_skill_list').slideDown(500);
            $('#os_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1500);
            $('#os_list .cv_skill_bar_gomme').delay(300).animate({width: 'toggle'}, 1500);
            $('#linux').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#windows').delay(1500).animate({'padding-left': '35%'}, 2000);
            $('#os_list .skill_percent').delay(1900).animate({opacity: '1'}, 0);            
            $('#os_list .skill_percent').delay(0).each(function () {
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

        $scope.osHide = function () {
            $('#os_list .skill_toggle_down').delay(500).css('display', 'inline-block');
            $('#os_list .skill_toggle_up').delay(500).css('display', 'none');
            $('#os_list .cv_skill_list').slideUp(500);
            $('#os_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1);
            $('#os_list .cv_skill_bar_gomme').delay(500).animate({width: 'toggle'}, 1);
            $('#linux').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#windows').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#os_list .skill_percent').delay(500).animate({opacity: '0'}, 0);
        };
        
        
        $scope.langageAnim = function () { 
            $('#langage_list .skill_toggle_down').delay(500).css('display', 'none');
            $('#langage_list .skill_toggle_up').delay(500).css('display', 'inline-block');
            $('#langage_list .cv_skill_list').slideDown(500);
            $('#langage_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1500);
            $('#langage_list .cv_skill_bar_gomme').delay(300).animate({width: 'toggle'}, 1500);
            $('#html_wave').delay(1500).animate({'padding-left': '75%'}, 2000);
            $('#css_wave').delay(1500).animate({'padding-left': '75%'}, 2000);
            $('#js_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#php_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#sql_wave').delay(1500).animate({'padding-left': '35%'}, 2000);
            $('#langage_list .skill_percent').delay(1900).animate({opacity: '1'}, 0);            
            $('#langage_list .skill_percent').delay(0).each(function () {
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

        $scope.langageHide = function () {
            $('#langage_list .skill_toggle_down').delay(500).css('display', 'inline-block');
            $('#langage_list .skill_toggle_up').delay(500).css('display', 'none');
            $('#langage_list .cv_skill_list').slideUp(500);
            $('#langage_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1);
            $('#langage_list .cv_skill_bar_gomme').delay(500).animate({width: 'toggle'}, 1);
            $('#html_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#css_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#js_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#php_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#sql_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#langage_list .skill_percent').delay(500).animate({opacity: '0'}, 0);
        };
        
        $scope.frameworkAnim = function () { 
            $('#framework_list .skill_toggle_down').delay(500).css('display', 'none');
            $('#framework_list .skill_toggle_up').delay(500).css('display', 'inline-block');
            $('#framework_list .cv_skill_list').slideDown(500);
            $('#framework_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1500);
            $('#framework_list .cv_skill_bar_gomme').delay(300).animate({width: 'toggle'}, 1500);
            $('#bootstrap_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#jquery_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#angular_wave').delay(1500).animate({'padding-left': '35%'}, 2000);
            $('#symfony_wave').delay(1500).animate({'padding-left': '15%'}, 2000);
            $('#framework_list .skill_percent').delay(1900).animate({opacity: '1'}, 0);            
            $('#framework_list .skill_percent').delay(0).each(function () {
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

        $scope.frameworkHide = function () {
            $('#framework_list .skill_toggle_down').delay(500).css('display', 'inline-block');
            $('#framework_list .skill_toggle_up').delay(500).css('display', 'none');
            $('#framework_list .cv_skill_list').slideUp(500);
            $('#framework_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1);
            $('#framework_list .cv_skill_bar_gomme').delay(500).animate({width: 'toggle'}, 1);
            $('#bootstrap_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#jquery_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#angular_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#symfony_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#framework_list .skill_percent').delay(500).animate({opacity: '0'}, 0);
        };
        
        $scope.toolAnim = function () { 
            $('#tool_list .skill_toggle_down').delay(500).css('display', 'none');
            $('#tool_list .skill_toggle_up').delay(500).css('display', 'inline-block');
            $('#tool_list .cv_skill_list').slideDown(500);
            $('#tool_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1500);
            $('#tool_list .cv_skill_bar_gomme').delay(300).animate({width: 'toggle'}, 1500);
            $('#terminal_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#nano_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#atom_wave').delay(1500).animate({'padding-left': '75%'}, 2000);
            $('#netbeans_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#git_wave').delay(1500).animate({'padding-left': '55%'}, 2000);
            $('#tool_list .skill_percent').delay(1900).animate({opacity: '1'}, 0);            
            $('#tool_list .skill_percent').delay(0).each(function () {
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

        $scope.toolHide = function () {
            $('#tool_list .skill_toggle_down').delay(500).css('display', 'inline-block');
            $('#tool_list .skill_toggle_up').delay(500).css('display', 'none');
            $('#tool_list .cv_skill_list').slideUp(500);
            $('#tool_list .cv_skill_bar').delay(500).animate({width: 'toggle'}, 1);
            $('#tool_list .cv_skill_bar_gomme').delay(500).animate({width: 'toggle'}, 1);
            $('#terminal_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#nano_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#atom_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#netbeans_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#git_wave').delay(500).animate({'padding-left': '0%', width: '10px'}, 1);
            $('#tool_list .skill_percent').delay(500).animate({opacity: '0'}, 0);
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