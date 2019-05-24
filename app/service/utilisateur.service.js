angular.module('utilisateurService', []).
    service('$utilisateur', function () {

        this.getAllUserExceptCollaborateur = function ($http) {
            return $http.get('http://localhost:3000/api/user/get/allUserExceptCollaborateur')
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.updateRoleUser = function ($http, user) {
            console.log(user);
            return $http.post('http://localhost:3000/api/user/update/role', user, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(function (response) {
                    return response;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        }

    });