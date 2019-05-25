angular.
    module('offre').
    component('offre', {
        templateUrl: 'components/offre/offre.template.html',
        controller: function OffreController($scope, $http, $location, $offre) {
            
            $offre.getAllOffre($http)
            .then(data => {
                if (data != null) {
                    $scope.offres = data;
                }
            });;

            $scope.offreDetail = function(offreID) {
                $location.path('/alternance/offre/' + offreID);
            }

        }
    });