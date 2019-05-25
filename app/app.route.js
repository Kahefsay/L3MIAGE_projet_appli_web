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
                when('/administration/utilisateurs', {
                    template: '<administration></administration>',
                    resolve: {
                        currentAuth: function ($utilisateurCourant, $q) {
                            if ($utilisateurCourant.getUser().Role != 'COLLABORATEUR') {
                                return $q.reject('DROIT_REQUIRED');
                            }
                        }
                    }
                }).
                when('/alternance/offre', {
                    template: '<offre></offre>',
                    resolve: {
                        currentAuth: function ($utilisateurCourant, $q) {
                            if ($utilisateurCourant.getUser() == null) {
                                return $q.reject('AUTH_REQUIRED');
                            } else if ($utilisateurCourant.getUser().Role == 'PROSPECT') {
                                return $q.reject('DROIT_REQUIRED');
                            }
                        }
                    }
                }).
                when('/administration/offre', {
                    template: '<offreadministration></offreadministration>',
                    resolve: {
                        currentAuth: function ($utilisateurCourant, $q) {
                            if ($utilisateurCourant.getUser().Role != 'COLLABORATEUR') {
                                return $q.reject('DROIT_REQUIRED');
                            }
                        }
                    }
                }).
                when('/alternance/offre/:offreID', {
                    template: "<offredetail></offredetail>",
                    resolve: {
                        currentAuth: function ($utilisateurCourant, $q) {
                            if ($utilisateurCourant.getUser() == null) {
                                return $q.reject('AUTH_REQUIRED');
                            } else if ($utilisateurCourant.getUser().Role == 'PROSPECT') {
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