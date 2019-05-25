angular.module('questionService', []).
    service('$question', function () {

        this.getAllQuestion = function ($http) {
            return $http.get('http://localhost:3000/api/question/get/all')
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.getAllQuestionByUtilisateurID = function ($http, utilisateurID) {
            return $http.get('http://localhost:3000/api/question/get/allByUtilisateurID/' + utilisateurID)
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.getQuestionByID = function ($http, questionID) {
            return $http.get('http://localhost:3000/api/question/get/questionByID/' + questionID)
                .then(function (response) {
                    return response.data;
                }).
                catch(function (fallback) {
                    return fallback;
                });
        };

        this.createQuestion = function ($http, question) {
            return $http.post('http://localhost:3000/api/question/create', question, {
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

        this.update = function ($http, question) {
            return $http.post('http://localhost:3000/api/question/update', question, {
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