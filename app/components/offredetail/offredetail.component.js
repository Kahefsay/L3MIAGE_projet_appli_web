angular.
    module('offredetail').
    component('offredetail', {
        templateUrl: 'components/offredetail/offredetail.template.html',
        controller: function OffreDetailController($scope, $routeParams, $http, $location, $offre) {
            $scope.offreID = $routeParams.offreID;

            $offre.getOffreByID($http, $routeParams.offreID)
                .then(data => {
                    $scope.offre = data[0];
                });;

            $scope.retourOffre = function() {
                $location.path('/alternance/offre');
            }
        }
    });