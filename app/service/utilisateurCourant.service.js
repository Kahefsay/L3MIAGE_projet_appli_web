angular.module('utilisateurCourantService', []).
    service('$utilisateurCourant', function () {

        this.estConnecte = function ($http) {
            var token = localStorage.getItem('currentUser');

            if (token != null) {
                var payload = JSON.parse(atob(token.split('.')[1]));
            } else {
                var payload = "";
            }

            return $http.get('http://localhost:3000/api/user/get/userByAdresseElectronique/' + payload.AdresseElectronique)
                .then(function (response) {
                    if (response.data[0] != null) {
                        if (response.data[0].JWT = localStorage.getItem('currentUser')) {
                            return response.data[0];
                        }
                    } else {
                        return null;
                    }

                }).
                catch(function (fallback) {
                    console.log(fallback);
                    return fallback;
                });
        };

        this.deconnexion = function() {
            localStorage.removeItem('currentUser');
        }
    });