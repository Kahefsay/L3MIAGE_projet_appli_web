var app = angular.module('MiageToulouse', [
    'ngRoute',
    'ngMessages',
    'mdl',
    'footercustom',
    'accueil',
    'formation',
    'alternance',
    'connexion',
    'inscription',
    'administration',
    'utilisateurCourantService',
    'utilisateurService'
]);

app.controller('mainCtrl', function ($scope, $http, $window, $utilisateurCourant) {
    if ($scope.user == null) {
        $utilisateurCourant.estConnecte($http)
            .then(data => {
                if (data != null) {
                    $scope.estConnecte = true;
                    $scope.user = data;
                }
            });
    }

    $scope.deconnexion = function() {
        $utilisateurCourant.deconnexion();
        $window.location.reload();
    }

});