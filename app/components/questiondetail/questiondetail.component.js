angular.
    module('questiondetail').
    component('questiondetail', {
        templateUrl: 'components/questiondetail/questiondetail.template.html',
        controller: function QuestionDetailController($scope, $routeParams, $http, $location, $question) {
            $scope.questionID = $routeParams.questionID;

            $question.getQuestionByID($http, $routeParams.questionID)
                .then(data => {
                    $scope.question = data[0];
                });;

            $scope.retourQuestion = function() {
                $location.path('/question');
            }
        }
    });