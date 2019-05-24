angular.
    module('connexion').
    component('connexion', {
        templateUrl: 'components/connexion/connexion.template.html',
        controller: function ConnexionController($scope, $http, $location, $window) {

            if (localStorage.getItem('currentUser') != null) {
                $location.path('/accueil');
            }

            $scope.submitForm = function (isValid) {

                if (isValid) {
                    $http.post('http://localhost:3000/api/login', $scope.user, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    })
                        .then(function (response) {
                            localStorage.setItem('currentUser', JSON.stringify(response.data.token));
                            $window.location.reload();
                        }).
                        catch(function (fallback) {
                            $scope.erreur = "Identifiant invalide";
                        });
                }
            }

        }
    });