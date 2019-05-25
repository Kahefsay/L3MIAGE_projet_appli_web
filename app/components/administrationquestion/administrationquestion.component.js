angular.
    module('administrationquestion').
    component('administrationquestion', {
        templateUrl: 'components/administrationquestion/administrationquestion.template.html',
        controller: function AdministrationQuestionController($scope, $http, $location, $question) {

            $scope.filtrer='Tous';

            $scope.aReponse = function(question) {
                if ($scope.filtrer == 'Tous') {
                    return true;
                } else {
                    return question.Reponse == '';
                }

            }

            $question.getAllQuestion($http)
                .then(data => {
                    if (data != null) {
                        $scope.questions = data;
                    }
                });

            $scope.questionDetail = function (questionID) {
                $location.path('/repondrequestion/' + questionID);
            }
        }
    });