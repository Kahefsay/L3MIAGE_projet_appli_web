angular.
    module('MiageToulouse').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/accueil', {
                    template: '<accueil></accueil>'
                }).
                when('/formation', {
                    template: '<formation></formation>'
                }).
                when('/alternance', {
                    template: '<alternance></alternance>'
                }).
                when('/connexion', {
                    template: '<connexion></connexion>'
                }).
                when('/inscription', {
                    template: '<inscription></inscription>'
                }).
                when('/administration', {
                    template: '<administration></administration>'
                }).
                otherwise({ redirectTo: '/accueil' });
        }
    ]);