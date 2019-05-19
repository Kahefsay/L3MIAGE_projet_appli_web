angular.
    module('inscription').
    component('inscription', {
        templateUrl: 'components/inscription/inscription.template.html',
        controller: function InscriptionController($scope, $http) {

            $scope.creation = false;

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $http.post('http://localhost:3000/api/register', $scope.user, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                        .then(function (response) {
                            $scope.creation = true;
                        }).
                        catch(function (fallback) {
                            $scope.erreur = "Un problème interne est survenu, \n veuillez réessayer plus tard.";
                        });
                }
            }

        }
    });