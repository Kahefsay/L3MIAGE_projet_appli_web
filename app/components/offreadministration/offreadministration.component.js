angular.
    module('offreadministration').
    component('offreadministration', {
        templateUrl: 'components/offreadministration/offreadministration.template.html',
        controller: function OffreAdministrationController($scope, $http, $offre) {

            $scope.creation = false;

            $scope.offre = {
                Type: 'Stage'
            }

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $offre.createOffre($http, $scope.offre)
                        .then(data => {
                            $scope.creation = true;
                        })
                        .catch(function (fallback) {
                            $scope.erreur = "Un problème interne est survenu, \n veuillez réessayer plus tard.";
                        });
                }
            }

            $scope.nouvelleOffre = function () {
                $scope.creation = false;

                $scope.offre = {
                    Type: 'Stage'
                }
            }

        }
    });