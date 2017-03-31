var resumeApp = angular.module('resumeApp', ['ngRoute']);

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
        $scope.header = 'assets/partials/header.html';
        $scope.footer = 'assets/partials/footer.html';
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