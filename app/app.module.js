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
    'utilisateurCourantService'
]);

app.controller('mainCtrl', function($scope, $utilisateurCourant) {
    if ($utilisateurCourant.estConnecte()) {
        $scope.estConnecte = true;
        $scope.utilisateur = $utilisateurCourant.getUserName();
    }
});