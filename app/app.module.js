var app = angular.module('MiageToulouse', [
    'ngRoute',
    'ngMessages',
    'pascalprecht.translate',
    'mdl',
    'footercustom',
    'accueil',
    'formation',
    'alternance',
    'connexion',
    'inscription',
    'administration',
    'offre',
    'offredetail',
    'offreadministration',
    'utilisateurquestion',
    'poserquestion',
    'questiondetail',
    'repondrequestion',
    'administrationquestion',
    'utilisateurCourantService',
    'utilisateurService',
    'offreService',
    'questionService'
]);

app.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: '/assets/translate/',
            suffix: '.json'
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('fr');
});

app.filter("htmlSafe", ['$sce', function ($sce) {
    return function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
}]);

app.run(['$rootScope', '$location',
    function ($rootScope) {
        $rootScope.lang = 'fr';

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

app.controller('mainCtrl', function ($rootScope, $scope, $http, $location, $utilisateurCourant, $translate) {

    console.log($rootScope.lang);

    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
    };

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
        $utilisateurCourant.estConnecte($http);
        $location.path('/accueil');
    }
});