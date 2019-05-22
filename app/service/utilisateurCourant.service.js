angular.module('utilisateurCourantService', []).
    service('$utilisateurCourant', function () {
        this.getUserName = function () {
            var token = this.getToken();
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.Nom + " " + payload.Prenom;
        };

        this.getToken = function () {
            return localStorage.getItem('currentUser');
        };

        this.estConnecte = function () {
            var token = this.getToken();
            if (token) {
                var payload = JSON.parse(atob(token.split('.')[1]));
                return payload.exp > Date.now() / 1000;
            } else {
                return false;
            }
        };
    })