angular.
    module('repondrequestion').
    component('repondrequestion', {
        templateUrl: 'components/repondrequestion/repondrequestion.template.html',
        controller: function RepondreQuestionController($scope, $http, $routeParams, $location, $question) {

            $scope.creation = false;

            $question.getQuestionByID($http, $routeParams.questionID)
                .then(data => {
                    $scope.question = data[0];
                    if ($scope.question.Reponse == '') {
                        $scope.aRepondu = false;
                    } else {
                        $scope.aRepondu = true;
                    }
                });;

            $scope.submitForm = function (isValid) {
                if (isValid) {
                    $question.update($http, $scope.question)
                        .then(data => {
                            $scope.creation = true;
                        })
                        .catch(function (fallback) {
                            $scope.erreur = "Un problème interne est survenu, \n veuillez réessayer plus tard.";
                        });
                }
            }

            $scope.retourQuestion = function () {
                $location.path('/administration/question');
            }
        }
    });