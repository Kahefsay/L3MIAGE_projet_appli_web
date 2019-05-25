angular.module('offreService', []).
    service('$offre', function () {

        this.getAllOffre = function ($http) {
            return $http.get('http://localhost:3000/api/offre/get/all')
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.getOffreByID = function ($http, offreID) {
            return $http.get('http://localhost:3000/api/offre/get/offreById/' + offreID)
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.createOffre = function ($http, offre) {
            return $http.post('http://localhost:3000/api/offre/create', offre, {
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