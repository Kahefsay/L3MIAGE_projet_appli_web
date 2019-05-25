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
                when('/alternance/information', {
                    template: '<alternance></alternance>'
                }).
                when('/connexion', {
                    template: '<connexion></connexion>'
                }).
                when('/inscription', {
                    template: '<inscription></inscription>'
                }).
                when('/administration', {
                    template: '<administration></administration>',
                    resolve: {
                        currentAuth: function ($utilisateurCourant, $q) {
                            if ($utilisateurCourant.getUser().Role != 'COLLABORATEUR') {
                                return $q.reject('DROIT_REQUIRED');
                            }
                        }
                    }
                }).
                otherwise({
                    redirectTo: '/accueil'
                });
        }
    ]);