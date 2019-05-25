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
    'offre',
    'utilisateurCourantService',
    'utilisateurService'
]);

app.run(['$rootScope', '$location',
    function ($rootScope) {
        $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
            if (error == 'AUTH_REQUIRED') {
                alert("Vous devez être connecté pour accéder à cette page.");
                window.history.back();
            } else if (error == 'DROIT_REQUIRED') {
                alert("Vous n'avez pas les autorisations nécessaires pour accéder à cette partie du site.");
                window.history.back();
            }
        });
    }
]);

app.controller('mainCtrl', function ($scope, $http, $location, $route, $utilisateurCourant) {

    if ($scope.user == null) {
        $utilisateurCourant.estConnecte($http)
            .then(data => {
                if (data != null) {
                    $scope.estConnecte = true;
                    $scope.user = data;
                }
            });
    }

    $scope.deconnexion = function () {
        localStorage.removeItem('currentUser');
        $scope.user = null;
        $scope.estConnecte = false;
        $location.path('/accueil');
    }
});