angular.
    module('inscription').
    component('inscription', {
        templateUrl: 'components/inscription/inscription.template.html',
        controller : function InscriptionController($scope) {

            $scope.submitForm = function(isValid) {
                if (isValid) {
                    console.log($scope.user)
                }
            }

        }
    });