angular.
    module('utilisateurquestion').
    component('utilisateurquestion', {
        templateUrl: 'components/utilisateurquestion/utilisateurquestion.template.html',
        controller: function UtilisateurQuestionController($scope, $http, $location, $question, $utilisateurCourant) {

            var utilisateurID = $utilisateurCourant.getUser().UtilisateurID;

            $question.getAllQuestionByUtilisateurID($http, utilisateurID)
                .then(data => {
                    if (data != null) {
                        $scope.questions = data;
                    }
                });

            $scope.questionDetail = function (questionID) {
                $location.path('/question/' + questionID);
            }
        }
    });